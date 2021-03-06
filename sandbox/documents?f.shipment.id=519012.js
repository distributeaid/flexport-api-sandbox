module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=519012',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'NunmXNoGRX2snwhFiuqjCA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/NunmXNoGRX2snwhFiuqjCA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23780,
					uploaded_at: '2019-04-10T06:35:09.579Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/519012',
					id: 519012,
				},
			},
			{
				_object: '/document',
				id: '3qjN8_4tTvmcH2DHf51rtA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/3qjN8_4tTvmcH2DHf51rtA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2928,
					uploaded_at: '2019-04-10T06:35:09.743Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/519012',
					id: 519012,
				},
			},
			{
				_object: '/document',
				id: 'mn1WQZLlQ-y8Rd3enYO9zw',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/mn1WQZLlQ-y8Rd3enYO9zw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25512,
					uploaded_at: '2019-04-10T07:40:05.227Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/519012',
					id: 519012,
				},
			},
			{
				_object: '/document',
				id: 'mxXf6L5-TluvvMJ_8NEMJw',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/mxXf6L5-TluvvMJ_8NEMJw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166816,
					uploaded_at: '2019-04-10T07:57:38.551Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/519012',
					id: 519012,
				},
			},
		],
	},
	error: null,
}
