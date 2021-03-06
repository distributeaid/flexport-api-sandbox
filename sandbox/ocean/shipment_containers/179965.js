module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/179965',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 179965,
		container_type: 'dry',
		container_number: 'UACU8059492',
		container_size: 'fourty_ft',
		seal_number: '',
		estimated_departure_date: '2019-03-01T12:00:00.000+08:00',
		actual_departure_date: '2019-03-01T12:00:00.000+08:00',
		estimated_arrival_date: '2019-03-09T12:00:00.000-08:00',
		actual_arrival_date: '2019-03-09T12:00:00.000-08:00',
		estimated_pickup_date: '2019-02-28T12:00:00.000+08:00',
		actual_pickup_date: '2019-02-28T12:00:00.000+08:00',
		estimated_delivery_date: '2019-03-09T12:00:00.000-08:00',
		actual_delivery_date: '2019-03-09T12:00:00.000-08:00',
		last_free_day_date: null,
		empty_returned_date: null,
		cargo_ready_date: '2019-02-26',
		available_for_pickup_date: null,
		estimated_available_for_pickup_date: null,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/502163',
			id: 502163,
		},
		container_legs: {
			_object: '/api/refs/collection',
			ref_type: '/ocean/shipment_container_leg',
			link:
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=179965',
		},
		items: [],
	},
	error: null,
}
