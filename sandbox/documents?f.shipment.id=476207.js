module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=476207',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'iwShiGzvRfqmrpAHE8U9Nw',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/iwShiGzvRfqmrpAHE8U9Nw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 30178,
					uploaded_at: '2019-01-10T02:21:55.140Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/476207',
					id: 476207,
				},
			},
			{
				_object: '/document',
				id: 'y8NZSDbfRg6EDVGng9n63w',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/y8NZSDbfRg6EDVGng9n63w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23882,
					uploaded_at: '2019-01-10T02:21:56.273Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/476207',
					id: 476207,
				},
			},
		],
	},
	error: null,
}
