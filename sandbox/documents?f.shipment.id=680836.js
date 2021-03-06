module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=680836',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: 'NCVCMGc0SH6zGKRmLBjojA',
				document_type: 'booking_form_pdf',
				file_link:
					'https://api.flexport.com/documents/NCVCMGc0SH6zGKRmLBjojA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 25776,
					uploaded_at: '2019-12-03T03:38:05.870Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
			},
			{
				_object: '/document',
				id: '3lGhYJmHSVeclOTPaCitqw',
				document_type: 'booking_form_csv',
				file_link:
					'https://api.flexport.com/documents/3lGhYJmHSVeclOTPaCitqw/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 2590,
					uploaded_at: '2019-12-03T03:38:06.125Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
			},
			{
				_object: '/document',
				id: 'kXLpMshnS6CWm3gsSnZ4GA',
				document_type: 'air_certification_for_safe_transport',
				file_link:
					'https://api.flexport.com/documents/kXLpMshnS6CWm3gsSnZ4GA/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 85071,
					uploaded_at: '2020-01-02T09:59:56.234Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
			},
		],
	},
	error: null,
}
