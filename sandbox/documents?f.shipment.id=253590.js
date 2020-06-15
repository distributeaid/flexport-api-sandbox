module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=253590',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/document',
				id: 'inrOWgf4SwyfdhKd1GzARw',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/inrOWgf4SwyfdhKd1GzARw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 31662,
					uploaded_at: '2018-04-17T11:35:38.875Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/253590',
					id: 253590,
				},
			},
		],
	},
	error: null,
}
