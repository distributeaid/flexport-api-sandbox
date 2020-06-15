module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=490736',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/document',
				id: '8prGmV6aR8GZOKxlqE5AnA',
				document_type: 'commercial_invoice_packing_list',
				file_link:
					'https://api.flexport.com/documents/8prGmV6aR8GZOKxlqE5AnA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 38871,
					uploaded_at: '2019-11-06T07:40:43.336Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/490736',
					id: 490736,
				},
			},
		],
	},
	error: null,
}
