module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=494795',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'A9CFVnqQS7CZi9NjHdFytA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/A9CFVnqQS7CZi9NjHdFytA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 28927,
					uploaded_at: '2019-02-21T15:18:15.802Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494795',
					id: 494795,
				},
			},
			{
				_object: '/document',
				id: 'L3wKI69NT1uX-Gb5PKtXYA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/L3wKI69NT1uX-Gb5PKtXYA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3277,
					uploaded_at: '2019-02-21T15:18:16.016Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494795',
					id: 494795,
				},
			},
			{
				_object: '/document',
				id: 'ymtrVz5wRmGIhesm0GyZTw',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/ymtrVz5wRmGIhesm0GyZTw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 28699,
					uploaded_at: '2020-01-20T05:48:11.540Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494795',
					id: 494795,
				},
			},
		],
	},
	error: null,
}
