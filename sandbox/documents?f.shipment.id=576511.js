module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=576511',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'Mh2c-7UGQ8updeoqIUlaQw',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/Mh2c-7UGQ8updeoqIUlaQw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24623,
					uploaded_at: '2019-10-17T09:54:58.972Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/576511',
					id: 576511,
				},
			},
			{
				_object: '/document',
				id: '75LC31SWSa2qhPUL8s0UlQ',
				document_type: 'verified_gross_mass_declaration',
				file_link:
					'https://api.flexport.com/documents/75LC31SWSa2qhPUL8s0UlQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 41210,
					uploaded_at: '2019-10-18T07:29:47.157Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/576511',
					id: 576511,
				},
			},
		],
	},
	error: null,
}
