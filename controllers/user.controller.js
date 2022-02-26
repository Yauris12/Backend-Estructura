const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = 'no name', apikey } = req.query
  res.json({
    msg: 'get API - Controlador',
    nombre,
    q,
    apikey,
  })
}
const usuariosPost = (req, res = response) => {
  const { name, edad } = req.body
  res.json({ msg: 'Post API - Controlador', name, edad })
}
const usuariosPut = (req, res = response) => {
  const { id } = req.params

  res.json({
    msg: 'PUT API - Controlador',
    id,
  })
}
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'DELETE API - Controlador',
  })
}
const usuariosPath = (req, res = response) => {
  res.json({
    msg: 'PATCH API - Controlador',
  })
}
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPath,
}
