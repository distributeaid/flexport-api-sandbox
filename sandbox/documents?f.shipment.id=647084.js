module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=647084',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'E27OWS9sTAK9AqCs3peRBg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/E27OWS9sTAK9AqCs3peRBg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27772,
					uploaded_at: '2019-10-21T03:22:25.278Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/647084',
					id: 647084,
				},
			},
			{
				_object: '/document',
				id: '-XErkq-ASgefb2tKo-bSXQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/-XErkq-ASgefb2tKo-bSXQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3267,
					uploaded_at: '2019-10-21T03:22:25.555Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/647084',
					id: 647084,
				},
			},
		],
	},
	error: null,
}
