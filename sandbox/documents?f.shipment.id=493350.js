module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493350',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'FS9UIn-kR8yHjuLywaGA3Q',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/FS9UIn-kR8yHjuLywaGA3Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25416,
					uploaded_at: '2019-02-19T10:42:30.393Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493350',
					id: 493350,
				},
			},
			{
				_object: '/document',
				id: 'Al7299NARku7OvK4CrGAcg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/Al7299NARku7OvK4CrGAcg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2948,
					uploaded_at: '2019-02-19T10:42:30.636Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493350',
					id: 493350,
				},
			},
		],
	},
	error: null,
}
