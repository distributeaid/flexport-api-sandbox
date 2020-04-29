import { promises as fs } from 'fs'
import * as path from 'path'
import * as http from 'http'

export const requestHandler = (hostname: string) => async (
	request: http.IncomingMessage,
	response: http.ServerResponse,
) => {
	// Start page returns a 4040
	if (request.url === '/') {
		response.writeHead(404, {
			'Content-Type': 'application/json',
		})
		response.end()
		return
	}
	try {
		const folders = request.url?.substr(1).split('/') ?? []
		const fileName = folders.pop()
		const f = path.join(
			__dirname,
			'..',
			'sandbox',
			...folders,
			`${fileName}.json`,
		)
		const file = await fs.readFile(f, 'utf-8')
		response.writeHead(200, {
			'Content-Type': 'application/json; charset=utf-8',
		})
		response.end(
			file.replace(
				new RegExp('https://flexport-sandbox.example.com', 'g'),
				hostname,
			),
		)
	} catch (error) {
		// Unknown URLs return a redirect to /
		response.writeHead(302, {
			'Content-Type': 'text/html; charset=utf-8',
			Location: `${hostname}/`,
		})
		response.end(
			`<html><body>You are being <a href="${hostname}/">redirected</a>.</body></html>`,
		)
	}
}
