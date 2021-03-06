module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=699752',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'UBQBkmgUQvuU0c-2Esbn8A',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/UBQBkmgUQvuU0c-2Esbn8A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25916,
					uploaded_at: '2019-12-26T08:20:06.867Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/699752',
					id: 699752,
				},
			},
			{
				_object: '/document',
				id: '1c_3R-qcSqKNtaa9y8wzWw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/1c_3R-qcSqKNtaa9y8wzWw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2768,
					uploaded_at: '2019-12-26T08:20:07.120Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/699752',
					id: 699752,
				},
			},
		],
	},
	error: null,
}
