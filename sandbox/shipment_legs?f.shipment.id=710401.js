module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=710401',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/shipment_leg',
				id: 6391860,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/710401',
					id: 710401,
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6391860',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 6391861,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/710401',
					id: 710401,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: '2019-08-08',
				additional_dates: {
					cargo_ready_date: '2019-08-08',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['origin_address'],
					place: {
						_object: '/place',
						name: 'Stuff Co.',
						address: {
							_object: '/address',
							street_address: 'Unit #5, 2009 Caitian Road, Futian District',
							street_address2: null,
							city: 'Shenzhen',
							state: 'Guangdong',
							country: 'China',
							country_code: 'CN',
							zip: '518033',
							unlocode: null,
							timezone: 'Asia/Shanghai',
							ref: 'id-252446',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6391861',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 6391862,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/710401',
					id: 710401,
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
					tags: ['destination_address'],
					place: {
						_object: '/place',
						name: 'Toys R’ Stuffd Co. (Warehouse)',
						address: {
							_object: '/address',
							street_address: 'Unit A, 101 Main St., ',
							street_address2: null,
							city: 'Los Angeles',
							state: 'California',
							country: 'United States',
							country_code: 'US',
							zip: '90007',
							unlocode: null,
							timezone: 'America/Los_Angeles',
							ref: 'id-252455',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=6391862',
					},
				},
				rail_leg: null,
			},
		],
	},
	error: null,
}
