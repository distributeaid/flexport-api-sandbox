module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=693824',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'WF48D4JuScSmK8kJahUpJQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/WF48D4JuScSmK8kJahUpJQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26338,
					uploaded_at: '2019-12-18T07:40:24.486Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693824',
					id: 693824,
				},
			},
			{
				_object: '/document',
				id: 'BBSpKykISpiFwGCBkfhHJQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/BBSpKykISpiFwGCBkfhHJQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2687,
					uploaded_at: '2019-12-18T07:40:24.702Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693824',
					id: 693824,
				},
			},
		],
	},
	error: null,
}
