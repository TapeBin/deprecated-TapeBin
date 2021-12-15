module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },

  env: {
    BACK_END: process.env.BACK_END,
    PRODUCTION: process.env.PRODUCTION
  },
  webpack: (config) => {
    config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
    )

    return config
  },
};
