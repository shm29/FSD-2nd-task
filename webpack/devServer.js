module.exports = function() {
  return {
    devServer: {
      stats: 'errors-only',
			open: true,
      port: 8081
    }
  };
};
