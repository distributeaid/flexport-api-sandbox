module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=737687',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'boXTZjlcRFGtIhwEfwPtzw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/boXTZjlcRFGtIhwEfwPtzw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27395,
					uploaded_at: '2020-03-04T06:35:50.961Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/737687',
					id: 737687,
				},
			},
			{
				_object: '/document',
				id: 'CA5KR1TxSj2p8s9JZIOUiw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/CA5KR1TxSj2p8s9JZIOUiw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2828,
					uploaded_at: '2020-03-04T06:35:51.226Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/737687',
					id: 737687,
				},
			},
		],
	},
	error: null,
}
