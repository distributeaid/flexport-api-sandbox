module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/4142018',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 4142018,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/502170',
			id: 502170,
		},
		estimated_arrival_date: '2019-03-16T12:00:00.000+08:00',
		actual_arrival_date: '2019-03-16T12:00:00.000+08:00',
		estimated_departure_date: '2019-03-15T12:00:00.000+08:00',
		actual_departure_date: '2019-03-15T12:00:00.000+08:00',
		cargo_ready_date: null,
		additional_dates: {
			delivery_appointment_scheduled_for_date: '2019-03-16T12:00:00.000+08:00',
			delivery_completed: '2019-03-16T12:00:00.000+08:00',
		},
		origin: {
			_object: '/shipment_node',
			tags: ['consolidation'],
			place: {
				_object: '/place',
				name: 'Hutchison Logistics Centre',
				address: {
					_object: '/address',
					street_address: '18 Container Port Rd S, Unit 102, 1/F',
					street_address2: '',
					city: 'Kwai Chung, Hong Kong',
					state: 'Hong Kong',
					country: 'Hong Kong',
					country_code: 'HK',
					zip: null,
					unlocode: null,
					timezone: 'Asia/Hong_Kong',
					ref: 'id-130157',
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
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4142018',
			},
		},
		rail_leg: null,
	},
	error: null,
}