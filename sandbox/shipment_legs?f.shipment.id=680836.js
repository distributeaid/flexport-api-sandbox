module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=680836',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 5,
		data: [
			{
				_object: '/shipment_leg',
				id: 6282623,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
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
						name: 'Los Angeles, CA',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Los Angeles',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USLAX',
							timezone: 'America/Los_Angeles',
							ref: 'id-41538',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '2704',
							},
							{
								_object: '/trucking/port',
								port_code: '2704',
							},
							{
								_object: '/ocean/port',
								port_code: '2704',
							},
						],
					},
					terminal: null,
				},
				transportation_mode: 'ocean',
				carrier_name: 'FLXT TPEB Ocean Line',
				ocean_leg: {
					_object: '/ocean/shipment_leg',
					scac_code: 'NONE',
					vessel_name: null,
					vessel_imo: null,
					voyage_number: null,
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6282623',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 6282624,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6282624',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 6282625,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
					_object: '/shipment_node',
					tags: ['port_of_unloading', 'customs_entry', 'fmc_port_of_unloading'],
					place: {
						_object: '/place',
						name: 'Los Angeles, CA',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Los Angeles',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USLAX',
							timezone: 'America/Los_Angeles',
							ref: 'id-41538',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '2704',
							},
							{
								_object: '/trucking/port',
								port_code: '2704',
							},
							{
								_object: '/ocean/port',
								port_code: '2704',
							},
						],
					},
					terminal: null,
				},
				destination: {
					_object: '/shipment_node',
					tags: ['deconsolidation'],
					place: {
						_object: '/place',
						name: 'Flexport Los Angeles Warehouse',
						address: {
							_object: '/address',
							street_address: '1420 N MCKINLEY AVE',
							street_address2: null,
							city: 'LOS ANGELES',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: '90059',
							unlocode: null,
							timezone: 'America/Los_Angeles',
							ref: 'id-227012',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6282625',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 6282626,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
					_object: '/shipment_node',
					tags: ['deconsolidation'],
					place: {
						_object: '/place',
						name: 'Flexport Los Angeles Warehouse',
						address: {
							_object: '/address',
							street_address: '1420 N MCKINLEY AVE',
							street_address2: null,
							city: 'LOS ANGELES',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: '90059',
							unlocode: null,
							timezone: 'America/Los_Angeles',
							ref: 'id-227012',
						},
						details: [],
					},
					terminal: null,
				},
				destination: {
					_object: '/shipment_node',
					tags: ['destination_address', 'place_of_delivery'],
					place: {
						_object: '/place',
						name: 'AIR GENERAL INC',
						address: {
							_object: '/address',
							street_address: '1515 S DISTRIBUTION DR',
							street_address2: null,
							city: 'SALT LAKE CITY',
							state: 'UT',
							country: 'United States',
							country_code: 'US',
							zip: '84104',
							unlocode: null,
							timezone: 'America/Denver',
							ref: 'id-143340',
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
			{
				_object: '/shipment_leg',
				id: 6282627,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/680836',
					id: 680836,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: '2019-12-13',
				additional_dates: {
					cargo_ready_date: '2019-12-13',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['origin_address'],
					place: {
						_object: '/place',
						name: 'Ciao ciao LLC',
						address: {
							_object: '/address',
							street_address: '123 Street',
							street_address2: null,
							city: 'Shenzhen',
							state: 'Guangdong',
							country: 'China',
							country_code: 'CN',
							zip: null,
							unlocode: null,
							timezone: 'Asia/Shanghai',
							ref: 'id-136127',
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
