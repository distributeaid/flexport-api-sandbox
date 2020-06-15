module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/228943',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 228943,
		container_type: 'dry',
		container_number: 'HCLS1234561',
		container_size: 'fourty_ft',
		seal_number: 'AAAA1234567',
		estimated_departure_date: '2019-07-05T12:00:00.000+08:00',
		actual_departure_date: null,
		estimated_arrival_date: '2019-07-29T12:00:00.000-05:00',
		actual_arrival_date: null,
		estimated_pickup_date: '2019-07-02T12:00:00.000+08:00',
		actual_pickup_date: null,
		estimated_delivery_date: '2019-08-01T12:00:00.000-05:00',
		actual_delivery_date: null,
		last_free_day_date: null,
		empty_returned_date: null,
		cargo_ready_date: null,
		available_for_pickup_date: null,
		estimated_available_for_pickup_date: null,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/566014',
			id: 566014,
		},
		container_legs: {
			_object: '/api/refs/collection',
			ref_type: '/ocean/shipment_container_leg',
			link:
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=228943',
		},
		items: [],
	},
	error: null,
}
