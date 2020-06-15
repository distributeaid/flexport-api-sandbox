module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=699101',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'WQjSw3wsRJOiCERzOv1hmQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/WQjSw3wsRJOiCERzOv1hmQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26365,
					uploaded_at: '2019-12-25T06:22:13.545Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/699101',
					id: 699101,
				},
			},
			{
				_object: '/document',
				id: 'N5OKvGnJRb6T12mojq4ksQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/N5OKvGnJRb6T12mojq4ksQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2898,
					uploaded_at: '2019-12-25T06:22:13.750Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/699101',
					id: 699101,
				},
			},
		],
	},
	error: null,
}
