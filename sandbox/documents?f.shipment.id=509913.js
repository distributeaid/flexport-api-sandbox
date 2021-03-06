module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=509913',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'zYj9oxFPTw-JNtCkUCF6pQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/zYj9oxFPTw-JNtCkUCF6pQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23746,
					uploaded_at: '2019-03-25T06:26:56.079Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/509913',
					id: 509913,
				},
			},
			{
				_object: '/document',
				id: 'H3HHhZHwRg-dk0nzUdApVg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/H3HHhZHwRg-dk0nzUdApVg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2925,
					uploaded_at: '2019-03-25T06:26:56.253Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/509913',
					id: 509913,
				},
			},
			{
				_object: '/document',
				id: 'GTlSdRKbRhGARGTqUIg1_A',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/GTlSdRKbRhGARGTqUIg1_A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25737,
					uploaded_at: '2019-03-25T07:13:39.176Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/509913',
					id: 509913,
				},
			},
			{
				_object: '/document',
				id: 'hMHCqMi-R3ORbve3NhRIlg',
				document_type: 'verified_gross_mass_declaration',
				file_link:
					'https://api.flexport.com/documents/hMHCqMi-R3ORbve3NhRIlg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 41899,
					uploaded_at: '2019-03-25T07:18:09.820Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/509913',
					id: 509913,
				},
			},
		],
	},
	error: null,
}
