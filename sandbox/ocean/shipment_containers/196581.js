module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/196581',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 196581,
		container_type: 'dry',
		container_number: 'HIHI1234564',
		container_size: 'twenty_ft',
		seal_number: '324132',
		estimated_departure_date: '2019-05-01T12:00:00.000+08:00',
		actual_departure_date: '2019-05-01T12:00:00.000+08:00',
		estimated_arrival_date: '2019-05-24T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_pickup_date: '2019-04-26T12:00:00.000+08:00',
		actual_pickup_date: '2019-04-26T12:00:00.000+08:00',
		estimated_delivery_date: null,
		actual_delivery_date: null,
		last_free_day_date: null,
		empty_returned_date: null,
		cargo_ready_date: '2019-04-24',
		available_for_pickup_date: null,
		estimated_available_for_pickup_date: null,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/527638',
			id: 527638,
		},
		container_legs: {
			_object: '/api/refs/collection',
			ref_type: '/ocean/shipment_container_leg',
			link:
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=196581',
		},
		items: [],
	},
	error: null,
}
