module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=621460',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/document',
				id: 'K_LaC-pjQJerJcPe51-WWA',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/K_LaC-pjQJerJcPe51-WWA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 26256,
					uploaded_at: '2019-10-16T06:36:46.306Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/621460',
					id: 621460,
				},
			},
			{
				_object: '/document',
				id: 'Hq2gbk4OQqOnvczYuk4iww',
				document_type: 'approved_house_bill_of_lading_draft',
				file_link:
					'https://api.flexport.com/documents/Hq2gbk4OQqOnvczYuk4iww/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 167322,
					uploaded_at: '2019-11-14T06:52:04.675Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/621460',
					id: 621460,
				},
			},
			{
				_object: '/document',
				id: 'lKaDnVS2SJ-VvnDsOWrN-w',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/lKaDnVS2SJ-VvnDsOWrN-w/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20030,
					uploaded_at: '2019-12-17T06:11:04.389Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/621460',
					id: 621460,
				},
			},
			{
				_object: '/document',
				id: 'YDbsY-5DQj28qHZjcGp9Xw',
				document_type: 'verified_gross_mass_declaration',
				file_link:
					'https://api.flexport.com/documents/YDbsY-5DQj28qHZjcGp9Xw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 41489,
					uploaded_at: '2019-12-17T06:11:27.110Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/621460',
					id: 621460,
				},
			},
		],
	},
	error: null,
}
