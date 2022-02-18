module.exports = {
  apps: [{
    name: 'bean',
    script: './bin/www',
    watch: '.',
    autorestart: true,
    watch: true,
    ignore_watch: [ // 不⽤监听的⽂件
      "node_modules",
      "logs"
    ],

    "error_file": "./logs/app-err.log", // 错误⽇志⽂件
    "out_file": "./logs/app-out.log",
    "log_date_format": "YYYY-MM-DD HH:mm:ss", // 给每⾏⽇志标记⼀个时间

    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '120.77.78.73',
      ref: 'origin/main',
      repo: 'git@github.com:hypocritical-7u/bean.git',
      path: '/home/BackEndProject/backend-project',
      ssh_options: "StrictHostKeyChecking=no",
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
};