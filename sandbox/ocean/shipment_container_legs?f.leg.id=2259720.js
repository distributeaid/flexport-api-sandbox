module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=2259720',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/ocean/shipment_container_leg',
				id: 493767,
				dates: {},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/143742',
					id: 143742,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/2259720',
					id: 2259720,
				},
			},
		],
	},
	error: null,
}
