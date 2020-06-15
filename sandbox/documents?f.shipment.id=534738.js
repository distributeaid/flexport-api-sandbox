module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=534738',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'exhLNxOMQzav3mdROmGtXw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/exhLNxOMQzav3mdROmGtXw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23366,
					uploaded_at: '2019-05-07T03:26:33.349Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/534738',
					id: 534738,
				},
			},
			{
				_object: '/document',
				id: 'u6Hem1uXQ0eOKgchCSuUAg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/u6Hem1uXQ0eOKgchCSuUAg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3000,
					uploaded_at: '2019-05-07T03:26:33.589Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/534738',
					id: 534738,
				},
			},
		],
	},
	error: null,
}
