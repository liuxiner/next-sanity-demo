module.exports = {
  apps: [
    {
      name: 'demo',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'npm',
      args: 'start',
    },
  ],
}
