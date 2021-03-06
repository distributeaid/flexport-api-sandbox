module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=508281',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'f_C1cYKuQGah6LxbtE4KVg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/f_C1cYKuQGah6LxbtE4KVg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27084,
					uploaded_at: '2019-03-21T03:29:42.054Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508281',
					id: 508281,
				},
			},
			{
				_object: '/document',
				id: 'K_f5dItwQMaHsOGTjdy2Tg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/K_f5dItwQMaHsOGTjdy2Tg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3222,
					uploaded_at: '2019-03-21T03:29:42.199Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508281',
					id: 508281,
				},
			},
		],
	},
	error: null,
}
