const http = require('http')

const server = http.createServer( (req,res) => {
    if (req.url === '/') {
        res.write('welcome to our home page')
        res.end()
    } else  if (req.url === '/about') {
        res.write('This is the about page')
        res.end()
    } else {
        res.write(`
        <h1>Oooops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">Back home</a>
        `) 
        res.end()
    }
})

server.listen(5000)