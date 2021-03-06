module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141890',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/ocean/shipment_container_leg',
				id: 653850,
				dates: {
					actual_loaded_on_board_date: '2019-02-28T16:00:00.000Z',
				},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/179965',
					id: 179965,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/4141890',
					id: 4141890,
				},
			},
			{
				_object: '/ocean/shipment_container_leg',
				id: 653853,
				dates: {
					actual_loaded_on_board_date: '2019-02-28T16:00:00.000Z',
				},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/179966',
					id: 179966,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/4141890',
					id: 4141890,
				},
			},
			{
				_object: '/ocean/shipment_container_leg',
				id: 653856,
				dates: {
					actual_loaded_on_board_date: '2019-02-28T16:00:00.000Z',
				},
				shipment_container: {
					_object: '/api/refs/object',
					ref_type: '/ocean/shipment_container',
					link: 'https://api.flexport.com/ocean/shipment_containers/179967',
					id: 179967,
				},
				leg: {
					_object: '/api/refs/object',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs/4141890',
					id: 4141890,
				},
			},
		],
	},
	error: null,
}
