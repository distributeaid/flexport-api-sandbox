module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=653678',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'ZdxQCtqBQB2PXxsrJvanzQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/ZdxQCtqBQB2PXxsrJvanzQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26255,
					uploaded_at: '2019-10-28T08:46:25.725Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/653678',
					id: 653678,
				},
			},
			{
				_object: '/document',
				id: 'c4KNqg_vTQKrFSh4z2k3nQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/c4KNqg_vTQKrFSh4z2k3nQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3173,
					uploaded_at: '2019-10-28T08:46:25.933Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/653678',
					id: 653678,
				},
			},
		],
	},
	error: null,
}
