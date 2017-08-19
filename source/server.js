import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'

const port = 3000

function requestHandler (req, res) {
  const html = renderToString(
    React.DOM.h1(null, 'Hola') // Pasamos null porque no le estamos pasando props
  )
  res.write(html) // Escribir en la respuesta el HTML
  res.end() // Finaliza la respuesta
}

const server = http.createServer(requestHandler)

server.listen(port)

console.log(`Server listening at port ${port}`)
