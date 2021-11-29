import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      react: `preact/compat`,
      'react-dom/test-utils': `preact/test-utils`,
      'react-dom': `preact/compat`,
      'react/jsx-runtime': `preact/jsx-runtime`,
    },
  },
  plugins: [
    preact(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
