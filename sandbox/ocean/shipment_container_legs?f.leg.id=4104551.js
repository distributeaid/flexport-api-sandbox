module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4104551',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				_object: '/ocean/shipment_container_leg',
				id: 647872,
				dates: {
					actual_loaded_on_board_date: '2019-03-11T16:00:00.000Z',
				},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/178631',
					id: 178631,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/4104551',
					id: 4104551,
				},
			},
			{
				_object: '/ocean/shipment_container_leg',
				id: 647885,
				dates: {
					actual_loaded_on_board_date: '2019-03-11T16:00:00.000Z',
				},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/178635',
					id: 178635,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/4104551',
					id: 4104551,
				},
			},
		],
	},
	error: null,
}
