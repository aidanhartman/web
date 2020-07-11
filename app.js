const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer(function (req, res) {
res.write('Hello World')
res.end()
})

server.listen(port, function(error) {
if (error) {
console.log('Something went wrong', error)
} else ('Server is listening to port' + port}
})
