module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=566014',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'rJ38fpEtT6azTT1ATlEL1g',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/rJ38fpEtT6azTT1ATlEL1g/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24652,
					uploaded_at: '2019-07-03T04:17:47.874Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
			},
			{
				_object: '/document',
				id: 'l1d0IUMURQ6EXgqbD7sbjQ',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/l1d0IUMURQ6EXgqbD7sbjQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 167255,
					uploaded_at: '2019-07-03T04:17:58.394Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
			},
		],
	},
	error: null,
}
