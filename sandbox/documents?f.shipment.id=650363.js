module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=650363',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '6jFY7Z-ySwyDNtmBpbkMCA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/6jFY7Z-ySwyDNtmBpbkMCA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 29844,
					uploaded_at: '2019-10-24T01:39:13.604Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/650363',
					id: 650363,
				},
			},
			{
				_object: '/document',
				id: '5OcWfPyaTGKUylfBWeBnDg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/5OcWfPyaTGKUylfBWeBnDg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3397,
					uploaded_at: '2019-10-24T01:39:13.829Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/650363',
					id: 650363,
				},
			},
		],
	},
	error: null,
}
