module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=2531634',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/ocean/shipment_container_leg',
				id: 243230,
				dates: {},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/79523',
					id: 79523,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/2531634',
					id: 2531634,
				},
			},
		],
	},
	error: null,
}
