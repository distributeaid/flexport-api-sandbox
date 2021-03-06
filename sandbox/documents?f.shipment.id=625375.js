module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=625375',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'jDBKKyk1QjGVpePT8xVxVg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/jDBKKyk1QjGVpePT8xVxVg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26833,
					uploaded_at: '2019-09-23T07:21:02.159Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/625375',
					id: 625375,
				},
			},
			{
				_object: '/document',
				id: 'u0A1B6awRLGoQnNzNKLf7Q',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/u0A1B6awRLGoQnNzNKLf7Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3281,
					uploaded_at: '2019-09-23T07:21:02.405Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/625375',
					id: 625375,
				},
			},
		],
	},
	error: null,
}
