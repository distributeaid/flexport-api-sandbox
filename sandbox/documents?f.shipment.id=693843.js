module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=693843',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: '8Sp3qmdzS_GiNCelGdTdXg',
				document_type: 'magnetic_testing_report',
				file_link:
					'https://api.flexport.com/documents/8Sp3qmdzS_GiNCelGdTdXg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 1207580,
					uploaded_at: '2019-12-19T09:30:52.584Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693843',
					id: 693843,
				},
			},
			{
				_object: '/document',
				id: '3YV1K_alRuuEJLEqeTS_SA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/3YV1K_alRuuEJLEqeTS_SA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26719,
					uploaded_at: '2020-04-16T02:27:29.313Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693843',
					id: 693843,
				},
			},
			{
				_object: '/document',
				id: 'zITIJ_sxQuitrb0EWMAE7w',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/zITIJ_sxQuitrb0EWMAE7w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3122,
					uploaded_at: '2020-04-16T02:27:29.713Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/693843',
					id: 693843,
				},
			},
		],
	},
	error: null,
}
