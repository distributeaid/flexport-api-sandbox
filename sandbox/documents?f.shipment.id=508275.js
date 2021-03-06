module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=508275',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '8bRlN5EhQzyXLtdfuOoYfA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/8bRlN5EhQzyXLtdfuOoYfA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27134,
					uploaded_at: '2019-03-21T03:24:01.045Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508275',
					id: 508275,
				},
			},
			{
				_object: '/document',
				id: 'EAeKUjKNSde3AbI-URhPWQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/EAeKUjKNSde3AbI-URhPWQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3225,
					uploaded_at: '2019-03-21T03:24:01.209Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508275',
					id: 508275,
				},
			},
		],
	},
	error: null,
}
