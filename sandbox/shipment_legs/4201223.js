module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/4201223',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 4201223,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/508275',
			id: 508275,
		},
		estimated_arrival_date: '2019-03-27T12:00:00.000+08:00',
		actual_arrival_date: '2019-03-27T12:00:00.000+08:00',
		estimated_departure_date: '2019-03-27T12:00:00.000+08:00',
		actual_departure_date: '2019-03-27T12:00:00.000+08:00',
		cargo_ready_date: '2019-03-21',
		additional_dates: {
			cargo_ready_date: '2019-03-21',
			delivery_appointment_scheduled_for_date: '2019-03-27T12:00:00.000+08:00',
			delivery_completed: '2019-03-27T12:00:00.000+08:00',
		},
		origin: {
			_object: '/shipment_node',
			tags: ['origin_address'],
			place: {
				_object: '/place',
				name: 'Mirko Yantian Warehouse',
				address: {
					_object: '/address',
					street_address: '3435 Shenzhen Rd.',
					street_address2: '3425深圳路，深圳，广东省',
					city: 'Shenzhen',
					state: 'Guangdong',
					country: 'China',
					country_code: 'CN',
					zip: null,
					unlocode: null,
					timezone: 'Asia/Shanghai',
					ref: 'id-162815',
				},
				details: [],
			},
			terminal: null,
		},
		destination: {
			_object: '/shipment_node',
			tags: ['port_of_loading'],
			place: {
				_object: '/place',
				name: 'Yantian, China',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Yantian',
					state: null,
					country: 'China',
					country_code: 'CN',
					zip: null,
					unlocode: 'CNYTN',
					timezone: 'Asia/Hong_Kong',
					ref: 'id-38385',
				},
				details: [
					{
						_object: '/trucking/port',
						port_code: '57078',
					},
					{
						_object: '/ocean/port',
						port_code: '57078',
					},
				],
			},
			terminal: null,
		},
		transportation_mode: 'truck',
		carrier_name: null,
		ocean_leg: null,
		air_leg: null,
		trucking_leg: {
			_object: '/trucking/shipment_leg',
			tracking_number: null,
			service_type: 'drayage',
			pieces: null,
			container_legs: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container_leg',
				link:
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4201223',
			},
		},
		rail_leg: null,
	},
	error: null,
}
