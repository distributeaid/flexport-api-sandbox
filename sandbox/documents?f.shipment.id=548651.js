module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=548651',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'A_AnUP1wQQWI_9hTQ8gaPw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/A_AnUP1wQQWI_9hTQ8gaPw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23792,
					uploaded_at: '2019-05-30T01:29:08.542Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/548651',
					id: 548651,
				},
			},
			{
				_object: '/document',
				id: 'YN2EgKuiT0-txx5zumzKOw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/YN2EgKuiT0-txx5zumzKOw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2961,
					uploaded_at: '2019-05-30T01:29:08.773Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/548651',
					id: 548651,
				},
			},
			{
				_object: '/document',
				id: 'zS8iDt5LQfKG8NgegCvhVQ',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/zS8iDt5LQfKG8NgegCvhVQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25142,
					uploaded_at: '2019-10-23T03:03:45.894Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/548651',
					id: 548651,
				},
			},
		],
	},
	error: null,
}
