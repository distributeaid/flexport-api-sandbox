module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493297',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: '4arrT36iTT6ovEnqVCrzUA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/4arrT36iTT6ovEnqVCrzUA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25471,
					uploaded_at: '2019-02-19T09:00:08.456Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493297',
					id: 493297,
				},
			},
			{
				_object: '/document',
				id: '2Pvc0DWFS1SWjptsHFMzGg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/2Pvc0DWFS1SWjptsHFMzGg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2970,
					uploaded_at: '2019-02-19T09:00:08.699Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493297',
					id: 493297,
				},
			},
			{
				_object: '/document',
				id: '1ZY9bpiDToqvda2kWkx6LQ',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/1ZY9bpiDToqvda2kWkx6LQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25911,
					uploaded_at: '2020-03-31T09:27:18.658Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493297',
					id: 493297,
				},
			},
		],
	},
	error: null,
}
