import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) =>{
  // Get the .env environment configuration file
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_PATH,
    plugins: [vue()],
    optimizeDeps: {
      exclude: ['index.js'],
    },
  }
})

