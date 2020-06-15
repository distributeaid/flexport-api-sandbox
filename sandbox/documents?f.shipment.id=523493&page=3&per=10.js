module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=523493&page=3&per=10',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev:
			'https://api.flexport.com/documents?f.shipment.id=523493&page=2&per=10',
		next: null,
		total_count: 22,
		data: [
			{
				_object: '/document',
				id: 'lmfx5h45RAqeGByOEbrPag',
				document_type: 'unknown',
				file_link:
					'https://api.flexport.com/documents/lmfx5h45RAqeGByOEbrPag/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 96479,
					uploaded_at: '2019-06-05T08:51:20.641Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/523493',
					id: 523493,
				},
			},
			{
				_object: '/document',
				id: 'WZLvRXFhR12a83iu4OolKQ',
				document_type: 'verified_gross_mass_declaration',
				file_link:
					'https://api.flexport.com/documents/WZLvRXFhR12a83iu4OolKQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 137551,
					uploaded_at: '2019-06-05T08:51:20.882Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/523493',
					id: 523493,
				},
			},
		],
	},
	error: null,
}
