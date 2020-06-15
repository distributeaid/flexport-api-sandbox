module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=663832',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 5,
		data: [
			{
				_object: '/shipment_leg',
				id: 5893648,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/663832',
					id: 663832,
				},
				estimated_arrival_date: '2019-11-29T12:00:00.000-08:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-11-08T12:00:00.000+08:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
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
				destination: {
					_object: '/shipment_node',
					tags: ['port_of_unloading', 'customs_entry', 'fmc_port_of_unloading'],
					place: {
						_object: '/place',
						name: 'Oakland, CA',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Oakland',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USOAK',
							timezone: 'America/Los_Angeles',
							ref: 'id-41584',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '2811',
							},
							{
								_object: '/trucking/port',
								port_code: '2811',
							},
							{
								_object: '/ocean/port',
								port_code: '2811',
							},
						],
					},
					terminal: null,
				},
				transportation_mode: 'ocean',
				carrier_name: 'K Line',
				ocean_leg: {
					_object: '/ocean/shipment_leg',
					scac_code: 'KKLU',
					vessel_name: 'YM COSMOS',
					vessel_imo: '9198288',
					voyage_number: '53W',
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5893648',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
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
					delivery_appointment_scheduled_for_date:
						'2019-11-04T12:00:00.000+08:00',
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
			{
				_object: '/shipment_leg',
				id: 5893650,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/663832',
					id: 663832,
				},
				estimated_arrival_date: '2020-01-06T12:00:00.000-08:00',
				actual_arrival_date: null,
				estimated_departure_date: '2020-01-02T12:00:00.000-08:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2020-01-06T12:00:00.000-08:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['port_of_unloading', 'customs_entry', 'fmc_port_of_unloading'],
					place: {
						_object: '/place',
						name: 'Oakland, CA',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Oakland',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USOAK',
							timezone: 'America/Los_Angeles',
							ref: 'id-41584',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '2811',
							},
							{
								_object: '/trucking/port',
								port_code: '2811',
							},
							{
								_object: '/ocean/port',
								port_code: '2811',
							},
						],
					},
					terminal: null,
				},
				destination: {
					_object: '/shipment_node',
					tags: ['destination_address'],
					place: {
						_object: '/place',
						name: 'Nevada DC',
						address: {
							_object: '/address',
							street_address: '25 Industrial Way',
							street_address2: 'Building 4',
							city: 'Sparks',
							state: 'Nevada',
							country: 'United States',
							country_code: 'US',
							zip: '89431',
							unlocode: null,
							timezone: 'America/Los_Angeles',
							ref: 'id-239359',
						},
						details: [],
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5893650',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5893651,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/663832',
					id: 663832,
				},
				estimated_arrival_date: '2019-11-02T12:00:00.000+08:00',
				actual_arrival_date: '2019-12-06T16:27:59.934+08:00',
				estimated_departure_date: '2019-11-02T12:00:00.000+08:00',
				actual_departure_date: null,
				cargo_ready_date: '2019-10-30',
				additional_dates: {
					cargo_ready_date: '2019-10-30',
					delivery_appointment_scheduled_for_date:
						'2019-11-02T12:00:00.000+08:00',
					delivery_completed: '2019-12-06T16:27:59.934+08:00',
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
				transportation_mode: 'truck',
				carrier_name: 'AllStar Freight Company',
				ocean_leg: null,
				air_leg: null,
				trucking_leg: {
					_object: '/trucking/shipment_leg',
					tracking_number: null,
					service_type: 'ltl',
					pieces: null,
					container_legs: null,
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 6094664,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/663832',
					id: 663832,
				},
				estimated_arrival_date: null,
				actual_arrival_date: '2019-12-06T16:28:36.104+08:00',
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
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
				transportation_mode: 'truck',
				carrier_name: null,
				ocean_leg: null,
				air_leg: null,
				trucking_leg: {
					_object: '/trucking/shipment_leg',
					tracking_number: null,
					service_type: 'ltl',
					pieces: null,
					container_legs: null,
				},
				rail_leg: null,
			},
		],
	},
	error: null,
}
