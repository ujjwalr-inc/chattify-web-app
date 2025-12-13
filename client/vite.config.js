import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import daisyui from 'daisyui'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss({
      config: {
        plugins: [daisyui],
        daisyui: {
          themes: ["light", "dark", "retro", "cupcake"], // pick the themes you want
        },
      },
    })],
})
