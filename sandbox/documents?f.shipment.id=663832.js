module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=663832',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'flO95zGkSiCRsTDXwo9AZQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/flO95zGkSiCRsTDXwo9AZQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27760,
					uploaded_at: '2019-11-11T05:14:56.311Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/663832',
					id: 663832,
				},
			},
			{
				_object: '/document',
				id: 'WoLkQYPgRiSLutiBz0_jvw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/WoLkQYPgRiSLutiBz0_jvw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2934,
					uploaded_at: '2019-11-11T05:14:56.645Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/663832',
					id: 663832,
				},
			},
		],
	},
	error: null,
}
