module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=693846',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'cMUKfmI8RpOeckoaTKFrYw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/cMUKfmI8RpOeckoaTKFrYw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26615,
					uploaded_at: '2019-12-18T07:50:48.567Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693846',
					id: 693846,
				},
			},
			{
				_object: '/document',
				id: 'oYmaNgR9TiavdQHBsutblQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/oYmaNgR9TiavdQHBsutblQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3067,
					uploaded_at: '2019-12-18T07:50:48.765Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693846',
					id: 693846,
				},
			},
			{
				_object: '/document',
				id: 'lBxuvk-XQLq91hlKi6fmyg',
				document_type: 'magnetic_testing_report',
				file_link:
					'https://api.flexport.com/documents/lBxuvk-XQLq91hlKi6fmyg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 398163,
					uploaded_at: '2019-12-19T09:26:25.992Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693846',
					id: 693846,
				},
			},
		],
	},
	error: null,
}
