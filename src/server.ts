import * as http from 'http'
import { responseForPath } from './responseForPath'

export const requestHandler = ({
	hostname,
	apiKey,
}: {
	hostname: string
	apiKey: string
}) => {
	const p = handlePath(hostname)
	return async (
		request: http.IncomingMessage,
		response: http.ServerResponse,
	) => {
		let res: Response
		if (request.headers.authorization !== `Bearer ${apiKey}`) {
			res = badTokenResponse()
		} else {
			res = await p(request.url)
		}
		response.writeHead(res.statusCode, res.headers)
		response.end(res.body)
	}
}

export type Response = {
	statusCode: number
	headers: { [key: string]: any }
	body: string
}

export const badTokenResponse = (): Response => ({
	statusCode: 401,
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
	},
	body: JSON.stringify({
		errors: [
			{
				code: 'bad_token',
				message: 'Bad Token',
			},
		],
	}),
})

export const handlePath = (hostname: string) => async (
	resource?: string,
): Promise<Response> => {
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
