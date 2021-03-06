module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493293',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'o4XAP8v0TkCyePJCpWH5Jg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/o4XAP8v0TkCyePJCpWH5Jg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25442,
					uploaded_at: '2019-02-19T08:54:25.134Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493293',
					id: 493293,
				},
			},
			{
				_object: '/document',
				id: 'VWQEY7faRki5RrTY5QqWyw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/VWQEY7faRki5RrTY5QqWyw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2954,
					uploaded_at: '2019-02-19T08:54:25.423Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493293',
					id: 493293,
				},
			},
			{
				_object: '/document',
				id: 'DkznbYEWSOatebWOArgllQ',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/DkznbYEWSOatebWOArgllQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26788,
					uploaded_at: '2019-02-19T10:17:56.898Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493293',
					id: 493293,
				},
			},
			{
				_object: '/document',
				id: '5quUnOg9QwaOsgqdQfcCRQ',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/5quUnOg9QwaOsgqdQfcCRQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 167066,
					uploaded_at: '2019-02-19T10:18:48.969Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493293',
					id: 493293,
				},
			},
		],
	},
	error: null,
}
