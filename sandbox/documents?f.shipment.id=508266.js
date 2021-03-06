module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=508266',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'jwXhcBcBRf-aqGaNwMcDGA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/jwXhcBcBRf-aqGaNwMcDGA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26767,
					uploaded_at: '2019-03-21T03:13:55.808Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508266',
					id: 508266,
				},
			},
			{
				_object: '/document',
				id: 'ibMzGkSvQ1it8UtOmkds1Q',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/ibMzGkSvQ1it8UtOmkds1Q/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3213,
					uploaded_at: '2019-03-21T03:13:56.068Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508266',
					id: 508266,
				},
			},
			{
				_object: '/document',
				id: 'hkMy1TfWTi-Shb6BI00J3w',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/hkMy1TfWTi-Shb6BI00J3w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 24943,
					uploaded_at: '2019-03-25T08:14:37.613Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508266',
					id: 508266,
				},
			},
			{
				_object: '/document',
				id: 'ehsuTOlBRfarEkordd-hpQ',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/ehsuTOlBRfarEkordd-hpQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166914,
					uploaded_at: '2019-03-25T08:17:41.606Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508266',
					id: 508266,
				},
			},
		],
	},
	error: null,
}
