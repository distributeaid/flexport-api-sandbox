module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=653585',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'm6SuDixFTJS3j1mO5cOLVQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/m6SuDixFTJS3j1mO5cOLVQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24176,
					uploaded_at: '2019-10-28T08:30:40.546Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/653585',
					id: 653585,
				},
			},
			{
				_object: '/document',
				id: 'xu35ECueRJWr3gfy6pGYqQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/xu35ECueRJWr3gfy6pGYqQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3177,
					uploaded_at: '2019-10-28T08:30:40.772Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/653585',
					id: 653585,
				},
			},
		],
	},
	error: null,
}
