module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=527638',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/document',
				id: 'ML0291EQSv21PMsaK4pfgA',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/ML0291EQSv21PMsaK4pfgA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166785,
					uploaded_at: '2019-04-24T06:34:50.614Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/527638',
					id: 527638,
				},
			},
		],
	},
	error: null,
}
