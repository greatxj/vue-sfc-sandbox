import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@vue/compiler-sfc': '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'
  //   }
  // },
  optimizeDeps: {
    exclude: ['consolidate', 'velocityjs', 'dustjs-linkedin', 'atpl', 'liquor', 'twig', 'ejs', 'eco', 'jazz', 'hamljs', 'hamlet', 'jqtpl', 'whiskers', 'haml-coffee', 'hogan.js', 'templayed', 'handlebars', 'underscore', 'lodash', 'walrus', 'mustache', 'just', 'ect', 'mote', 'toffee', 'dot', 'bracket-template', 'ractive', 'htmling', 'babel-core', 'plates', 'react-dom/server', 'react', 'vash', 'slm', 'marko', 'teacup/lib/express', 'coffee-script', 'squirrelly', 'twing']
  }
})
