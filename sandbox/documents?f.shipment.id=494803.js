module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=494803',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: '4W9_PJOwSCS7YDQPA999Pw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/4W9_PJOwSCS7YDQPA999Pw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 28858,
					uploaded_at: '2019-02-21T15:33:08.649Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494803',
					id: 494803,
				},
			},
			{
				_object: '/document',
				id: 'Q1NAHgFjT7iwYQ4gRyVUjg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/Q1NAHgFjT7iwYQ4gRyVUjg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3276,
					uploaded_at: '2019-02-21T15:33:08.887Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494803',
					id: 494803,
				},
			},
			{
				_object: '/document',
				id: 'RykZvxbySmuTfgVSNTsODw',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/RykZvxbySmuTfgVSNTsODw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24857,
					uploaded_at: '2019-03-27T06:38:29.701Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/494803',
					id: 494803,
				},
			},
		],
	},
	error: null,
}
