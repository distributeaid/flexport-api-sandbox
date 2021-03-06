module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=508282',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '_SZCaQYlR_-GJ2lt205S0w',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/_SZCaQYlR_-GJ2lt205S0w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27083,
					uploaded_at: '2019-03-21T03:30:43.725Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508282',
					id: 508282,
				},
			},
			{
				_object: '/document',
				id: 'f5ryikPERQOE0S65bwwizw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/f5ryikPERQOE0S65bwwizw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3222,
					uploaded_at: '2019-03-21T03:30:43.902Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508282',
					id: 508282,
				},
			},
		],
	},
	error: null,
}
