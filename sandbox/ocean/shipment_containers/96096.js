module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/ocean/shipment_containers/96096',
	version: 2,
	data: {
		metadata: {},
		_object: '/ocean/shipment_container',
		id: 96096,
		container_type: 'open',
		container_number: 'MSCU5959566',
		container_size: 'fourty_ft_hc',
		seal_number: '123',
		estimated_departure_date: '2018-09-16T16:00:00.000+08:00',
		actual_departure_date: '2018-09-16T12:00:00.000+08:00',
		estimated_arrival_date: '2018-09-30T00:00:00.000-07:00',
		actual_arrival_date: '2018-09-30T12:00:00.000-07:00',
		estimated_pickup_date: '2019-02-28T12:00:00.000+08:00',
		actual_pickup_date: '2018-08-30T12:00:00.000+08:00',
		estimated_delivery_date: '2018-10-08T12:00:00.000-07:00',
		actual_delivery_date: null,
		last_free_day_date: null,
		empty_returned_date: null,
		cargo_ready_date: '2018-06-07',
		available_for_pickup_date: null,
		estimated_available_for_pickup_date: null,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/293442',
			id: 293442,
		},
		container_legs: {
			_object: '/api/refs/collection',
			ref_type: '/ocean/shipment_container_leg',
			link:
				'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=96096',
		},
		items: [],
	},
	error: null,
}
