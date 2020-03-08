const pkg = require('./package.json');
module.exports = {
  // docker 名称
  repository: 'yyd',
  // tag
  tag: pkg.version,

  push: {
    default: {
      host: '',
      prefix: 'jackness1208'
    },
    yy: {
      host: 'harbor.yy.com',
      prefix: 'front_end'
    }
  },
  // 自动 更新 history
  rewriteHistory: true

  // port 映射
  // portMap: {
  //   80:80
  // },

  // 挂载设置 [本地目录:docker 目录]
  // volume: {
  //   './autorun': '/autorun'
  // },
};
