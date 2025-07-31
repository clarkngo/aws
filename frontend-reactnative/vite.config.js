export default {
  server: {
    proxy: {
      '/movies': 'http://54.71.138.122:3000',
    },
  },
};
