module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=566014',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 10,
		data: [
			{
				_object: '/shipment_leg',
				id: 4896379,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-07-02T12:00:00.000+08:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-02T12:00:00.000+08:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
					_object: '/shipment_node',
					tags: ['origin_address'],
					place: {
						_object: '/place',
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address:
								"Guangdong Unis Technology Co. Ltd., No. 1 Zheng'an Road, West District",
							street_address2: null,
							city: 'Zhongshan',
							state: 'Guangdong',
							country: 'China',
							country_code: 'CN',
							zip: null,
							unlocode: null,
							timezone: 'Asia/Shanghai',
							ref: 'id-250801',
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
						name: 'Zhongshan, China',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Zhongshan',
							state: null,
							country: 'China',
							country_code: 'CN',
							zip: null,
							unlocode: 'CNZSN',
							timezone: 'Asia/Shanghai',
							ref: 'id-38386',
						},
						details: [
							{
								_object: '/trucking/port',
								port_code: '57079',
							},
							{
								_object: '/ocean/port',
								port_code: '57079',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4896379',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4896380,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-08-01T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-31T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-08-01T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
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
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address: 'Dallas Warehouse 2, 2005 McDaniel Drive',
							street_address2: null,
							city: 'Carrolton',
							state: 'Texas',
							country: 'United States',
							country_code: 'US',
							zip: '75006',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-250802',
						},
						details: [],
					},
					terminal: null,
				},
				transportation_mode: 'truck',
				carrier_name: 'Gulf Winds International',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4896380',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5197035,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-08-01T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-31T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-08-01T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
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
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address: 'Dallas Warehouse 2, 2005 McDaniel Drive',
							street_address2: null,
							city: 'Carrolton',
							state: 'Texas',
							country: 'United States',
							country_code: 'US',
							zip: '75006',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-250802',
						},
						details: [],
					},
					terminal: null,
				},
				transportation_mode: 'truck',
				carrier_name: 'Gulf Winds International',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5197035',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5197036,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-08-01T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-31T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-08-01T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
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
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address: 'Dallas Warehouse 2, 2005 McDaniel Drive',
							street_address2: null,
							city: 'Carrolton',
							state: 'Texas',
							country: 'United States',
							country_code: 'US',
							zip: '75006',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-250802',
						},
						details: [],
					},
					terminal: null,
				},
				transportation_mode: 'truck',
				carrier_name: 'Gulf Winds International',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5197036',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5197037,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-08-01T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-31T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-08-01T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
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
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address: 'Dallas Warehouse 2, 2005 McDaniel Drive',
							street_address2: null,
							city: 'Carrolton',
							state: 'Texas',
							country: 'United States',
							country_code: 'US',
							zip: '75006',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-250802',
						},
						details: [],
					},
					terminal: null,
				},
				transportation_mode: 'truck',
				carrier_name: 'Gulf Winds International',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5197037',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5197038,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-08-01T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-31T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-08-01T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
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
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address: 'Dallas Warehouse 2, 2005 McDaniel Drive',
							street_address2: null,
							city: 'Carrolton',
							state: 'Texas',
							country: 'United States',
							country_code: 'US',
							zip: '75006',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-250802',
						},
						details: [],
					},
					terminal: null,
				},
				transportation_mode: 'truck',
				carrier_name: 'Gulf Winds International',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5197038',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5197039,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-08-01T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-31T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-08-01T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
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
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address: 'Dallas Warehouse 2, 2005 McDaniel Drive',
							street_address2: null,
							city: 'Carrolton',
							state: 'Texas',
							country: 'United States',
							country_code: 'US',
							zip: '75006',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-250802',
						},
						details: [],
					},
					terminal: null,
				},
				transportation_mode: 'truck',
				carrier_name: 'Gulf Winds International',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5197039',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5197040,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-08-01T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-31T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-08-01T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
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
						name: 'UNIS',
						address: {
							_object: '/address',
							street_address: 'Dallas Warehouse 2, 2005 McDaniel Drive',
							street_address2: null,
							city: 'Carrolton',
							state: 'Texas',
							country: 'United States',
							country_code: 'US',
							zip: '75006',
							unlocode: null,
							timezone: 'America/Chicago',
							ref: 'id-250802',
						},
						details: [],
					},
					terminal: null,
				},
				transportation_mode: 'truck',
				carrier_name: 'Gulf Winds International',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5197040',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5232324,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-07-18T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-05T12:00:00.000+08:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
					_object: '/shipment_node',
					tags: ['port_of_loading'],
					place: {
						_object: '/place',
						name: 'Zhongshan, China',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Zhongshan',
							state: null,
							country: 'China',
							country_code: 'CN',
							zip: null,
							unlocode: 'CNZSN',
							timezone: 'Asia/Shanghai',
							ref: 'id-38386',
						},
						details: [
							{
								_object: '/trucking/port',
								port_code: '57079',
							},
							{
								_object: '/ocean/port',
								port_code: '57079',
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
				carrier_name: 'Hapag-Lloyd',
				ocean_leg: {
					_object: '/ocean/shipment_leg',
					scac_code: 'HLCU',
					vessel_name: 'YM COSMOS',
					vessel_imo: '9198288',
					voyage_number: '001E',
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5232324',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5232325,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566014',
					id: 566014,
				},
				estimated_arrival_date: '2019-07-29T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-25T12:00:00.000-07:00',
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
					tags: ['place_of_delivery'],
					place: {
						_object: '/place',
						name: 'Dallas, TX',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Dallas',
							state: 'TX',
							country: 'United States',
							country_code: 'US',
							zip: null,
							unlocode: 'USDAL',
							timezone: 'America/Chicago',
							ref: 'id-41452',
						},
						details: [
							{
								_object: '/ocean/railport',
								port_code: '5501',
							},
							{
								_object: '/trucking/port',
								port_code: '5501',
							},
						],
					},
					terminal: null,
				},
				transportation_mode: 'rail',
				carrier_name: 'Hapag-Lloyd',
				ocean_leg: null,
				air_leg: null,
				trucking_leg: null,
				rail_leg: {
					_object: '/rail/shipment_leg',
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5232325',
					},
				},
			},
		],
	},
	error: null,
}
