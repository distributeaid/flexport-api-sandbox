module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/203175',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 203175,
		container_type: 'dry',
		container_number: 'ECMU8144969',
		container_size: 'fourty_five_ft_hc',
		seal_number: 'ECMU8144969',
		estimated_departure_date: '2019-04-24T12:00:00.000+08:00',
		actual_departure_date: '2019-04-24T12:00:00.000+08:00',
		estimated_arrival_date: '2019-05-02T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_pickup_date: '2019-04-23T12:00:00.000+08:00',
		actual_pickup_date: null,
		estimated_delivery_date: null,
		actual_delivery_date: null,
		last_free_day_date: '2019-06-03T19:00:00.000Z',
		empty_returned_date: null,
		cargo_ready_date: '2019-03-31',
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
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=203175',
		},
		items: [],
	},
	error: null,
}
