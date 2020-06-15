module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=615927',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'PecPIuhlTP-mxtMNm15h9A',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/PecPIuhlTP-mxtMNm15h9A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26089,
					uploaded_at: '2019-09-10T02:21:34.598Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/615927',
					id: 615927,
				},
			},
			{
				_object: '/document',
				id: 'C1rErgaxSj-xMKUJ7VUZHA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/C1rErgaxSj-xMKUJ7VUZHA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2920,
					uploaded_at: '2019-09-10T02:21:34.787Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/615927',
					id: 615927,
				},
			},
		],
	},
	error: null,
}
