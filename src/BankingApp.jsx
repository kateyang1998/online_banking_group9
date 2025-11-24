import React, { useState, useEffect } from 'react';
import { Menu, X, Home, CreditCard, TrendingUp, Send, MessageCircle, User, LogOut, Search, ChevronRight, ArrowUpRight, ArrowDownLeft, DollarSign, Bitcoin, Eye, EyeOff, Bell, Settings } from 'lucide-react';

// Mock data
const mockAccounts = [
  { id: 1, name: 'Chequing Account', type: 'chequing', balance: 5420.50, accountNumber: '****4521' },
  { id: 2, name: 'Savings Account', type: 'savings', balance: 12350.00, accountNumber: '****7823' },
  { id: 3, name: 'Credit Card', type: 'credit', balance: -1250.30, limit: 5000, accountNumber: '****3391' }
];

const mockTransactions = [
  { id: 1, date: '2024-11-15', merchant: 'Amazon', category: 'Shopping', amount: -89.99, type: 'debit', status: 'completed' },
  { id: 2, date: '2024-11-14', merchant: 'Salary Deposit', category: 'Income', amount: 3500.00, type: 'credit', status: 'completed' },
  { id: 3, date: '2024-11-13', merchant: 'Starbucks', category: 'Food & Drink', amount: -5.75, type: 'debit', status: 'completed' },
  { id: 4, date: '2024-11-12', merchant: 'Shell Gas Station', category: 'Transportation', amount: -65.00, type: 'debit', status: 'completed' },
  { id: 5, date: '2024-11-11', merchant: 'Netflix', category: 'Entertainment', amount: -16.99, type: 'debit', status: 'completed' },
  { id: 6, date: '2024-11-10', merchant: 'Transfer from Savings', category: 'Transfer', amount: 500.00, type: 'credit', status: 'completed' },
  { id: 7, date: '2024-11-09', merchant: 'Grocery Store', category: 'Food & Drink', amount: -125.43, type: 'debit', status: 'completed' },
  { id: 8, date: '2024-11-08', merchant: 'Gym Membership', category: 'Health', amount: -45.00, type: 'debit', status: 'completed' },
  { id: 9, date: '2024-11-07', merchant: 'Uber', category: 'Transportation', amount: -18.50, type: 'debit', status: 'completed' },
  { id: 10, date: '2024-11-06', merchant: 'Pharmacy', category: 'Health', amount: -32.15, type: 'debit', status: 'completed' },
  { id: 11, date: '2024-11-05', merchant: 'Restaurant', category: 'Food & Drink', amount: -78.90, type: 'debit', status: 'completed' },
  { id: 12, date: '2024-11-04', merchant: 'Online Transfer', category: 'Transfer', amount: -200.00, type: 'debit', status: 'completed' }
];

const mockInvestments = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', type: 'crypto', balance: 0.5234, value: 48567.80, change: 2.34, accountNumber: '****BTC1' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', type: 'crypto', balance: 3.456, value: 12890.45, change: -1.23, accountNumber: '****ETH1' },
  { id: 3, name: 'TFSA Investment', symbol: 'TFSA', type: 'stock', balance: 1, value: 25000.00, change: 0.89, accountNumber: '****TFSA' },
  { id: 4, name: 'RRSP Investment', symbol: 'RRSP', type: 'stock', balance: 1, value: 45000.00, change: 1.45, accountNumber: '****RRSP' }
];

const mockInvestmentTransactions = [
  { id: 1, date: '2024-11-15', asset: 'Bitcoin', type: 'buy', amount: 0.05, price: 92500.00, total: 4625.00 },
  { id: 2, date: '2024-11-12', asset: 'Ethereum', type: 'sell', amount: 0.5, price: 3450.00, total: -1725.00 },
  { id: 3, date: '2024-11-10', asset: 'TFSA', type: 'deposit', amount: 1000, price: 1, total: 1000.00 },
  { id: 4, date: '2024-11-08', asset: 'Bitcoin', type: 'buy', amount: 0.1, price: 91200.00, total: 9120.00 },
  { id: 5, date: '2024-11-05', asset: 'RRSP', type: 'deposit', amount: 500, price: 1, total: 500.00 },
  { id: 6, date: '2024-11-03', asset: 'Ethereum', type: 'buy', amount: 1.0, price: 3400.00, total: 3400.00 },
  { id: 7, date: '2024-11-01', asset: 'Bitcoin', type: 'sell', amount: 0.08, price: 90000.00, total: -7200.00 },
  { id: 8, date: '2024-10-28', asset: 'TFSA', type: 'deposit', amount: 2000, price: 1, total: 2000.00 },
  { id: 9, date: '2024-10-25', asset: 'Ethereum', type: 'buy', amount: 0.8, price: 3300.00, total: 2640.00 },
  { id: 10, date: '2024-10-20', asset: 'Bitcoin', type: 'buy', amount: 0.15, price: 89000.00, total: 13350.00 }
];

