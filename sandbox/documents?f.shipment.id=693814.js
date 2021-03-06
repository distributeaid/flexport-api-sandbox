module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=693814',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'Awb8_EpZQOWEej9EZLXPww',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/Awb8_EpZQOWEej9EZLXPww/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27631,
					uploaded_at: '2019-12-18T07:36:57.123Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693814',
					id: 693814,
				},
			},
			{
				_object: '/document',
				id: '1pbV57Z9RwG6XJK8faD4xg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/1pbV57Z9RwG6XJK8faD4xg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2968,
					uploaded_at: '2019-12-18T07:36:57.363Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693814',
					id: 693814,
				},
			},
		],
	},
	error: null,
}
