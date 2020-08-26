module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=566020',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 4,
		data: [
			{
				_object: '/shipment_leg',
				id: 4896363,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566020',
					id: 566020,
				},
				estimated_arrival_date: '2019-07-02T12:00:00.000+08:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-02T12:00:00.000+08:00',
				actual_departure_date: null,
				cargo_ready_date: '2019-06-27',
				additional_dates: {
					cargo_ready_date: '2019-06-27',
				},
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4896363',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4896364,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566020',
					id: 566020,
				},
				estimated_arrival_date: '2019-07-31T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-30T12:00:00.000-05:00',
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {
					delivery_appointment_scheduled_for_date:
						'2019-07-31T12:00:00.000-05:00',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['customs_entry', 'place_of_delivery'],
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4896364',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5061392,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566020',
					id: 566020,
				},
				estimated_arrival_date: '2019-07-15T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-07-02T12:00:00.000+08:00',
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
					vessel_name: 'MAERSK BATUR',
					vessel_imo: '9402029',
					voyage_number: '020E',
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5061392',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5061393,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/566020',
					id: 566020,
				},
				estimated_arrival_date: '2019-07-28T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_departure_date: null,
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5061393',
					},
				},
			},
		],
	},
	error: null,
}