module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=670593',
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
				id: 305238,
				container_type: 'dry',
				container_number: 'MSKU6284738',
				container_size: 'fourty_ft',
				seal_number: '',
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_pickup_date: null,
				actual_pickup_date: null,
				estimated_delivery_date: null,
				actual_delivery_date: null,
				last_free_day_date: null,
				empty_returned_date: null,
				cargo_ready_date: '2019-11-20',
				available_for_pickup_date: null,
				estimated_available_for_pickup_date: null,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/670593',
					id: 670593,
				},
				container_legs: {
					_object: '/api/refs/collection',
					ref_type: '/ocean/shipment_container_leg',
					link:
						'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=305238',
				},
				items: [],
			},
		],
	},
	error: null,
}
