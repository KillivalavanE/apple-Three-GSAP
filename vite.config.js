import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    server: {
      host: true, // Expose to network
      port: 5173, // Optional: specify the port if needed
    },
  })