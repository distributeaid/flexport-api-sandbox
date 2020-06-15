module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=708335',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'XkJG8syoRBO6ocCL5YXA2g',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/XkJG8syoRBO6ocCL5YXA2g/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27518,
					uploaded_at: '2020-01-09T02:18:06.887Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/708335',
					id: 708335,
				},
			},
			{
				_object: '/document',
				id: 'xlVzoPK2Sj-p7qj871eK1w',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/xlVzoPK2Sj-p7qj871eK1w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3307,
					uploaded_at: '2020-01-09T02:18:07.399Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/708335',
					id: 708335,
				},
			},
		],
	},
	error: null,
}
