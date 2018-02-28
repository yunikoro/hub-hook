module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'Util-Hook',
      script    : 'app',
      watch     : true,
      watch_options : {
        usePolling: true
      },

      error_file: 'err.log',
      out_file: 'out.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',

      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};
