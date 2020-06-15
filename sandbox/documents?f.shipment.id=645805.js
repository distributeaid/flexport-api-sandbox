module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=645805',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'pT-SGzsGQ-mYsZnvMSq4Ug',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/pT-SGzsGQ-mYsZnvMSq4Ug/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26286,
					uploaded_at: '2019-10-18T06:45:35.961Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/645805',
					id: 645805,
				},
			},
			{
				_object: '/document',
				id: 'fN_RESxdSUWza5nEtNt1hw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/fN_RESxdSUWza5nEtNt1hw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2935,
					uploaded_at: '2019-10-18T06:45:36.213Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/645805',
					id: 645805,
				},
			},
		],
	},
	error: null,
}
