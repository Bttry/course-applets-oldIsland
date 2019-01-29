module.exports = {
  api_base_url: "http://127.0.0.1:3000",
  appkey: "wx20da32f2056b153f",
  mongodb: {
    DBURL: "mongodb://127.0.0.1:27017/oldisland",
    options: {
      // 是否自动重连接
      auto_reconnect: true,
      // 允许字符串连接
      useNewUrlParser: true,
      // 连接池大小
      poolSize: 10
    }
  },
  app: {
    HOST: "127.0.0.1",
    POST: 3000
  }
};
