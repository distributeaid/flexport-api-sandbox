module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=508266',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				metadata: {},
				_object: '/ocean/shipment_container',
				id: 185058,
				container_type: 'dry',
				container_number: 'TCMU1357714',
				container_size: 'twenty_ft',
				seal_number: 'Y177919',
				estimated_departure_date: '2019-03-31T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-04-16T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_pickup_date: '2019-03-27T12:00:00.000+08:00',
				actual_pickup_date: null,
				estimated_delivery_date: null,
				actual_delivery_date: null,
				last_free_day_date: null,
				empty_returned_date: null,
				cargo_ready_date: '2019-03-21',
				available_for_pickup_date: null,
				estimated_available_for_pickup_date: null,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/508266',
					id: 508266,
				},
				container_legs: {
					_object: '/api/refs/collection',
					ref_type: '/ocean/shipment_container_leg',
					link:
						'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=185058',
				},
				items: [],
			},
		],
	},
	error: null,
}
