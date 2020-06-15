module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=569364&page=3&per=10',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev:
			'https://api.flexport.com/documents?f.shipment.id=569364&page=2&per=10',
		next: null,
		total_count: 22,
		data: [
			{
				_object: '/document',
				id: '_4fJ26ydSCemFK7O51__3A',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/_4fJ26ydSCemFK7O51__3A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20413,
					uploaded_at: '2019-10-23T08:50:58.854Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/569364',
					id: 569364,
				},
			},
			{
				_object: '/document',
				id: 'OXBeIt_9QO6Eudqqx7nfJg',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/OXBeIt_9QO6Eudqqx7nfJg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20459,
					uploaded_at: '2019-10-23T08:51:00.212Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/569364',
					id: 569364,
				},
			},
		],
	},
	error: null,
}
