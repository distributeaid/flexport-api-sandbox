module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=638247',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: '9PImwpgGQxmPdF0wd0KpDg',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/9PImwpgGQxmPdF0wd0KpDg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26338,
					uploaded_at: '2019-10-10T07:24:22.543Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/638247',
					id: 638247,
				},
			},
			{
				_object: '/document',
				id: 'eUXQr1rZQ86coxVzIUOj_A',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/eUXQr1rZQ86coxVzIUOj_A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2968,
					uploaded_at: '2019-10-10T07:24:22.751Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/638247',
					id: 638247,
				},
			},
		],
	},
	error: null,
}
