const Sequelize = require('sequelize')
const config = {host: 'localhost', database: 'todolist', username: 'root', password: '123456', port: '3308'}
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql', // 数据库方言
  port: config.port,
  pool: { max: 5, min: 0, idle: 30000 },
  define: { timestamps: false }
})

module.exports = sequelize
