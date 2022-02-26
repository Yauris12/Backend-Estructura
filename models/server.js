const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usuariosPath = '/api/usuarios'
    // Middlewares => funciones que añanden funcional a nuesto web server
    // Rutas de mi apliacions
    this.middlewares()
    this.routes()
  }
  // use palabra clave para saber que es un  middlewar
  middlewares() {
    this.app.use(cors())
    this.app.use(morgan('dev'))

    //Lectura y parseo del body
    this.app.use(express.json())
    // this.app.use(bodyParser.json())

    //directio publico

    this.app.use(express.static('public'))
  }
  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
  }

  listen() {
    this.app.listen(this.port, (req, res) => {
      console.log('servidor corriendo', this.port)
    })
  }
}

module.exports = Server
