module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=738018',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'qX8tILQORvCKuP8OFtIuhg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/qX8tILQORvCKuP8OFtIuhg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26437,
					uploaded_at: '2020-03-04T12:34:02.405Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/738018',
					id: 738018,
				},
			},
			{
				_object: '/document',
				id: '4ObGZwJbSWeX_H5QiWoO3A',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/4ObGZwJbSWeX_H5QiWoO3A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2874,
					uploaded_at: '2020-03-04T12:34:02.628Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/738018',
					id: 738018,
				},
			},
		],
	},
	error: null,
}
