module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6727494',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/ocean/shipment_container_leg',
				id: 1483337,
				dates: {},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/367898',
					id: 367898,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/6727494',
					id: 6727494,
				},
			},
		],
	},
	error: null,
}
