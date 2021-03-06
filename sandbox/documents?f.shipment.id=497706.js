module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=497706',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: '-9k-OcNYRBimCmMqSIvqDA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/-9k-OcNYRBimCmMqSIvqDA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27653,
					uploaded_at: '2019-02-28T05:23:43.498Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/497706',
					id: 497706,
				},
			},
			{
				_object: '/document',
				id: 'ov6kCWwcROWJje0DaNpWIA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/ov6kCWwcROWJje0DaNpWIA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2779,
					uploaded_at: '2019-02-28T05:23:43.660Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/497706',
					id: 497706,
				},
			},
			{
				_object: '/document',
				id: 'uAnUYefOSTqGH_daRFwlZQ',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/uAnUYefOSTqGH_daRFwlZQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24035,
					uploaded_at: '2019-02-28T05:40:25.351Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/497706',
					id: 497706,
				},
			},
			{
				_object: '/document',
				id: 'u__5K3ZqRPOubDp7xLthTg',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/u__5K3ZqRPOubDp7xLthTg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 31553,
					uploaded_at: '2019-02-28T05:40:25.947Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/497706',
					id: 497706,
				},
			},
		],
	},
	error: null,
}
