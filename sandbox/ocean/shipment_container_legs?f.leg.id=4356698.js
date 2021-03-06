module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4356698',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				_object: '/ocean/shipment_container_leg',
				id: 750424,
				dates: {},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/203175',
					id: 203175,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/4356698',
					id: 4356698,
				},
			},
		],
	},
	error: null,
}
