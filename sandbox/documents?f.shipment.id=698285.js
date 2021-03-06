module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=698285',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'GjBsSwUBTcOMjjaKq2IMmQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/GjBsSwUBTcOMjjaKq2IMmQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25670,
					uploaded_at: '2019-12-24T02:34:08.618Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/698285',
					id: 698285,
				},
			},
			{
				_object: '/document',
				id: 'HxL2jSmCRWC0dV0j2wkpbg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/HxL2jSmCRWC0dV0j2wkpbg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2717,
					uploaded_at: '2019-12-24T02:34:08.907Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/698285',
					id: 698285,
				},
			},
		],
	},
	error: null,
}
