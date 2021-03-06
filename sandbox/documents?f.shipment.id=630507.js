module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=630507',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '5Pa-B9eUSa-OtBcIpgnvPQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/5Pa-B9eUSa-OtBcIpgnvPQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23539,
					uploaded_at: '2019-09-30T03:11:43.019Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/630507',
					id: 630507,
				},
			},
			{
				_object: '/document',
				id: 'ola1_cRqQCKE0g0-J0S7tg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/ola1_cRqQCKE0g0-J0S7tg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3268,
					uploaded_at: '2019-09-30T03:11:43.229Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/630507',
					id: 630507,
				},
			},
		],
	},
	error: null,
}
