module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=35217',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/document',
				id: 'MVE4ef5dTiKJBGHtRu2buA',
				document_type: 'certificate_of_origin',
				file_link:
					'https://api.flexport.com/documents/MVE4ef5dTiKJBGHtRu2buA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20,
					uploaded_at: '2020-03-31T09:27:14.701Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/35217',
					id: 35217,
				},
			},
		],
	},
	error: null,
}
