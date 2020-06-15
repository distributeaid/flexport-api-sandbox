module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=752834',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'Bs46fk97TEC12-VfRcMCyw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/Bs46fk97TEC12-VfRcMCyw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27329,
					uploaded_at: '2020-03-24T02:16:05.221Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/752834',
					id: 752834,
				},
			},
			{
				_object: '/document',
				id: 'U8g1kJVQQQ22ooNIY3hMyw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/U8g1kJVQQQ22ooNIY3hMyw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2911,
					uploaded_at: '2020-03-24T02:16:05.488Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/752834',
					id: 752834,
				},
			},
		],
	},
	error: null,
}