const mockTransferHistory = [
  { id: 1, date: '2024-11-16', from: 'Chequing', to: 'Savings', amount: 500.00, status: 'completed' },
  { id: 2, date: '2024-11-14', from: 'Savings', to: 'Chequing', amount: 200.00, status: 'completed' },
  { id: 3, date: '2024-11-12', from: 'Chequing', to: 'Investment', amount: 1000.00, status: 'completed' },
  { id: 4, date: '2024-11-10', from: 'Savings', to: 'Chequing', amount: 300.00, status: 'completed' },
  { id: 5, date: '2024-11-08', from: 'Chequing', to: 'Savings', amount: 750.00, status: 'completed' },
  { id: 6, date: '2024-11-06', from: 'Chequing', to: 'External Account', amount: 450.00, status: 'completed' },
  { id: 7, date: '2024-11-04', from: 'Savings', to: 'Chequing', amount: 600.00, status: 'completed' },
  { id: 8, date: '2024-11-02', from: 'Chequing', to: 'Investment', amount: 2000.00, status: 'completed' },
  { id: 9, date: '2024-10-30', from: 'Savings', to: 'Chequing', amount: 400.00, status: 'completed' },
  { id: 10, date: '2024-10-28', from: 'Chequing', to: 'Savings', amount: 1500.00, status: 'completed' }
];

