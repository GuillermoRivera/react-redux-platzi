import http from 'http'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Pages from './pages/containers/Page.jsx'
import Layout from './pages/components/Layout.jsx'


const port = 3000

function requestHandler (req, res) {
  const context = {}
  let html = renderToString(
    //React.DOM.h1(null, 'Hola') // Pasamos null porque no le estamos pasando props
    <StaticRouter location={req.url} context={context}>
      <Pages/>
    </StaticRouter>
  )

  res.setHeader('Content-Type', 'text/html')

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  }

  res.write(
    renderToStaticMarkup(
      <Layout 
        title="Application"
        content={html}
      />
    )
  )
  res.end() // Finaliza la respuesta
}

const server = http.createServer(requestHandler)

server.listen(port)

console.log(`Server listening at port ${port}`)
