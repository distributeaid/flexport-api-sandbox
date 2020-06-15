module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=709156',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 2,
		data: [
			{
				metadata: {},
				_object: '/ocean/shipment_container',
				id: 369136,
				container_type: 'dry',
				container_number: 'NYKU8484235',
				container_size: 'fourty_ft',
				seal_number: '',
				estimated_departure_date: '2020-01-24T12:00:00.000+08:00',
				actual_departure_date: '2020-01-09T12:00:00.000+08:00',
				estimated_arrival_date: '2020-03-23T12:00:00.000-04:00',
				actual_arrival_date: null,
				estimated_pickup_date: '2020-03-19T04:00:00.000+08:00',
				actual_pickup_date: null,
				estimated_delivery_date: null,
				actual_delivery_date: null,
				last_free_day_date: null,
				empty_returned_date: '2020-01-28',
				cargo_ready_date: '2020-01-17',
				available_for_pickup_date: null,
				estimated_available_for_pickup_date: null,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/709156',
					id: 709156,
				},
				container_legs: {
					_object: '/api/refs/collection',
					ref_type: '/ocean/shipment_container_leg',
					link:
						'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=369136',
				},
				items: [],
			},
			{
				metadata: {},
				_object: '/ocean/shipment_container',
				id: 369137,
				container_type: 'dry',
				container_number: 'NYKU8484240',
				container_size: 'fourty_ft',
				seal_number: '',
				estimated_departure_date: '2020-01-24T12:00:00.000+08:00',
				actual_departure_date: '2020-01-09T12:00:00.000+08:00',
				estimated_arrival_date: '2020-03-23T12:00:00.000-04:00',
				actual_arrival_date: null,
				estimated_pickup_date: null,
				actual_pickup_date: null,
				estimated_delivery_date: null,
				actual_delivery_date: null,
				last_free_day_date: null,
				empty_returned_date: null,
				cargo_ready_date: null,
				available_for_pickup_date: null,
				estimated_available_for_pickup_date: null,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/709156',
					id: 709156,
				},
				container_legs: {
					_object: '/api/refs/collection',
					ref_type: '/ocean/shipment_container_leg',
					link:
						'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=369137',
				},
				items: [],
			},
		],
	},
	error: null,
}
