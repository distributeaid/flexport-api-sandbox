module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=422042',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: '7T8MMXDNQs64908PKn5Ryw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/7T8MMXDNQs64908PKn5Ryw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24243,
					uploaded_at: '2018-09-27T06:04:53.922Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/422042',
					id: 422042,
				},
			},
			{
				_object: '/document',
				id: 'Ol31DdzSQOasmenElnrgxA',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/Ol31DdzSQOasmenElnrgxA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25554,
					uploaded_at: '2018-10-18T02:21:43.249Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/422042',
					id: 422042,
				},
			},
			{
				_object: '/document',
				id: '9KNlMnqnTDytX71KM_-C9g',
				document_type: 'unknown',
				file_link:
					'https://api.flexport.com/documents/9KNlMnqnTDytX71KM_-C9g/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 31592,
					uploaded_at: '2019-06-24T02:19:34.875Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/422042',
					id: 422042,
				},
			},
			{
				_object: '/document',
				id: 'iLUVZwJBTRa5AREDkuQAhA',
				document_type: 'packing_list',
				file_link:
					'https://api.flexport.com/documents/iLUVZwJBTRa5AREDkuQAhA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 12755,
					uploaded_at: '2019-06-24T03:04:10.155Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/422042',
					id: 422042,
				},
			},
		],
	},
	error: null,
}
