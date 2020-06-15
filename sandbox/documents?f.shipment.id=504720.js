module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=504720',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'OWLs_lxWQmqo5ZIvYvYG1A',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/OWLs_lxWQmqo5ZIvYvYG1A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27674,
					uploaded_at: '2019-03-14T10:25:06.750Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/504720',
					id: 504720,
				},
			},
			{
				_object: '/document',
				id: 'B4dkmG4gSJePMABjgomOFA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/B4dkmG4gSJePMABjgomOFA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3074,
					uploaded_at: '2019-03-14T10:25:06.933Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/504720',
					id: 504720,
				},
			},
			{
				_object: '/document',
				id: 'hWM9HsgJRn6Zl1MsHtmDtQ',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/hWM9HsgJRn6Zl1MsHtmDtQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27137,
					uploaded_at: '2019-03-14T10:33:07.160Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/504720',
					id: 504720,
				},
			},
		],
	},
	error: null,
}
