module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493291',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'i4Z6I82fS_GaGxZTejIuuA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/i4Z6I82fS_GaGxZTejIuuA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25411,
					uploaded_at: '2019-02-19T08:51:02.869Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493291',
					id: 493291,
				},
			},
			{
				_object: '/document',
				id: '1xfMEMoCTFGfIW1ZjsAYTw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/1xfMEMoCTFGfIW1ZjsAYTw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2925,
					uploaded_at: '2019-02-19T08:51:03.123Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493291',
					id: 493291,
				},
			},
			{
				_object: '/document',
				id: 'opbnd87fQ5Gi-U26WA7KUg',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/opbnd87fQ5Gi-U26WA7KUg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166337,
					uploaded_at: '2019-11-14T07:21:52.461Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493291',
					id: 493291,
				},
			},
			{
				_object: '/document',
				id: 'jb0FAfe3SFeR2PG9aI0M4Q',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/jb0FAfe3SFeR2PG9aI0M4Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20311,
					uploaded_at: '2019-12-02T03:12:48.107Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493291',
					id: 493291,
				},
			},
		],
	},
	error: null,
}
