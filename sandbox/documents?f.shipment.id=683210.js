module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=683210',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'IyrituixQgqSQ28pXT3a8g',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/IyrituixQgqSQ28pXT3a8g/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26321,
					uploaded_at: '2019-12-05T03:57:04.729Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/683210',
					id: 683210,
				},
			},
			{
				_object: '/document',
				id: 'Olux3D37QWu3qGtp0VfFkw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/Olux3D37QWu3qGtp0VfFkw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2663,
					uploaded_at: '2019-12-05T03:57:04.971Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/683210',
					id: 683210,
				},
			},
		],
	},
	error: null,
}
