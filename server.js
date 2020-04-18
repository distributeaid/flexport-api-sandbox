const fs = require('fs').promises
const path = require('path')

module.exports = {
	requestHandler: (hostname) => async (request, response) => {
		try {
			const folders = request.url.substr(1).split('/')
			const fileName = folders.shift()
			const f = path.join(
				process.cwd(),
				'sandbox',
				...folders,
				`${fileName}.json`,
			)
			const file = await fs.readFile(f, 'utf-8')
			console.debug('[Flexport API Sandbox]', request.url, '->', f)
			response.writeHead(200, { 'Content-Type': 'application/json' })
			response.end(
				file.replace(
					new RegExp('https://flexport-sandbox.example.com', 'g'),
					hostname,
				),
			)
		} catch (error) {
			console.error('[Flexport API Sandbox]', error)
			response.writeHead(500, { 'Content-Type': 'text/plain' })
			response.end(error.message)
		}
	},
}
