module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=680833',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'ZuIfiFKWSuKtAWzKt8-bHw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/ZuIfiFKWSuKtAWzKt8-bHw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25950,
					uploaded_at: '2019-12-03T03:35:55.552Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680833',
					id: 680833,
				},
			},
			{
				_object: '/document',
				id: 'm2YjEdfzQdqSxYSahHuYrg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/m2YjEdfzQdqSxYSahHuYrg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2680,
					uploaded_at: '2019-12-03T03:35:55.773Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680833',
					id: 680833,
				},
			},
			{
				_object: '/document',
				id: '6bff0CAcTs-LtwfmchFPzQ',
				document_type: 'material_safety_data_sheet_msds',
				file_link:
					'https://api.flexport.com/documents/6bff0CAcTs-LtwfmchFPzQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 1207580,
					uploaded_at: '2019-12-19T09:36:28.393Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680833',
					id: 680833,
				},
			},
			{
				_object: '/document',
				id: 'rcqdk_sMSeiz1HXr9t6__A',
				document_type: 'air_certification_for_safe_transport',
				file_link:
					'https://api.flexport.com/documents/rcqdk_sMSeiz1HXr9t6__A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 562054,
					uploaded_at: '2019-12-19T09:36:37.388Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680833',
					id: 680833,
				},
			},
		],
	},
	error: null,
}
