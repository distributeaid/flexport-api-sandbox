module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/6352639',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 6352639,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/709156',
			id: 709156,
		},
		estimated_arrival_date: '2020-03-20T12:00:00.000+08:00',
		actual_arrival_date: null,
		estimated_departure_date: '2020-03-19T04:00:00.000+08:00',
		actual_departure_date: null,
		cargo_ready_date: '2020-01-17',
		additional_dates: {
			cargo_ready_date: '2020-01-17',
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
					street_address2: '',
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
				name: 'Hong Kong, Hong Kong',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Hong Kong',
					state: null,
					country: 'Hong Kong',
					country_code: 'HK',
					zip: null,
					unlocode: 'HKHKG',
					timezone: 'Asia/Hong_Kong',
					ref: 'id-38384',
				},
				details: [
					{
						_object: '/trucking/port',
						port_code: '58201',
					},
					{
						_object: '/ocean/port',
						port_code: '58201',
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
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6352639',
			},
		},
		rail_leg: null,
	},
	error: null,
}
