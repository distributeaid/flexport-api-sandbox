module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/214505',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 214505,
		container_type: 'dry',
		container_number: 'APZU4292255',
		container_size: 'fourty_ft',
		seal_number: 'ECMU8144969',
		estimated_departure_date: '2019-04-24T12:00:00.000+08:00',
		actual_departure_date: '2019-04-24T12:00:00.000+08:00',
		estimated_arrival_date: '2019-05-02T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_pickup_date: null,
		actual_pickup_date: null,
		estimated_delivery_date: '2019-07-05T12:00:00.000-07:00',
		actual_delivery_date: null,
		last_free_day_date: '2019-07-03T19:00:00.000Z',
		empty_returned_date: '2019-07-02',
		cargo_ready_date: null,
		available_for_pickup_date: null,
		estimated_available_for_pickup_date: null,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/523493',
			id: 523493,
		},
		container_legs: {
			_object: '/api/refs/collection',
			ref_type: '/ocean/shipment_container_leg',
			link:
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=214505',
		},
		items: [],
	},
	error: null,
}
