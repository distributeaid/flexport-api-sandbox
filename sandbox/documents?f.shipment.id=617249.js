module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=617249',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'tDYXo8sZSfGoBUOz2Uk5nA',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/tDYXo8sZSfGoBUOz2Uk5nA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24937,
					uploaded_at: '2019-09-11T08:11:08.303Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/617249',
					id: 617249,
				},
			},
			{
				_object: '/document',
				id: 'C2tguD-bSuGAuLDnaLvOtA',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/C2tguD-bSuGAuLDnaLvOtA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 32118,
					uploaded_at: '2019-09-11T08:11:09.690Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/617249',
					id: 617249,
				},
			},
		],
	},
	error: null,
}
