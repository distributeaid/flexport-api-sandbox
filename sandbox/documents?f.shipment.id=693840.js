module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=693840',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'EvOO-jruQoWAZB5Xz03Jkg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/EvOO-jruQoWAZB5Xz03Jkg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27417,
					uploaded_at: '2019-12-18T07:47:44.369Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693840',
					id: 693840,
				},
			},
			{
				_object: '/document',
				id: 'W3h9N0DwTr-y3YPsnjfVaQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/W3h9N0DwTr-y3YPsnjfVaQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2860,
					uploaded_at: '2019-12-18T07:47:44.613Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693840',
					id: 693840,
				},
			},
			{
				_object: '/document',
				id: 'Z0K9Cx2eS2G43u8m2cMHHQ',
				document_type: 'magnetic_testing_report',
				file_link:
					'https://api.flexport.com/documents/Z0K9Cx2eS2G43u8m2cMHHQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 422904,
					uploaded_at: '2019-12-19T09:39:42.599Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693840',
					id: 693840,
				},
			},
		],
	},
	error: null,
}