export default function BankingApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(mockAccounts[0]);
  const [showBalance, setShowBalance] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'assistant', text: 'Hello! I\'m your Vanta Bank virtual assistant. How can I help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [transferForm, setTransferForm] = useState({
    from: mockAccounts[0].id,
    to: mockAccounts[1].id,
    amount: ''
  });

  // Sign In Component
  const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) => {
      e.preventDefault();
      setIsLoggedIn(true);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <main className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <header className="text-center mb-8">
            <div className="inline-block mb-4">
              <img src="/online_banking_group9/Logo.png" alt="Vanta Bank Logo" className="w-16 h-16 mx-auto object-contain" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Vanta Bank</h1>
            <p className="text-gray-600 mt-2">Welcome back! Please sign in to continue.</p>
          </header>

          <form onSubmit={handleSignIn} className="space-y-6" aria-label="Sign in form">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-amber-700 border-gray-300 rounded focus:ring-amber-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-amber-700 hover:text-amber-900">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-amber-500 transition focus:ring-4 focus:ring-amber-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-amber-700 hover:text-amber-900 font-semibold">
                Sign up
              </a>
            </p>
          </div>

          <footer className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Secured by 256-bit encryption • FDIC Insured
            </p>
          </footer>
        </main>
      </div>
    );
  };

  // Header Component
  const Header = () => (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-40">
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center">
              <img src="/online_banking_group9/logo-icon.png" alt="Vanta Bank Logo" className="w-8 h-8 object-contain max-[405px]:w-7 max-[405px]:h-7" />
              <span className="ml-2 text-xl font-bold text-gray-900 max-[405px]:text-base">Vanta Bank</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative" aria-label="Notifications">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Settings">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              aria-label="Sign out"
            >
              <User className="w-6 h-6 text-gray-600" />
              <span className="hidden sm:inline text-sm font-medium text-gray-700">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  // Sidebar Navigation
  const Sidebar = () => {
    const navItems = [
      { id: 'dashboard', icon: Home, label: 'Dashboard' },
      { id: 'transactions', icon: CreditCard, label: 'Transactions' },
      { id: 'investments', icon: TrendingUp, label: 'Investments' },
      { id: 'transfer', icon: Send, label: 'Transfer' },
      { id: 'chat', icon: MessageCircle, label: 'Support Chat' }
    ];

    return (
      <>
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-gray-800 to-amber-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 animate-fadeIn" onClick={() => setIsMobileMenuOpen(false)}>
            <aside className="w-full bg-white h-full animate-slideInLeft" onClick={(e) => e.stopPropagation()}>
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img src="/online_banking_group9/logo-icon.png" alt="Vanta Bank Logo" className="w-8 h-8 object-contain" />
                    <span className="ml-2 text-xl font-bold">Vanta Bank</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                        currentPage === item.id
                          ? 'bg-gradient-to-r from-gray-800 to-amber-600 text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        )}
      </>
    );
  };

  // Dashboard Page
  const Dashboard = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-2 text-base">Here's your financial overview</p>
        </div>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="mt-4 sm:mt-0 flex items-center space-x-2 px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-amber-400 transition"
        >
          {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          <span className="text-sm font-semibold">{showBalance ? 'Hide' : 'Show'} Balances</span>
        </button>
      </div>

      {/* Quick Actions - Enhanced Proximity & Grouping */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Send, label: 'Transfer', page: 'transfer' },
            { icon: CreditCard, label: 'Pay Bill', page: 'transactions' },
            { icon: TrendingUp, label: 'Invest', page: 'investments' },
            { icon: MessageCircle, label: 'Support', page: 'chat' }
          ].map((action, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(action.page)}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md transition group"
            >
              <div className="p-3 bg-white rounded-full mb-3 group-hover:bg-amber-100 transition">
                <action.icon className="w-6 h-6 text-amber-700" />
              </div>
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Accounts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Your Accounts</h2>
          <span className="text-sm text-gray-500">{mockAccounts.length} accounts</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockAccounts.map((account) => (
            <div
              key={account.id}
              className="bg-gradient-to-br from-gray-800 to-amber-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-xl transition"
              onClick={() => {
                setSelectedAccount(account);
                setCurrentPage('transactions');
              }}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-amber-100 text-sm">{account.type.toUpperCase()}</p>
                  <p className="text-white font-medium mt-1">{account.accountNumber}</p>
                </div>
                <CreditCard className="w-8 h-8 text-white opacity-80" />
              </div>
              <div>
                <p className="text-amber-100 text-sm mb-1">{account.name}</p>
                <p className="text-3xl font-bold">
                  {showBalance ? `$${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '••••••'}
                </p>
                {account.limit && (
                  <p className="text-amber-100 text-sm mt-2">
                    Limit: ${account.limit.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
            <p className="text-sm text-gray-500 mt-1">Last 5 transactions</p>
          </div>
          <button
            onClick={() => setCurrentPage('transactions')}
            className="text-amber-700 hover:text-amber-900 text-sm font-semibold flex items-center px-3 py-2 rounded-lg hover:bg-amber-50 transition"
          >
            View all
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
          {mockTransactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="p-4 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className={`p-2 rounded-full flex-shrink-0 ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownLeft className="w-5 h-5 text-green-700" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{transaction.merchant}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        {transaction.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`font-semibold text-lg ${transaction.type === 'credit' ? 'text-green-700' : 'text-gray-900'}`}>
                    {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Transactions Page
  const TransactionsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
      // Trigger bar animation after component mounts
      const timer = setTimeout(() => setAnimateBars(true), 100);
      return () => clearTimeout(timer);
    }, []);

    const categories = ['all', ...new Set(mockTransactions.map(t => t.category))];

    const filteredTransactions = mockTransactions.filter(t => {
      const matchesSearch = t.merchant.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || t.category === filterCategory;
      return matchesSearch && matchesCategory;
    });

    const handleExport = () => {
      const csvContent = [
        ['Date', 'Merchant', 'Category', 'Amount', 'Type', 'Status'],
        ...filteredTransactions.map(t => [
          t.date,
          t.merchant,
          t.category,
          t.amount,
          t.type,
          t.status
        ])
      ].map(row => row.join(',')).join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `transactions-${selectedAccount.name}-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    };

    // Calculate spending by category
    const spendingByCategory = categories
      .filter(cat => cat !== 'all')
      .map(cat => {
        const total = mockTransactions
          .filter(t => t.category === cat && t.type === 'debit')
          .reduce((sum, t) => sum + Math.abs(t.amount), 0);
        return { category: cat, total };
      })
      .filter(item => item.total > 0)
      .sort((a, b) => b.total - a.total);

    return (
      <div className="space-y-8">
        <div className="pb-4 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-600 mt-2 text-base">{selectedAccount.name}</p>
        </div>

        {/* Account Selector */}
        <div className="flex flex-wrap gap-3">
          {mockAccounts.map((account) => (
            <button
              key={account.id}
              onClick={() => setSelectedAccount(account)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedAccount.id === account.id
                  ? 'bg-gradient-to-r from-gray-800 to-amber-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-amber-400'
              }`}
            >
              {account.name}
            </button>
          ))}
        </div>

        {/* Spending Analytics */}
        {spendingByCategory.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Spending by Category</h2>
            <div className="space-y-3">
              {spendingByCategory.map((item, idx) => {
                const maxTotal = spendingByCategory[0].total;
                const percentage = (item.total / maxTotal) * 100;
                return (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.category}</span>
                      <span className="text-sm font-bold text-gray-900">${item.total.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-800 to-amber-600 h-2 rounded-full transition-all ease-out"
                        style={{
                          width: animateBars ? `${percentage}%` : '0%',
                          transitionDuration: '1.5s'
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Filters - Enhanced Common Region */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Filter & Search</h3>
            <span className="text-xs text-gray-500">{filteredTransactions.length} results</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <label htmlFor="search-transactions" className="block text-xs font-medium text-gray-600 mb-2">Search by Merchant</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="search-transactions"
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <label htmlFor="filter-category" className="block text-xs font-medium text-gray-600 mb-2">Filter by Category</label>
              <select
                id="filter-category"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="p-4 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownLeft className="w-5 h-5 text-green-700" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{transaction.merchant}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1 max-[490px]:flex-col max-[490px]:items-start max-[490px]:gap-1">
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          {transaction.category}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className={`font-semibold text-lg ${transaction.type === 'credit' ? 'text-green-700' : 'text-gray-900'}`}>
                    {transaction.type === 'credit' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleExport}
          className="px-6 py-3 bg-gradient-to-r from-gray-800 to-amber-600 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-amber-500 transition focus:ring-4 focus:ring-amber-300 shadow-md whitespace-nowrap"
          title="Export transactions to CSV"
        >
          Export Transactions to CSV
        </button>
      </div>
    );
  };

  // Investments Page
  const InvestmentsPage = () => {
    const totalValue = mockInvestments.reduce((sum, inv) => sum + inv.value, 0);

    return (
      <div className="space-y-8">
        <div className="pb-4 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Investments</h1>
          <p className="text-gray-600 mt-2 text-base">Track your portfolio performance</p>
        </div>

        {/* Portfolio Summary */}
        <div className="bg-gradient-to-br from-gray-800 to-amber-600 rounded-xl p-6 text-white">
          <p className="text-amber-100 text-sm mb-2">Total Portfolio Value</p>
          <p className="text-4xl font-bold mb-4">
            ${showBalance ? totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '••••••'}
          </p>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-400 bg-opacity-20 text-white">
              +5.2% This Month
            </span>
          </div>
        </div>

        {/* Investment Accounts */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Investments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockInvestments.map((investment) => (
              <div
                key={investment.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {investment.type === 'crypto' ? (
                      <div className="p-2 bg-orange-100 rounded-full">
                        <Bitcoin className="w-6 h-6 text-orange-600" />
                      </div>
                    ) : (
                      <div className="p-2 bg-blue-100 rounded-full">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{investment.name}</p>
                      <p className="text-sm text-gray-500">{investment.accountNumber}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    investment.change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {investment.change >= 0 ? '+' : ''}{investment.change}%
                  </span>
                </div>
                
                <div className="space-y-2">
                  {investment.type === 'crypto' && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Balance</span>
                      <span className="text-sm font-medium text-gray-900">{investment.balance} {investment.symbol}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Value</span>
                    <span className="text-lg font-bold text-gray-900">
                      ${showBalance ? investment.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '••••••'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Performance Chart */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Portfolio Performance</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Asset Allocation</span>
              </div>
              <div className="flex h-8 rounded-lg overflow-hidden">
                {mockInvestments.map((inv, idx) => {
                  const percentage = (inv.value / totalValue) * 100;
                  const colors = ['bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-indigo-500'];
                  return (
                    <div
                      key={inv.id}
                      className={`${colors[idx]} transition-all duration-500 hover:opacity-80 cursor-pointer`}
                      style={{ width: `${percentage}%` }}
                      title={`${inv.name}: ${percentage.toFixed(1)}%`}
                    />
                  );
                })}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {mockInvestments.map((inv, idx) => {
                const percentage = (inv.value / totalValue) * 100;
                const colors = ['bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-indigo-500'];
                return (
                  <div key={inv.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${colors[idx]}`}></div>
                      <span className="text-sm font-medium text-gray-700">{inv.symbol}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">{percentage.toFixed(1)}%</p>
                      <p className="text-xs text-gray-500">${inv.value.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Investment Transactions */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Investment Activity</h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
            {mockInvestmentTransactions.map((transaction) => (
              <div key={transaction.id} className="p-4 hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'buy' || transaction.type === 'deposit' 
                        ? 'bg-green-100' 
                        : 'bg-red-100'
                    }`}>
                      {transaction.type === 'buy' || transaction.type === 'deposit' ? (
                        <ArrowDownLeft className="w-5 h-5 text-green-700" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">
                        {transaction.type.toUpperCase()} {transaction.asset}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-1">
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                        <p className="text-sm text-gray-500">
                          {transaction.amount} @ ${transaction.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className={`font-semibold text-lg ${
                      transaction.type === 'buy' || transaction.type === 'deposit'
                        ? 'text-gray-900' 
                        : 'text-green-700'
                    }`}>
                      {transaction.type === 'sell' ? '+' : '-'}${Math.abs(transaction.total).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Transfer Page
  const TransferPage = () => {
    const [transferSuccess, setTransferSuccess] = useState(false);

    const handleTransfer = (e) => {
      e.preventDefault();
      setTransferSuccess(true);
      setTimeout(() => setTransferSuccess(false), 3000);
      setTransferForm({ ...transferForm, amount: '' });
    };

    const fromAccount = mockAccounts.find(a => a.id === transferForm.from);
    const toAccount = mockAccounts.find(a => a.id === transferForm.to);

    return (
      <div className="space-y-8">
        <div className="pb-4 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Transfer Funds</h1>
          <p className="text-gray-600 mt-2 text-base">Move money between your accounts</p>
        </div>

        {transferSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-green-900">Transfer completed successfully!</p>
              <p className="text-sm text-green-700">Your funds have been transferred.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transfer Form - Enhanced Visual Flow & Continuity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">New Transfer</h2>

            <form onSubmit={handleTransfer} className="space-y-6">
              {/* From Account Section */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <label htmlFor="from-account" className="block text-sm font-semibold text-gray-700 mb-3">
                  From Account
                </label>
                <select
                  id="from-account"
                  value={transferForm.from}
                  onChange={(e) => setTransferForm({ ...transferForm, from: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {mockAccounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} - ${account.balance.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Visual Flow Indicator */}
              <div className="flex justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-gradient-to-b from-gray-200 via-amber-400 to-gray-200"></div>
                </div>
                <div className="relative p-3 bg-gradient-to-br from-gray-800 to-amber-600 rounded-full shadow-lg z-10">
                  <ArrowDownLeft className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* To Account Section */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <label htmlFor="to-account" className="block text-sm font-semibold text-gray-700 mb-3">
                  To Account
                </label>
                <select
                  id="to-account"
                  value={transferForm.to}
                  onChange={(e) => setTransferForm({ ...transferForm, to: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {mockAccounts.filter(a => a.id !== transferForm.from).map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} - ${account.balance.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount Section */}
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-3">
                  Transfer Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-semibold">$</span>
                  <input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={transferForm.amount}
                    onChange={(e) => setTransferForm({ ...transferForm, amount: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg font-semibold"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              {/* Summary Section */}
              <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-lg p-5 border border-gray-200 space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Transfer Summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">From</span>
                  <span className="font-semibold text-gray-900">{fromAccount?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">To</span>
                  <span className="font-semibold text-gray-900">{toAccount?.name}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-300">
                  <span className="text-gray-700 font-semibold">Transfer Amount</span>
                  <span className="font-bold text-xl text-gray-900">
                    ${transferForm.amount || '0.00'}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-800 to-amber-600 text-white py-4 rounded-lg font-semibold hover:from-gray-700 hover:to-amber-500 transition focus:ring-4 focus:ring-amber-300 shadow-lg"
              >
                Complete Transfer
              </button>
            </form>
          </div>

          {/* Transfer History */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Transfer History</h2>
            
            <div className="space-y-3 max-h-[750px] overflow-y-auto">
              {mockTransferHistory.map((transfer) => (
                <div key={transfer.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      transfer.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transfer.status}
                    </span>
                    <span className="text-sm text-gray-500">{transfer.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-900">{transfer.from}</span> → {transfer.to}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900">${transfer.amount.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Chat Page
  const ChatPage = () => {
    const handleSendMessage = (e) => {
      e.preventDefault();
      if (!chatInput.trim()) return;

      const userMessage = chatInput;
      setChatMessages([...chatMessages, { type: 'user', text: userMessage }]);
      setChatInput('');

      // Simulate assistant response
      setTimeout(() => {
        let response = '';
        const lowerInput = userMessage.toLowerCase();
        
        if (lowerInput.includes('balance') || lowerInput.includes('account')) {
          response = 'Your current chequing account balance is $5,420.50. Would you like to know about your other accounts?';
        } else if (lowerInput.includes('transfer')) {
          response = 'I can help you with transfers. You can transfer funds between your accounts using the Transfer page. Would you like me to guide you through it?';
        } else if (lowerInput.includes('transaction') || lowerInput.includes('payment')) {
          response = 'You can view all your transactions on the Transactions page. You can also search and filter them by category, date, or merchant.';
        } else if (lowerInput.includes('investment') || lowerInput.includes('crypto')) {
          response = 'Your investment portfolio is currently valued at $131,458.25. This includes both traditional investments and cryptocurrency holdings. Would you like more details?';
        } else {
          response = 'I\'m here to help! You can ask me about your account balances, recent transactions, transfers, investments, or any other banking questions.';
        }

        setChatMessages(prev => [...prev, { type: 'assistant', text: response }]);
      }, 1000);
    };

    const quickQuestions = [
      'What\'s my account balance?',
      'How do I transfer money?',
      'Show my recent transactions',
      'Tell me about my investments'
    ];

    return (
      <div className="space-y-8">
        <div className="pb-4 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Virtual Assistant</h1>
          <p className="text-gray-600 mt-2 text-base">Get help with your banking needs</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 flex flex-col" style={{ height: 'calc(100vh - 300px)', minHeight: '500px' }}>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {chatMessages.map((message, idx) => (
              <div key={idx} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-gray-800 to-amber-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {chatMessages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setChatInput(question);
                    }}
                    className="text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 transition"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <label htmlFor="chat-message-input" className="sr-only">Type your message</label>
              <input
                id="chat-message-input"
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-amber-600 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-amber-500 transition focus:ring-4 focus:ring-amber-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Main Layout
  if (!isLoggedIn) {
    return <SignInPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <Sidebar />
        <main className="lg:ml-64 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'transactions' && <TransactionsPage />}
            {currentPage === 'investments' && <InvestmentsPage />}
            {currentPage === 'transfer' && <TransferPage />}
            {currentPage === 'chat' && <ChatPage />}
          </div>
        </main>
      </div>

      {/* Floating Chat Button */}
      {currentPage !== 'chat' && (
        <button
          onClick={() => setCurrentPage('chat')}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-br from-gray-800 to-amber-600 text-white rounded-full shadow-lg hover:from-gray-700 hover:to-amber-500 transition focus:ring-4 focus:ring-amber-300 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Mini Chat Widget */}
      {chatOpen && currentPage !== 'chat' && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 flex flex-col" style={{ height: '500px' }}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-amber-700" />
              <h3 className="font-semibold text-gray-900">Virtual Assistant</h3>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.slice(-5).map((message, idx) => (
              <div key={idx} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-gray-800 to-amber-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-3">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <label htmlFor="mini-chat-input" className="sr-only">Type a message</label>
              <input
                id="mini-chat-input"
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-amber-600 text-white rounded-lg text-sm font-medium hover:from-gray-700 hover:to-amber-500 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
