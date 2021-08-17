const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [
    sveltePreprocess({
      sass: true,
      scss: {},
      postcss: {
        plugins: [require('autoprefixer')],
      },
    }),
  ],
};
