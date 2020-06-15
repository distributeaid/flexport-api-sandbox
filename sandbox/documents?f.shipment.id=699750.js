module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=699750',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'aIL4ikWXSx-i4Jj5ubUJBg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/aIL4ikWXSx-i4Jj5ubUJBg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25913,
					uploaded_at: '2019-12-26T08:18:54.811Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/699750',
					id: 699750,
				},
			},
			{
				_object: '/document',
				id: '1yiqLXwCQIOYazKphWxhmg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/1yiqLXwCQIOYazKphWxhmg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2768,
					uploaded_at: '2019-12-26T08:18:55.003Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/699750',
					id: 699750,
				},
			},
		],
	},
	error: null,
}
