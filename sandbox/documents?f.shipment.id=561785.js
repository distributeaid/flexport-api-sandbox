module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=561785',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'MnzUKXDbRMucoJgPYewErA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/MnzUKXDbRMucoJgPYewErA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23823,
					uploaded_at: '2019-06-20T17:57:11.821Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/561785',
					id: 561785,
				},
			},
			{
				_object: '/document',
				id: 'JOL_SbXxSziWDo5aGdL8FA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/JOL_SbXxSziWDo5aGdL8FA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2956,
					uploaded_at: '2019-06-20T17:57:12.044Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/561785',
					id: 561785,
				},
			},
		],
	},
	error: null,
}
