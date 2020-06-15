module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=702977',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'bx09AmXYT2WhxpBX3qs6mg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/bx09AmXYT2WhxpBX3qs6mg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 28636,
					uploaded_at: '2020-01-02T01:55:04.337Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/702977',
					id: 702977,
				},
			},
			{
				_object: '/document',
				id: 'hqjictNyRlK8A0WHvpT01A',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/hqjictNyRlK8A0WHvpT01A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2776,
					uploaded_at: '2020-01-02T01:55:04.546Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/702977',
					id: 702977,
				},
			},
		],
	},
	error: null,
}
