import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/online_banking_group9/', 
  build: {
    outDir: 'docs',                 
  },
})

