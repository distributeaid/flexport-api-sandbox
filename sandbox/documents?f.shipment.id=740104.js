module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=740104',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'K9x3g54BSGqJJTlueOpPCg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/K9x3g54BSGqJJTlueOpPCg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27736,
					uploaded_at: '2020-03-06T11:02:49.061Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/740104',
					id: 740104,
				},
			},
			{
				_object: '/document',
				id: 'TDMJfbKDQjKeQ5G6ENin5w',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/TDMJfbKDQjKeQ5G6ENin5w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3198,
					uploaded_at: '2020-03-06T11:02:49.234Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/740104',
					id: 740104,
				},
			},
		],
	},
	error: null,
}
