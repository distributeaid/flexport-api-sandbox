const http = require('http')
const { requestHandler } = require('./server')

const port = process.env.SANDBOX_API_PORT || 3000
const hostname = `http://0.0.0.0:${port}`

const server = http.createServer(requestHandler(hostname))

server.listen(port, (err) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}

	console.debug('[Flexport API Sandbox]', `is listening on ${hostname}`)
})
