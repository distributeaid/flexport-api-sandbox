module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=474722',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'tKkpvSv2StmOIiGcsF4Lqw',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/tKkpvSv2StmOIiGcsF4Lqw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 29322,
					uploaded_at: '2019-01-08T03:57:04.114Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/474722',
					id: 474722,
				},
			},
			{
				_object: '/document',
				id: '4sA2VSX3RQSF56I-K36OUg',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/4sA2VSX3RQSF56I-K36OUg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23180,
					uploaded_at: '2019-01-08T03:57:04.362Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/474722',
					id: 474722,
				},
			},
		],
	},
	error: null,
}
