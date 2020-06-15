module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=693798',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: '21bv_cAyT1eeujhMgcf9nA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/21bv_cAyT1eeujhMgcf9nA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26357,
					uploaded_at: '2019-12-18T07:27:27.439Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693798',
					id: 693798,
				},
			},
			{
				_object: '/document',
				id: 'rQt0dCMfTuKmidx_3KjRig',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/rQt0dCMfTuKmidx_3KjRig/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2696,
					uploaded_at: '2019-12-18T07:27:27.634Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693798',
					id: 693798,
				},
			},
			{
				_object: '/document',
				id: 'ETkDr7SNSWiG8ll7H39x1g',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/ETkDr7SNSWiG8ll7H39x1g/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 19983,
					uploaded_at: '2020-02-25T09:27:28.718Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693798',
					id: 693798,
				},
			},
			{
				_object: '/document',
				id: 'nY1dcxbgRU-VEVMW-rfz4Q',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/nY1dcxbgRU-VEVMW-rfz4Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27796,
					uploaded_at: '2020-03-02T07:33:17.432Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693798',
					id: 693798,
				},
			},
		],
	},
	error: null,
}
