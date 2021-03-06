module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493294',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'OBasnSFaTYqGEOlyMYm0MQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/OBasnSFaTYqGEOlyMYm0MQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25414,
					uploaded_at: '2019-02-19T08:55:05.398Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493294',
					id: 493294,
				},
			},
			{
				_object: '/document',
				id: 'M0xNDZMETEC6GbpxCL48Uw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/M0xNDZMETEC6GbpxCL48Uw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2943,
					uploaded_at: '2019-02-19T08:55:05.586Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493294',
					id: 493294,
				},
			},
			{
				_object: '/document',
				id: 'MmqVtPlrTX2xXP2WTiBCDQ',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/MmqVtPlrTX2xXP2WTiBCDQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26229,
					uploaded_at: '2020-01-21T06:52:21.273Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493294',
					id: 493294,
				},
			},
		],
	},
	error: null,
}
