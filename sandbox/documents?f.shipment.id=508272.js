module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=508272',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '6EynBNzORaq-Id6ANQ-WUg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/6EynBNzORaq-Id6ANQ-WUg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26811,
					uploaded_at: '2019-03-21T03:19:58.010Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508272',
					id: 508272,
				},
			},
			{
				_object: '/document',
				id: 'g-GqiWsxRyGvkJLcw8QY8w',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/g-GqiWsxRyGvkJLcw8QY8w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3216,
					uploaded_at: '2019-03-21T03:19:58.206Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508272',
					id: 508272,
				},
			},
		],
	},
	error: null,
}
