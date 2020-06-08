import * as http from 'http'
import { requestHandler } from './server'

const main = () => {
	const port = process.env.SANDBOX_API_PORT ?? 3000
	const apiKey = process.env.SANDBOX_API_KEY ?? 'secret'
	const hostname = `http://0.0.0.0:${port}`

	const server = http.createServer(requestHandler({ hostname, apiKey }))

	server.listen(port, () => {
		console.debug('[Flexport API Sandbox]', `is listening on ${hostname}`)
		console.debug('[Flexport API Sandbox]', `API key: ${apiKey}`)
	})
}

if (typeof jest === 'undefined') main()
