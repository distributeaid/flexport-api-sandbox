const fetchPonyfill = require('fetch-ponyfill')
const fs = require('fs').promises
const path = require('path')
const { parse } = require('url')
const { fetch } = fetchPonyfill()

const visited = new Map()

const discoverLinks = async (o) => {
	if (typeof o !== 'object' || o === null) return
	if (o._object === '/api/refs/collection') {
		await fetchAndStore(o.link)
	}
	if (o._object === '/api/refs/object') {
		await fetchAndStore(o.link)
	}
	await Promise.all(Object.values(o).map(discoverLinks))
}

const follow = async (data) => {
	if (data._object === '/api/collections/paginated') {
		await Promise.all(data.data.map(discoverLinks))
		if (data.next) {
			await fetchAndStore(data.next)
		}
	}
}

const fetchAndStore = (url) => {
	if (visited.has(url)) return
	visited.set(url, true)
	return fetch(url, {
		headers: {
			Authorization: `Bearer ${process.env.SANDBOX_API_KEY}`,
		},
	})
		.then(async (res) => {
			const json = await res.json()
			const u = parse(url)
			const t = path.join(process.cwd(), 'sandbox', `${u.path}.json`)
			const dir = path.join(
				process.cwd(),
				'sandbox',
				...u.path.split('/').slice(0, -1),
			)
			await fs.mkdir(dir, { recursive: true })
			await fs.writeFile(t, JSON.stringify(json, null, 2), 'utf-8')
			console.log(url, '->', t)
			await follow(json.data)
		})
		.catch(console.error)
}

fetchAndStore(`${process.env.SANDBOX_API_ENDPOINT}/shipments`)
