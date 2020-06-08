import * as http from 'http'
import { responseForPath } from './responseForPath'

export const requestHandler = (hostname: string) => {
	const p = handlePath(hostname)
	return async (
		request: http.IncomingMessage,
		response: http.ServerResponse,
	) => {
		const res = await p(request.url)
		response.writeHead(res.statusCode, res.headers)
		response.end(res.body)
	}
}

export const handlePath = (hostname: string) => async (
	resource?: string,
): Promise<{
	statusCode: number
	headers: { [key: string]: any }
	body: string
}> => {
	if (resource === undefined || resource === '/') {
		// Start page returns a 404
		return {
			statusCode: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: '',
		}
	}
	try {
		const file = await responseForPath(resource)
		return {
			statusCode: 200,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: file.replace(
				new RegExp('https://flexport-sandbox.example.com', 'g'),
				hostname,
			),
		}
	} catch (error) {
		// Unknown URLs return a redirect to /
		return {
			statusCode: 302,
			headers: {
				'Content-Type': 'text/html; charset=utf-8',
				Location: `${hostname}/`,
			},
			body: `<html><body>You are being <a href="${hostname}/">redirected</a>.</body></html>`,
		}
	}
}
