module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/4356698',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 4356698,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/523493',
			id: 523493,
		},
		estimated_arrival_date: '2019-04-23T12:00:00.000+08:00',
		actual_arrival_date: null,
		estimated_departure_date: '2019-04-23T12:00:00.000+08:00',
		actual_departure_date: null,
		cargo_ready_date: '2019-03-31',
		additional_dates: {
			cargo_ready_date: '2019-03-31',
			delivery_appointment_scheduled_for_date: '2019-04-23T12:00:00.000+08:00',
		},
		origin: {
			_object: '/shipment_node',
			tags: ['origin_address'],
			place: {
				_object: '/place',
				name: 'Flexport Demo Shipper - HK Warehouse',
				address: {
					_object: '/address',
					street_address: '123 Star Avenue, Wanchai',
					street_address2: null,
					city: 'Hong Kong',
					state: '',
					country: 'Hong Kong',
					country_code: 'HK',
					zip: '',
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
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4356698',
			},
		},
		rail_leg: null,
	},
	error: null,
}
