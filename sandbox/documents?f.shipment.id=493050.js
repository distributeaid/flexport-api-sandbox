module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493050',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: '2_zMcXohQc2wt-UY0ejixQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/2_zMcXohQc2wt-UY0ejixQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25531,
					uploaded_at: '2019-02-19T00:49:49.250Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493050',
					id: 493050,
				},
			},
			{
				_object: '/document',
				id: 'V6SIQ8eMS3mz2KFNbdhY0Q',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/V6SIQ8eMS3mz2KFNbdhY0Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2895,
					uploaded_at: '2019-02-19T00:49:49.649Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493050',
					id: 493050,
				},
			},
			{
				_object: '/document',
				id: '-9e3giauRSque-5YDbrXCQ',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/-9e3giauRSque-5YDbrXCQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26611,
					uploaded_at: '2019-02-19T01:24:28.033Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493050',
					id: 493050,
				},
			},
			{
				_object: '/document',
				id: 'z0phA25pTAC9sS0JiOpRzQ',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/z0phA25pTAC9sS0JiOpRzQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166878,
					uploaded_at: '2019-02-19T01:24:41.298Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493050',
					id: 493050,
				},
			},
		],
	},
	error: null,
}
