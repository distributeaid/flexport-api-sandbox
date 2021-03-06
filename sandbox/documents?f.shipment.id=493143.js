module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493143',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '1V14QqvHT3u5npZ_qkyHHQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/1V14QqvHT3u5npZ_qkyHHQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25445,
					uploaded_at: '2019-02-19T04:53:35.660Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493143',
					id: 493143,
				},
			},
			{
				_object: '/document',
				id: 'ZRpOstsrSQuHrMFohfsHbg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/ZRpOstsrSQuHrMFohfsHbg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2886,
					uploaded_at: '2019-02-19T04:53:35.952Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493143',
					id: 493143,
				},
			},
		],
	},
	error: null,
}
