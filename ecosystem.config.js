module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'apiPart',
      script    : 'index.js',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'api',
      host : '46.101.114.172',
      ref  : 'origin/master',
      repo : 'https://github.com/pavelko1608/reactProject-apiPart.git',
      path : '/home/api/apiPart',
      'post-deploy' : 'nvm install && npm install && /home/api/.nvm/versions/node/v6.10.3/bin/pm2 reload ecosystem.config.js --env production'
    }
  }
};
