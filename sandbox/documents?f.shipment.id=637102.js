module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=637102',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'fdGulJu9TJ6RPIvttTZWUQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/fdGulJu9TJ6RPIvttTZWUQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23890,
					uploaded_at: '2019-10-09T06:55:25.223Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/637102',
					id: 637102,
				},
			},
			{
				_object: '/document',
				id: 'o3xxyIYtT-u6xIQsUdjxGg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/o3xxyIYtT-u6xIQsUdjxGg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3223,
					uploaded_at: '2019-10-09T06:55:25.564Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/637102',
					id: 637102,
				},
			},
		],
	},
	error: null,
}
