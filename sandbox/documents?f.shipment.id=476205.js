module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=476205',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'qEm-lQd1RxmPgnAmMZITIA',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/qEm-lQd1RxmPgnAmMZITIA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 30192,
					uploaded_at: '2019-01-10T02:19:54.424Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/476205',
					id: 476205,
				},
			},
			{
				_object: '/document',
				id: 'opMiqVGnSHWMhf1hUgj5Og',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/opMiqVGnSHWMhf1hUgj5Og/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23683,
					uploaded_at: '2019-01-10T02:19:56.325Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/476205',
					id: 476205,
				},
			},
		],
	},
	error: null,
}
