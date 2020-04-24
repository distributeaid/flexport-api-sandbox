import { requestHandler } from '.'
import * as http from 'http'
import fetch from 'node-fetch'

const port = 3000
const hostname = `http://0.0.0.0:${port}`

describe('Flexport API Sandbox', () => {
	let server: http.Server
	beforeAll(() => {
		server = http.createServer(requestHandler(hostname))
		server.listen(port)
	})
	afterAll(() => {
		server.close()
	})
	it('returns a response when an URL is found', async () => {
		const res = await fetch(`${hostname}/shipments`)
		expect(res.status).toEqual(200)
		expect(res.headers.get('content-type')).toEqual(
			'application/json; charset=utf-8',
		)
		const response = await res.json()
		expect(response.data.data).toHaveLength(10)
	})
	it('returns a 302 in case an URL is not found', async () => {
		const res = await fetch(`${hostname}/foo`, { redirect: 'manual' })
		expect(res.status).toEqual(302)
		expect(res.headers.get('Content-Type')).toEqual(`text/html; charset=utf-8`)
		expect(res.headers.get('location')).toEqual(`${hostname}/`)
	})
	it('returns a 404 for the start page', async () => {
		const res = await fetch(`${hostname}/`)
		expect(res.status).toEqual(404)
		expect(res.headers.get('Content-Type')).toEqual(`application/json`)
	})
})
