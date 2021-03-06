module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=474721',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'nRzSqJVURCO04Nqlpt_CZw',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/nRzSqJVURCO04Nqlpt_CZw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 29348,
					uploaded_at: '2019-01-08T03:56:28.520Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/474721',
					id: 474721,
				},
			},
			{
				_object: '/document',
				id: 'Noa38hgUQoiRRQjgWSBepw',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/Noa38hgUQoiRRQjgWSBepw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23006,
					uploaded_at: '2019-01-08T03:56:28.717Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/474721',
					id: 474721,
				},
			},
		],
	},
	error: null,
}
