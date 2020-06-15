module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/174553',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 174553,
		container_type: 'dry',
		container_number: 'SUDU5632112',
		container_size: 'fourty_ft_hc',
		seal_number: 'SEAL123',
		estimated_departure_date: '2019-03-14T12:00:00.000+08:00',
		actual_departure_date: null,
		estimated_arrival_date: '2019-03-30T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_pickup_date: '2019-02-27T12:00:00.000+08:00',
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
			link: 'https://api.flexport.com/shipments/493053',
			id: 493053,
		},
		container_legs: {
			_object: '/api/refs/collection',
			ref_type: '/ocean/shipment_container_leg',
			link:
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=174553',
		},
		items: [],
	},
	error: null,
}
