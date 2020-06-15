module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/documents?f.shipment.id=685551',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/document',
				id: '_nzNCSOPQrypPVnsRAbMdg',
				document_type: 'nra',
				file_link:
					'https://api.flexport.com/documents/_nzNCSOPQrypPVnsRAbMdg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 23599,
					uploaded_at: '2019-12-17T14:24:13.676Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/685551',
					id: 685551,
				},
			},
			{
				_object: '/document',
				id: 'vQR1WUwLRsGpaklah2k0Bg',
				document_type: 'freight_forwarder_quote',
				file_link:
					'https://api.flexport.com/documents/vQR1WUwLRsGpaklah2k0Bg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 31850,
					uploaded_at: '2019-12-17T14:24:13.844Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/685551',
					id: 685551,
				},
			},
			{
				_object: '/document',
				id: 'DlqJ69GoQEac-KGF4wGxcg',
				document_type: 'shipping_instructions',
				file_link:
					'https://api.flexport.com/documents/DlqJ69GoQEac-KGF4wGxcg/download',
				archived_at: null,
				file_metadata: {
					_object: '/file/metadata',
					size: 28419,
					uploaded_at: '2020-01-20T04:24:48.427Z',
				},
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/685551',
					id: 685551,
				},
			},
		],
	},
	error: null,
}
