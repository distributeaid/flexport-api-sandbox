module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=638131',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'LVDORlTQR3a3e8uKJXasSQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/LVDORlTQR3a3e8uKJXasSQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26957,
					uploaded_at: '2019-10-10T05:56:22.608Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/638131',
					id: 638131,
				},
			},
			{
				_object: '/document',
				id: '6t_qkkVvSxKcMTPjCjnY4w',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/6t_qkkVvSxKcMTPjCjnY4w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3346,
					uploaded_at: '2019-10-10T05:56:22.797Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/638131',
					id: 638131,
				},
			},
		],
	},
	error: null,
}
