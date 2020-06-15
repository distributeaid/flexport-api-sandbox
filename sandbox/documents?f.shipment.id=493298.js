module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493298',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'ScE0DYtrTZ2tmcwdnYPBrA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/ScE0DYtrTZ2tmcwdnYPBrA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25428,
					uploaded_at: '2019-02-19T09:00:41.126Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493298',
					id: 493298,
				},
			},
			{
				_object: '/document',
				id: '-alM4Lb1T_u1CxB00YcSUQ',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/-alM4Lb1T_u1CxB00YcSUQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2970,
					uploaded_at: '2019-02-19T09:00:41.961Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493298',
					id: 493298,
				},
			},
		],
	},
	error: null,
}
