module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=508284',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'a8DhLtb5ThOfyiqWB22NoA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/a8DhLtb5ThOfyiqWB22NoA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27093,
					uploaded_at: '2019-03-21T03:31:46.284Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508284',
					id: 508284,
				},
			},
			{
				_object: '/document',
				id: 'MoA_ldUjToGtKcvSWPSg-w',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/MoA_ldUjToGtKcvSWPSg-w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3222,
					uploaded_at: '2019-03-21T03:31:46.444Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508284',
					id: 508284,
				},
			},
			{
				_object: '/document',
				id: '4T3dv5lBSg2-8ecaeaXMng',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/4T3dv5lBSg2-8ecaeaXMng/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24931,
					uploaded_at: '2019-03-25T09:01:20.478Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508284',
					id: 508284,
				},
			},
			{
				_object: '/document',
				id: 'wwCkxQktSlO-DAGfGfMsmA',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/wwCkxQktSlO-DAGfGfMsmA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166757,
					uploaded_at: '2019-03-25T09:02:59.375Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508284',
					id: 508284,
				},
			},
		],
	},
	error: null,
}
