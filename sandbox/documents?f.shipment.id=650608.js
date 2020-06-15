module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=650608',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'QIouKkuqQxGlMQLEDKLO3w',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/QIouKkuqQxGlMQLEDKLO3w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 29827,
					uploaded_at: '2019-10-24T05:49:38.563Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/650608',
					id: 650608,
				},
			},
			{
				_object: '/document',
				id: 'S5THOMoyQ5G806Pncn2l8A',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/S5THOMoyQ5G806Pncn2l8A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3379,
					uploaded_at: '2019-10-24T05:49:38.790Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/650608',
					id: 650608,
				},
			},
			{
				_object: '/document',
				id: 'Nc1cEVu1TqCLqXpwxZpYXA',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/Nc1cEVu1TqCLqXpwxZpYXA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25342,
					uploaded_at: '2019-12-02T08:59:58.102Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/650608',
					id: 650608,
				},
			},
			{
				_object: '/document',
				id: 'XV16jwZIRpaNphNhy2JIHA',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/XV16jwZIRpaNphNhy2JIHA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20354,
					uploaded_at: '2019-12-10T07:17:00.717Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/650608',
					id: 650608,
				},
			},
		],
	},
	error: null,
}
