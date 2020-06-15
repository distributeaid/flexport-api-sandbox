module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=646568',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'vy6xxYUgQIGeW62wRfXsNw',
				document_type: 'booking_sheet',
				file_link:
					'https://api.flexport.com/documents/vy6xxYUgQIGeW62wRfXsNw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 683245,
					uploaded_at: '2019-11-13T04:39:54.435Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/646568',
					id: 646568,
				},
			},
			{
				_object: '/document',
				id: 'UzGb2t4FTrSp7dXk_1XkVw',
				document_type: 'verified_gross_mass_declaration',
				file_link:
					'https://api.flexport.com/documents/UzGb2t4FTrSp7dXk_1XkVw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 40317,
					uploaded_at: '2020-02-28T03:48:30.675Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/646568',
					id: 646568,
				},
			},
			{
				_object: '/document',
				id: 'UI1_lkzwTjS_HZ4niluzhw',
				document_type: 'isf_worksheet',
				file_link:
					'https://api.flexport.com/documents/UI1_lkzwTjS_HZ4niluzhw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 20226,
					uploaded_at: '2020-04-03T07:23:00.022Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/646568',
					id: 646568,
				},
			},
		],
	},
	error: null,
}
