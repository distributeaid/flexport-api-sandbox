module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/79523',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 79523,
		container_type: 'open',
		container_number: 'MSCU5959566',
		container_size: 'fourty_ft_hc',
		seal_number: '',
		estimated_departure_date: '2018-04-20T12:00:00.000+08:00',
		actual_departure_date: '2018-04-18T12:00:00.000+08:00',
		estimated_arrival_date: null,
		actual_arrival_date: '2018-04-18T12:00:00.000-07:00',
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
			link: 'https://api.flexport.com/shipments/253590',
			id: 253590,
		},
		container_legs: {
			_object: '/api/refs/collection',
			ref_type: '/ocean/shipment_container_leg',
			link:
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=79523',
		},
		items: [],
	},
	error: null,
}
