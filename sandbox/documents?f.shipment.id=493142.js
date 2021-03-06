module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493142',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'VV8qMK3-TtOl2B28ImgMHQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/VV8qMK3-TtOl2B28ImgMHQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25566,
					uploaded_at: '2019-02-19T04:53:11.070Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493142',
					id: 493142,
				},
			},
			{
				_object: '/document',
				id: 'S99JTEVcTO2nD3Q9japaYA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/S99JTEVcTO2nD3Q9japaYA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2888,
					uploaded_at: '2019-02-19T04:53:11.433Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493142',
					id: 493142,
				},
			},
			{
				_object: '/document',
				id: 'WqrQpBwyTP27uZs6gCFxkA',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/WqrQpBwyTP27uZs6gCFxkA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26318,
					uploaded_at: '2020-04-09T08:47:22.530Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493142',
					id: 493142,
				},
			},
		],
	},
	error: null,
}
