module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=566020',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: '4p1Otu6VS7O9GbQcr0h9-w',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/4p1Otu6VS7O9GbQcr0h9-w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24649,
					uploaded_at: '2019-06-27T07:48:16.619Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566020',
					id: 566020,
				},
			},
			{
				_object: '/document',
				id: '7EyG_uGTRna-SKk5fCquVg',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/7EyG_uGTRna-SKk5fCquVg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 167117,
					uploaded_at: '2019-06-27T07:49:30.430Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566020',
					id: 566020,
				},
			},
			{
				_object: '/document',
				id: 'S3qwBJeJQIy3aJx61L9B4Q',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/S3qwBJeJQIy3aJx61L9B4Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20713,
					uploaded_at: '2019-06-28T02:38:00.016Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566020',
					id: 566020,
				},
			},
		],
	},
	error: null,
}
