module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=474723',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '-clu8UxISfak1KMcieDpSw',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/-clu8UxISfak1KMcieDpSw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 29336,
					uploaded_at: '2019-01-08T03:58:21.768Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/474723',
					id: 474723,
				},
			},
			{
				_object: '/document',
				id: '2lTEVIMETLiRNq_wfKdRAA',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/2lTEVIMETLiRNq_wfKdRAA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23164,
					uploaded_at: '2019-01-08T03:58:23.874Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/474723',
					id: 474723,
				},
			},
		],
	},
	error: null,
}
