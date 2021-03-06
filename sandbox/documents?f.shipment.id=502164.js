module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=502164',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '32pzSE-xSNGkvVVLRb6mQw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/32pzSE-xSNGkvVVLRb6mQw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 28482,
					uploaded_at: '2019-03-09T11:50:52.824Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502164',
					id: 502164,
				},
			},
			{
				_object: '/document',
				id: '9DxNGAg6S7yqW2kdq1q8Og',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/9DxNGAg6S7yqW2kdq1q8Og/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2935,
					uploaded_at: '2019-03-09T11:50:52.999Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502164',
					id: 502164,
				},
			},
		],
	},
	error: null,
}
