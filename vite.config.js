import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: true
    },
  resolve: {
    alias: {
      "#*": path.resolve("src"),
    },
  },
})
