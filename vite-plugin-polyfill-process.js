// vite-plugin-buffer-polyfill.js
export default function polyfillBuffer() {
  return {
    name: 'polyfill-buffer',
    config: () => ({
      define: {
        'global.Buffer': 'Buffer',
      },
      resolve: {
        alias: {
          buffer: 'buffer',
        },
      },
    }),
    transform(code, id) {
      if (id.endsWith('.js') || id.endsWith('.mjs')) {
        return {
          code: `import { Buffer } from 'buffer'; ${code}`,
          map: null,
        };
      }
    },
  };
}
