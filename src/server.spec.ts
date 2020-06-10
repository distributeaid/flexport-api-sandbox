import { requestHandler } from '.'
import * as http from 'http'
import fetch from 'node-fetch'

const port = 3000
const hostname = `http://0.0.0.0:${port}`
const apiKey = 'some-key'
const headers = { Authorization: `Bearer ${apiKey}` }

describe('Flexport API Sandbox', () => {
	let server: http.Server
	beforeAll(() => {
		server = http.createServer(
			requestHandler({
				hostname,
				apiKey,
			}),
		)
		server.listen(port)
	})
	afterAll(() => {
		server.close()
	})
	it('returns a response when an URL is found', async () => {
		const res = await fetch(`${hostname}/shipments`, { headers })
		expect(res.status).toEqual(200)
		expect(res.headers.get('content-type')).toEqual(
			'application/json; charset=utf-8',
		)
		const response = await res.json()
		expect(response.data.data).toHaveLength(10)
	})
	it('returns a response for a subfolder', async () => {
		const res = await fetch(`${hostname}/shipments/253590`, { headers })
		expect(res.status).toEqual(200)
		const response = await res.json()
		expect(response.data.name).toEqual('LCL Test Shipment')
	})
	it('returns a 302 in case an URL is not found', async () => {
		const res = await fetch(`${hostname}/foo`, { redirect: 'manual', headers })
		expect(res.status).toEqual(302)
		expect(res.headers.get('Content-Type')).toEqual(`text/html; charset=utf-8`)
		expect(res.headers.get('location')).toEqual(`${hostname}/`)
	})
	it('returns a 404 for the start page', async () => {
		const res = await fetch(`${hostname}/`, { headers })
		expect(res.status).toEqual(404)
		expect(res.headers.get('Content-Type')).toEqual(`application/json`)
	})
	it('returns a 401 if the API token does not match', async () => {
		const res = await fetch(`${hostname}/`, {
			headers: { Authorization: `Bearer foo` },
		})
		expect(res.status).toEqual(401)
		expect(res.headers.get('Content-Type')).toEqual(
			`application/json; charset=utf-8`,
		)
		const response = await res.json()
		expect(response).toEqual({
			errors: [
				{
					code: 'bad_token',
					message: 'Bad Token',
				},
			],
		})
	})
	it('paginates', async () => {
		const res1 = await fetch(`${hostname}/shipments`, { headers })
		const {
			data: { next: next1, prev: prev1 },
		} = await res1.json()
		expect(next1).toEqual(`${hostname}/shipments?page=2&per=10`)
		expect(prev1).toBeNull()
		const res2 = await fetch(next1, { headers })
		const {
			data: { next: next2, prev: prev2 },
		} = await res2.json()
		expect(prev2).toEqual(`${hostname}/shipments?page=1&per=10`)
		expect(next2).toEqual(`${hostname}/shipments?page=3&per=10`)
	})
})
