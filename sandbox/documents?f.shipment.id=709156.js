module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=709156',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'V107KE-ATba_sUvi8FRukQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/V107KE-ATba_sUvi8FRukQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27392,
					uploaded_at: '2020-01-10T02:09:38.787Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/709156',
					id: 709156,
				},
			},
			{
				_object: '/document',
				id: 'w1kb5LJkTmmRdSWCa4289A',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/w1kb5LJkTmmRdSWCa4289A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3090,
					uploaded_at: '2020-01-10T02:09:39.015Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/709156',
					id: 709156,
				},
			},
		],
	},
	error: null,
}
