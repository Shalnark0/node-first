var http = require('http');
var fs = require('fs')

const PORT = 8080

var server = http.createServer(function(req,res){
  if (req.url == '/')
    {
      fs.readFile('./index.html', function(error, html){
        if (error) throw error
        res.writeHead(200, {'Content-Type': 'text/html'})      
        res.write(html)
        res.end();
      })
      
    }
    else if (req.url == '/about')
      {
        fs.readFile('./about.html', function(error, html){
          if (error) throw error
          res.writeHead(200, {'Content-Type': 'text/html'})      
          res.write(html)
          res.end();
        })
      }
    else if (req.url == '/contact-me')
      {
        fs.readFile('./contact-me.html', function(error, html){
          if (error) throw error
          res.writeHead(200, {'Content-Type': 'text/html'})      
          res.write(html)
          res.end();
        })
      }
    else res.end('404 not found')
})
server.listen(PORT)