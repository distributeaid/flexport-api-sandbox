module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=649380',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'cRtvmBGBQhWvzmD4xY-sUQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/cRtvmBGBQhWvzmD4xY-sUQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23859,
					uploaded_at: '2019-10-23T04:20:15.249Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/649380',
					id: 649380,
				},
			},
			{
				_object: '/document',
				id: 'ddT9LthUSqGzOw4FavB1Ew',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/ddT9LthUSqGzOw4FavB1Ew/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3148,
					uploaded_at: '2019-10-23T04:20:15.481Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/649380',
					id: 649380,
				},
			},
		],
	},
	error: null,
}
