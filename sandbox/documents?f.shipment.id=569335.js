module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=569335',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/document',
				id: 'J5dEf612R4SoDPpPDYdVBw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/J5dEf612R4SoDPpPDYdVBw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23819,
					uploaded_at: '2019-07-03T02:06:11.426Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/569335',
					id: 569335,
				},
			},
			{
				_object: '/document',
				id: 'bO5Aj4L-Rf20UBkO4mmrOA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/bO5Aj4L-Rf20UBkO4mmrOA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 3149,
					uploaded_at: '2019-07-03T02:06:11.642Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/569335',
					id: 569335,
				},
			},
		],
	},
	error: null,
}
