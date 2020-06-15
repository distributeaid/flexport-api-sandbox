module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493052',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'gfvs93hbQruipOEoaqox6A',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/gfvs93hbQruipOEoaqox6A/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25533,
					uploaded_at: '2019-02-19T00:50:45.481Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493052',
					id: 493052,
				},
			},
			{
				_object: '/document',
				id: '445oP_W-QtOT-PtkbV-kAg',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/445oP_W-QtOT-PtkbV-kAg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2895,
					uploaded_at: '2019-02-19T00:50:45.791Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493052',
					id: 493052,
				},
			},
			{
				_object: '/document',
				id: 'NG9WEzTrT8mpIdqJClGJ-w',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/NG9WEzTrT8mpIdqJClGJ-w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26528,
					uploaded_at: '2019-02-21T07:33:03.561Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493052',
					id: 493052,
				},
			},
			{
				_object: '/document',
				id: '4-ft4wbdRziMaqYlvCJrhQ',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/4-ft4wbdRziMaqYlvCJrhQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 166682,
					uploaded_at: '2019-02-21T07:33:38.487Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493052',
					id: 493052,
				},
			},
		],
	},
	error: null,
}
