# Vanta Bank - Online Banking Application

A modern, accessible online banking web application built with React and Tailwind CSS, focusing on user experience and Gestalt principles.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Accessibility](#accessibility)
- [Design Principles](#design-principles)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

Vanta Bank is a comprehensive online banking application designed to provide users with a seamless and intuitive banking experience. The application demonstrates modern UI/UX principles, with a strong emphasis on accessibility (WCAG compliance) and Gestalt design principles to enhance user comprehension and interaction.

This project was developed as part of "The Emerging Interface" course at Conestoga College, showcasing best practices in web development, responsive design, and accessibility standards.

## Features

### Core Banking Features
- **Account Management**: View multiple account types (Chequing, Savings, Credit Card)
- **Transaction History**: Browse and filter transaction records with search functionality
- **Investment Portfolio**: Track cryptocurrency and traditional investment holdings
- **Fund Transfers**: Transfer money between accounts with an intuitive interface
- **Virtual Assistant**: Interactive chat support for banking queries

### User Experience
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Show/Hide Balance**: Privacy control for sensitive financial information
- **Transaction Export**: Export transaction history to CSV format
- **Real-time Updates**: Simulated real-time balance and transaction updates
- **Animated Charts**: Smooth animations for spending analytics visualization

### Accessibility Features
- **WCAG Compliant**: Meets accessibility standards with proper ARIA landmarks
- **High Contrast Colors**: Enhanced color contrast ratios for better readability
- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Support**: Properly labeled elements and semantic HTML
- **Responsive Text**: Maintains readability across all screen sizes

## Technologies Used

### Frontend
- **React 19.2.0** - JavaScript library for building user interfaces
- **React DOM 19.2.0** - React package for working with the DOM
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Lucide React 0.554.0** - Icon library for React

### Build Tools
- **Vite (Rolldown)** - Fast build tool and development server
- **PostCSS 8.5.6** - Tool for transforming CSS with JavaScript
- **Autoprefixer 10.4.22** - PostCSS plugin to parse CSS and add vendor prefixes

### Development Tools
- **ESLint 9.39.1** - JavaScript linting utility
- **eslint-plugin-react-hooks** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** - ESLint plugin for React Fast Refresh

## Installation

### Prerequisites
- Node.js (version 16 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd online_banking_group9
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

### Running the Application

**Development Mode**
```bash
npm run dev
```
Starts the development server with hot module replacement.

**Build for Production**
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

**Preview Production Build**
```bash
npm run preview
```
Previews the production build locally.

**Linting**
```bash
npm run lint
```
Runs ESLint to check code quality.

### Navigating the Application

1. **Sign In**: Enter any username and password (demo mode)
2. **Dashboard**: View account overview, quick actions, and recent transactions
3. **Transactions**: Browse, search, and filter transaction history
4. **Investments**: Monitor investment portfolio and recent activity
5. **Transfer**: Move funds between accounts with a guided interface
6. **Support Chat**: Ask questions via the virtual assistant

### Key Interactions

- **Toggle Balance Visibility**: Click the eye icon on the dashboard
- **Filter Transactions**: Use the search box or category dropdown
- **Export Data**: Click "Export Transactions to CSV" button
- **Switch Pages**: Use the sidebar navigation (desktop) or hamburger menu (mobile)

## Accessibility

This application follows WCAG 2.1 Level AA guidelines:

### Implemented Features
- ✅ Semantic HTML with proper heading hierarchy
- ✅ ARIA landmarks for page regions (header, main, nav, footer)
- ✅ Proper form labels with `htmlFor` and `id` associations
- ✅ High contrast color ratios (text-green-700, text-amber-700)
- ✅ Descriptive alt text for images
- ✅ Keyboard navigation support
- ✅ Screen reader friendly labels and descriptions
- ✅ Focus indicators on interactive elements

### Testing
The application has been tested with:
- WAVE Web Accessibility Evaluation Tool
- Keyboard-only navigation
- Screen reader compatibility (recommended: NVDA, JAWS, or VoiceOver)

## Design Principles

### Gestalt Principles Applied

1. **Proximity**: Related elements are grouped together with consistent spacing
   - Account cards, transaction items, and form sections

2. **Common Region**: Elements are enclosed in visual containers
   - White cards with borders for distinct sections
   - Color-coded backgrounds for different form areas

3. **Continuity & Visual Flow**: Smooth visual paths guide users
   - Progressive disclosure in the transfer form
   - Arrow indicators showing flow direction
   - Consistent navigation patterns

4. **Similarity**: Similar items share visual characteristics
   - Consistent button styles and colors
   - Uniform transaction card layouts
   - Matching icon usage across features

### Responsive Design
- **Mobile First**: Optimized for small screens with progressive enhancement
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Adaptive Layouts**: Grid and flexbox for flexible arrangements

## Project Structure

```
online_banking_group9/
├── public/
│   └── online_banking_group9/
│       ├── Logo.png
│       └── logo-icon.png
├── src/
│   ├── BankingApp.jsx          # Main application component
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Global styles
│   ├── main.jsx               # Application entry point
│   └── index.css              # Tailwind CSS imports
├── gestalt-principles-summary.txt  # Design documentation
├── package.json               # Project dependencies
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # Project documentation
```

## Contributing

This is an academic project, but suggestions and improvements are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Run `npm run lint` before committing
- Ensure all accessibility features remain intact
- Test responsive design across devices

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Acknowledgments

- **Course**: The Emerging Interface - Conestoga College (Fall 2025)
- **Group**: Group 9
- **Icons**: Lucide React icon library
- **Design Inspiration**: Modern banking applications and Gestalt principles

## Contact

For questions or feedback about this project, please contact:

**Team Members:**
- **Kate Yang** - kyang8971@conestogac.on.ca
- **Jiwoo Lee** - jlee9129@conestogac.on.ca

---

**Note**: This is a demonstration project for educational purposes. It does not connect to real banking systems or handle actual financial transactions.
