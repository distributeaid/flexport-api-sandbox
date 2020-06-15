module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/5893649',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 5893649,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/663832',
			id: 663832,
		},
		estimated_arrival_date: '2019-11-04T12:00:00.000+08:00',
		actual_arrival_date: null,
		estimated_departure_date: '2019-11-04T12:00:00.000+08:00',
		actual_departure_date: null,
		cargo_ready_date: null,
		additional_dates: {
			delivery_appointment_scheduled_for_date: '2019-11-04T12:00:00.000+08:00',
		},
		origin: {
			_object: '/shipment_node',
			tags: ['consolidation'],
			place: {
				_object: '/place',
				name: 'Flexport Shenzhen Warehouse',
				address: {
					_object: '/address',
					street_address:
						"GLP Logistics Park, Phase II, Block 9, Mingzhu 3rd Rd and Yong'an North 2nd St",
					street_address2:
						'深圳市盐田区永安路北一街盐田港普洛斯物流园二期9号仓库',
					city: 'Shenzhen',
					state: 'Guangdong',
					country: 'China',
					country_code: 'CN',
					zip: null,
					unlocode: null,
					timezone: 'Asia/Shanghai',
					ref: 'id-160816',
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
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5893649',
			},
		},
		rail_leg: null,
	},
	error: null,
}
