module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=165001',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'FIWO7hwGT-SXn5mduFHGTg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/FIWO7hwGT-SXn5mduFHGTg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 30937,
					uploaded_at: '2018-02-06T03:50:40.276Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/165001',
					id: 165001,
				},
			},
			{
				_object: '/document',
				id: '7cVGKGsmQYCJhMkvLElhvA',
				document_type: 'air_certification_for_safe_transport',
				file_link:
					'https://api.flexport.com/documents/7cVGKGsmQYCJhMkvLElhvA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166304,
					uploaded_at: '2019-09-20T01:33:19.243Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/165001',
					id: 165001,
				},
			},
		],
	},
	error: null,
}
