module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=693835',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: '_UnFaW1RSF21ia5-zvd_0A',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/_UnFaW1RSF21ia5-zvd_0A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26308,
					uploaded_at: '2019-12-18T07:45:20.482Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693835',
					id: 693835,
				},
			},
			{
				_object: '/document',
				id: '2r1Pl0OuQr-tBY1bKKZu4Q',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/2r1Pl0OuQr-tBY1bKKZu4Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2672,
					uploaded_at: '2019-12-18T07:45:20.796Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693835',
					id: 693835,
				},
			},
			{
				_object: '/document',
				id: 'JptKfAaHSsK8E-9KS0kTbA',
				document_type: 'material_safety_data_sheet_msds',
				file_link:
					'https://api.flexport.com/documents/JptKfAaHSsK8E-9KS0kTbA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 1207580,
					uploaded_at: '2019-12-19T09:43:27.785Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693835',
					id: 693835,
				},
			},
		],
	},
	error: null,
}
