import * as http from 'http'
import { requestHandler } from './server'

const port = process.env.SANDBOX_API_PORT || 3000
const hostname = `http://0.0.0.0:${port}`

const server = http.createServer(requestHandler(hostname))

server.listen(port, () => {
	console.debug('[Flexport API Sandbox]', `is listening on ${hostname}`)
})
