module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=703026',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'SmSkBguqRtSTx9P1CqCHxg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/SmSkBguqRtSTx9P1CqCHxg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25898,
					uploaded_at: '2020-01-02T02:45:20.796Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/703026',
					id: 703026,
				},
			},
			{
				_object: '/document',
				id: 'e-tkZ5_3Td2D3Y4pxSmKnA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/e-tkZ5_3Td2D3Y4pxSmKnA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2768,
					uploaded_at: '2020-01-02T02:45:21.156Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/703026',
					id: 703026,
				},
			},
		],
	},
	error: null,
}
