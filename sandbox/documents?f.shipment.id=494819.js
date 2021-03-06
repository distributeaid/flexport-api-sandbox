module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=494819',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'zl3YlOvDQamcB0vR8qyLCw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/zl3YlOvDQamcB0vR8qyLCw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 31486,
					uploaded_at: '2019-02-21T15:57:42.967Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494819',
					id: 494819,
				},
			},
			{
				_object: '/document',
				id: 'Z8I8BhGYTLCDrU6VlyR2qQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/Z8I8BhGYTLCDrU6VlyR2qQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3378,
					uploaded_at: '2019-02-21T15:57:43.221Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494819',
					id: 494819,
				},
			},
			{
				_object: '/document',
				id: '8mzMEkdESKu7bLVLx9cZuA',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/8mzMEkdESKu7bLVLx9cZuA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24184,
					uploaded_at: '2019-12-03T08:39:02.625Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494819',
					id: 494819,
				},
			},
		],
	},
	error: null,
}
