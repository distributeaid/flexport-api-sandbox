module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=493295',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'in30smgzTaGTx35_4H70LQ',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/in30smgzTaGTx35_4H70LQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25444,
					uploaded_at: '2019-02-19T08:55:25.986Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493295',
					id: 493295,
				},
			},
			{
				_object: '/document',
				id: 'bZullZwQSeKf6AzSKC3rBA',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/bZullZwQSeKf6AzSKC3rBA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2951,
					uploaded_at: '2019-02-19T08:55:26.175Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493295',
					id: 493295,
				},
			},
			{
				_object: '/document',
				id: 'BYTkrzxfQx27tIAOB9c3dQ',
				document_type: 'verified_gross_mass_declaration',
				file_link:
					'https://api.flexport.com/documents/BYTkrzxfQx27tIAOB9c3dQ/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 30882,
					uploaded_at: '2019-02-19T10:48:07.065Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/493295',
					id: 493295,
				},
			},
		],
	},
	error: null,
}
