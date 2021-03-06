module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=659869',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'kogWROx4TviqJJ4F3EccVg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/kogWROx4TviqJJ4F3EccVg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 27084,
					uploaded_at: '2019-11-05T08:07:55.209Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/659869',
					id: 659869,
				},
			},
			{
				_object: '/document',
				id: 'b-5MsWwYTUqwNRWSuv5TVQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/b-5MsWwYTUqwNRWSuv5TVQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3078,
					uploaded_at: '2019-11-05T08:07:55.590Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/659869',
					id: 659869,
				},
			},
		],
	},
	error: null,
}
