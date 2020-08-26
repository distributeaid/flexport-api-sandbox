module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=502173',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 6,
		data: [
			{
				_object: '/shipment_leg',
				id: 4142027,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
				estimated_arrival_date: '2020-01-28T12:00:00.000-08:00',
				actual_arrival_date: null,
				estimated_departure_date: '2020-01-16T12:00:00.000+08:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
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
				destination: {
					_object: '/shipment_node',
					tags: ['port_of_unloading', 'fmc_port_of_unloading'],
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4142027',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4142028,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
				estimated_arrival_date: '2020-02-04T12:00:00.000-06:00',
				actual_arrival_date: null,
				estimated_departure_date: '2020-02-03T12:00:00.000-08:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
					_object: '/shipment_node',
					tags: ['port_of_unloading', 'fmc_port_of_unloading'],
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
					tags: ['customs_entry', 'place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Chicago, IL',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Chicago',
							state: 'IL',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USCHI',
							timezone: 'America/Chicago',
							ref: 'id-41458',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '3901',
							},
							{
								_object: '/trucking/port',
								port_code: '3901',
							},
						],
					},
					terminal: null,
				},
				transportation_mode: 'rail',
				carrier_name: 'FLXT TPEB Ocean Line',
				ocean_leg: null,
				air_leg: null,
				trucking_leg: null,
				rail_leg: {
					_object: '/rail/shipment_leg',
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4142028',
					},
				},
			},
			{
				_object: '/shipment_leg',
				id: 4142029,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4142029',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4142030,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
					_object: '/shipment_node',
					tags: ['customs_entry', 'place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Chicago, IL',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Chicago',
							state: 'IL',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USCHI',
							timezone: 'America/Chicago',
							ref: 'id-41458',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '3901',
							},
							{
								_object: '/trucking/port',
								port_code: '3901',
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
						name: 'Universal Logistics - Chicago',
						address: {
							_object: '/address',
							street_address: '7373 S LOCKWOOD AVE',
							street_address2: null,
							city: 'BEDFORD PARK',
							state: 'IL',
							country: 'United States',
							country_code: 'US',
							zip: '60638',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-143168',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4142030',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4142031,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: '2019-02-24',
				additional_dates: {
					cargo_ready_date: '2019-02-24',
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
				transportation_mode: 'truck',
				carrier_name: null,
				ocean_leg: null,
				air_leg: null,
				trucking_leg: {
					_object: '/trucking/shipment_leg',
					tracking_number: null,
					service_type: 'ftl',
					pieces: null,
					container_legs: null,
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4142032,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502173',
					id: 502173,
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
						name: 'Universal Logistics - Chicago',
						address: {
							_object: '/address',
							street_address: '7373 S LOCKWOOD AVE',
							street_address2: null,
							city: 'BEDFORD PARK',
							state: 'IL',
							country: 'United States',
							country_code: 'US',
							zip: '60638',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-143168',
						},
						details: [],
					},
					terminal: null,
				},
				destination: {
					_object: '/shipment_node',
					tags: ['destination_address'],
					place: {
						_object: '/place',
						name: 'Flexport Chicago Warehouse',
						address: {
							_object: '/address',
							street_address: '10601 FRANKLIN AVE',
							street_address2: null,
							city: 'FRANKLIN PARK',
							state: 'IL',
							country: 'United States',
							country_code: 'US',
							zip: '60131',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-225797',
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
					service_type: 'ftl',
					pieces: null,
					container_legs: null,
				},
				rail_leg: null,
			},
		],
	},
	error: null,
}