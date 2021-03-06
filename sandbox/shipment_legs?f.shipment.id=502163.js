module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=502163',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 7,
		data: [
			{
				_object: '/shipment_leg',
				id: 4141880,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502163',
					id: 502163,
				},
				estimated_arrival_date: '2019-02-28T12:00:00.000+08:00',
				actual_arrival_date: '2019-02-28T12:00:00.000+08:00',
				estimated_departure_date: '2019-02-28T12:00:00.000+08:00',
				actual_departure_date: '2019-02-28T12:00:00.000+08:00',
				cargo_ready_date: '2019-02-26',
				additional_dates: {
					cargo_ready_date: '2019-02-26',
					delivery_appointment_scheduled_for_date:
						'2019-02-28T12:00:00.000+08:00',
					delivery_completed: '2019-02-28T12:00:00.000+08:00',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141880',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4141881,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502163',
					id: 502163,
				},
				estimated_arrival_date: '2019-03-09T12:00:00.000-08:00',
				actual_arrival_date: '2019-03-09T12:00:00.000-08:00',
				estimated_departure_date: '2019-03-09T12:00:00.000-08:00',
				actual_departure_date: '2019-03-09T12:00:00.000-08:00',
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
					tags: ['destination_address', 'deconsolidation'],
					place: {
						_object: '/place',
						name: 'Flexport Los Angeles Warehouse ',
						address: {
							_object: '/address',
							street_address: '1420 N McKinley Avenue',
							street_address2: null,
							city: 'Los Angeles',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141881',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4141890,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502163',
					id: 502163,
				},
				estimated_arrival_date: '2019-03-09T12:00:00.000-08:00',
				actual_arrival_date: '2019-03-09T12:00:00.000-08:00',
				estimated_departure_date: '2019-03-01T12:00:00.000+08:00',
				actual_departure_date: '2019-03-01T12:00:00.000+08:00',
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
					vessel_name: 'COSCO DENMARK',
					vessel_imo: '9516478',
					voyage_number: '151',
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141890',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4141895,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502163',
					id: 502163,
				},
				estimated_arrival_date: '2019-02-28T12:00:00.000+08:00',
				actual_arrival_date: '2019-02-28T12:00:00.000+08:00',
				estimated_departure_date: '2019-02-28T12:00:00.000+08:00',
				actual_departure_date: '2019-02-28T12:00:00.000+08:00',
				cargo_ready_date: '2019-02-24',
				additional_dates: {
					cargo_ready_date: '2019-02-24',
					delivery_appointment_scheduled_for_date:
						'2019-02-28T12:00:00.000+08:00',
					delivery_completed: '2019-02-28T12:00:00.000+08:00',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141895',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4141896,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502163',
					id: 502163,
				},
				estimated_arrival_date: '2019-03-09T12:00:00.000-08:00',
				actual_arrival_date: '2019-03-09T12:00:00.000-08:00',
				estimated_departure_date: '2019-03-09T12:00:00.000-08:00',
				actual_departure_date: '2019-03-09T12:00:00.000-08:00',
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
					tags: ['destination_address', 'deconsolidation'],
					place: {
						_object: '/place',
						name: 'Flexport Los Angeles Warehouse ',
						address: {
							_object: '/address',
							street_address: '1420 N McKinley Avenue',
							street_address2: null,
							city: 'Los Angeles',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141896',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4141897,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502163',
					id: 502163,
				},
				estimated_arrival_date: '2019-02-28T12:00:00.000+08:00',
				actual_arrival_date: '2019-02-28T12:00:00.000+08:00',
				estimated_departure_date: '2019-02-28T12:00:00.000+08:00',
				actual_departure_date: '2019-02-28T12:00:00.000+08:00',
				cargo_ready_date: '2019-02-24',
				additional_dates: {
					cargo_ready_date: '2019-02-24',
					delivery_appointment_scheduled_for_date:
						'2019-02-28T12:00:00.000+08:00',
					delivery_completed: '2019-02-28T12:00:00.000+08:00',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141897',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4141898,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502163',
					id: 502163,
				},
				estimated_arrival_date: '2019-03-09T12:00:00.000-08:00',
				actual_arrival_date: '2019-03-09T12:00:00.000-08:00',
				estimated_departure_date: '2019-03-09T12:00:00.000-08:00',
				actual_departure_date: '2019-03-09T12:00:00.000-08:00',
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
					tags: ['destination_address', 'deconsolidation'],
					place: {
						_object: '/place',
						name: 'Flexport Los Angeles Warehouse ',
						address: {
							_object: '/address',
							street_address: '1420 N McKinley Avenue',
							street_address2: null,
							city: 'Los Angeles',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4141898',
					},
				},
				rail_leg: null,
			},
		],
	},
	error: null,
}
