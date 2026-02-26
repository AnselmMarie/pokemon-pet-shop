module.exports = {
  apps: [
    {
      name: 'pokemon-api',
      script: './main.js',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
