module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=476206',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'SvXnYXbwRGWlnLsAnt1uyA',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/SvXnYXbwRGWlnLsAnt1uyA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 30166,
					uploaded_at: '2019-01-10T02:21:28.638Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/476206',
					id: 476206,
				},
			},
			{
				_object: '/document',
				id: 'Td1Os3iQTzqPKZZgSTOM9Q',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/Td1Os3iQTzqPKZZgSTOM9Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23884,
					uploaded_at: '2019-01-10T02:21:29.137Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/476206',
					id: 476206,
				},
			},
		],
	},
	error: null,
}
