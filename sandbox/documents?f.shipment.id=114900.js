module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=114900',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'lZz58WVXSuGn6xmLLhYTKQ',
				document_type: 'unknown',
				file_link:
					'https://api.flexport.com/documents/lZz58WVXSuGn6xmLLhYTKQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 1066,
					uploaded_at: '2018-10-23T02:56:26.560Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/114900',
					id: 114900,
				},
			},
			{
				_object: '/document',
				id: 'j8NQEjJSSPyywSABwuNDig',
				document_type: 'packing_list',
				file_link:
					'https://api.flexport.com/documents/j8NQEjJSSPyywSABwuNDig/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 22785,
					uploaded_at: '2018-10-23T02:56:29.107Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/114900',
					id: 114900,
				},
			},
			{
				_object: '/document',
				id: 'AU63XTcrQH-JrTpLIRXW0w',
				document_type: 'flexport_bill_of_lading',
				file_link:
					'https://api.flexport.com/documents/AU63XTcrQH-JrTpLIRXW0w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 62778,
					uploaded_at: '2019-02-18T09:01:46.438Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/114900',
					id: 114900,
				},
			},
		],
	},
	error: null,
}
