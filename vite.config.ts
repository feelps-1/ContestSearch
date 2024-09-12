import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'

export default defineConfig(({  }) => {
  return {
    plugins: [
      nodePolyfills(),
      react()],
    envDir: './buildConfig/environments',
    base: process.env.PUBLIC_URL,
    build: { outDir: process.env.BUILD_PATH },
  }

})