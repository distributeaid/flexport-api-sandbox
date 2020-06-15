module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=502173',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'spj2TGz0TrCFC-7akaWlAg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/spj2TGz0TrCFC-7akaWlAg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27720,
					uploaded_at: '2019-03-09T14:30:18.920Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
			},
			{
				_object: '/document',
				id: 'VwjVN-sIRxqdVE_pGyeUoQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/VwjVN-sIRxqdVE_pGyeUoQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3016,
					uploaded_at: '2019-03-09T14:30:19.089Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
			},
			{
				_object: '/document',
				id: 'n-TquxXaRr6HqAQL-EcU9A',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/n-TquxXaRr6HqAQL-EcU9A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23924,
					uploaded_at: '2019-03-09T14:39:19.555Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
			},
			{
				_object: '/document',
				id: 'vEsuh6qcTJ6uBButDM4Mug',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/vEsuh6qcTJ6uBButDM4Mug/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 31129,
					uploaded_at: '2019-03-09T14:39:19.879Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
			},
		],
	},
	error: null,
}
