module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=502232',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'fN3rGlelRHWiyjVxKUVv_g',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/fN3rGlelRHWiyjVxKUVv_g/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23825,
					uploaded_at: '2019-03-11T01:21:48.284Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502232',
					id: 502232,
				},
			},
			{
				_object: '/document',
				id: 'zM5uaRG0Ss67Syv3WPtauQ',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/zM5uaRG0Ss67Syv3WPtauQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 30797,
					uploaded_at: '2019-03-11T01:21:48.305Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502232',
					id: 502232,
				},
			},
			{
				_object: '/document',
				id: 's2ca3c8eSQCFb8YQi29umg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/s2ca3c8eSQCFb8YQi29umg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26164,
					uploaded_at: '2020-03-25T06:53:29.892Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502232',
					id: 502232,
				},
			},
			{
				_object: '/document',
				id: 'zuNlmhXjSES5dcAosR5Q9A',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/zuNlmhXjSES5dcAosR5Q9A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3105,
					uploaded_at: '2020-03-25T06:53:30.130Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502232',
					id: 502232,
				},
			},
		],
	},
	error: null,
}
