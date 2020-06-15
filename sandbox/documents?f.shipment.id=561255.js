module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=561255',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'mztDALuKRQqbOZD4bWrwKw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/mztDALuKRQqbOZD4bWrwKw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 29363,
					uploaded_at: '2019-07-11T10:24:22.584Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/561255',
					id: 561255,
				},
			},
			{
				_object: '/document',
				id: 'T5g6kLBlSNaDJ6vn3xNBcA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/T5g6kLBlSNaDJ6vn3xNBcA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3457,
					uploaded_at: '2019-07-11T10:24:22.969Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/561255',
					id: 561255,
				},
			},
		],
	},
	error: null,
}
