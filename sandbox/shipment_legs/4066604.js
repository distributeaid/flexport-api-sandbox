module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/4066604',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 4066604,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/493348',
			id: 493348,
		},
		estimated_arrival_date: '2019-02-27T12:00:00.000+08:00',
		actual_arrival_date: '2019-02-27T12:00:00.000+08:00',
		estimated_departure_date: '2019-02-27T12:00:00.000+08:00',
		actual_departure_date: '2019-02-27T12:00:00.000+08:00',
		cargo_ready_date: '2019-02-07',
		additional_dates: {
			cargo_ready_date: '2019-02-07',
			delivery_appointment_scheduled_for_date: '2019-02-27T12:00:00.000+08:00',
			delivery_completed: '2019-02-27T12:00:00.000+08:00',
		},
		origin: {
			_object: '/shipment_node',
			tags: ['origin_address'],
			place: {
				_object: '/place',
				name: 'Hong Kong warehouse',
				address: {
					_object: '/address',
					street_address: '123 Star Avenue',
					street_address2: null,
					city: 'Hong Kong',
					state: 'Hong kong',
					country: 'Hong Kong',
					country_code: 'HK',
					zip: '00000',
					unlocode: null,
					timezone: 'Asia/Hong_Kong',
					ref: 'id-90202',
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
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4066604',
			},
		},
		rail_leg: null,
	},
	error: null,
}
