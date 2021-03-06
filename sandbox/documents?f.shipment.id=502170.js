module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=502170',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'Q8RPs0eVRQyUYF6fx9aeLg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/Q8RPs0eVRQyUYF6fx9aeLg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27706,
					uploaded_at: '2019-03-09T14:22:53.971Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502170',
					id: 502170,
				},
			},
			{
				_object: '/document',
				id: 'wOsQJwsdSciuMh9nFSIG0Q',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/wOsQJwsdSciuMh9nFSIG0Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3034,
					uploaded_at: '2019-03-09T14:22:54.156Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502170',
					id: 502170,
				},
			},
		],
	},
	error: null,
}
