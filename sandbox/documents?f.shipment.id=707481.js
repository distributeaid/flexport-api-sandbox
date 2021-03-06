module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=707481',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'u5B6X3muTbaQRqLt3oA_Yw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/u5B6X3muTbaQRqLt3oA_Yw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26488,
					uploaded_at: '2020-01-08T03:28:10.691Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/707481',
					id: 707481,
				},
			},
			{
				_object: '/document',
				id: 'Gqhn8SncSiW1C9F2qyPGIw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/Gqhn8SncSiW1C9F2qyPGIw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2892,
					uploaded_at: '2020-01-08T03:28:11.044Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/707481',
					id: 707481,
				},
			},
		],
	},
	error: null,
}
