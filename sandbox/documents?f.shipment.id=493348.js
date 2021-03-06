module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493348',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'XmgXjNOJTHWgcDbW-48N7Q',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/XmgXjNOJTHWgcDbW-48N7Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25413,
					uploaded_at: '2019-02-19T10:41:55.985Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493348',
					id: 493348,
				},
			},
			{
				_object: '/document',
				id: 'P8JQ6i0sTNm_O2ZjBE4ndA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/P8JQ6i0sTNm_O2ZjBE4ndA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2948,
					uploaded_at: '2019-02-19T10:41:56.188Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493348',
					id: 493348,
				},
			},
			{
				_object: '/document',
				id: 'ZXGoFSX3THiH6miKjBh3GA',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/ZXGoFSX3THiH6miKjBh3GA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 167385,
					uploaded_at: '2019-07-23T05:16:46.318Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493348',
					id: 493348,
				},
			},
			{
				_object: '/document',
				id: 'yEkLmq_SQLCBB1qchzdkWg',
				document_type: 'material_safety_data_sheet_msds',
				file_link:
					'https://api.flexport.com/documents/yEkLmq_SQLCBB1qchzdkWg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24356,
					uploaded_at: '2019-11-07T06:02:18.413Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493348',
					id: 493348,
				},
			},
		],
	},
	error: null,
}
