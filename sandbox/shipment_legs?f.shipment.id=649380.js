module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=649380',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/shipment_leg',
				id: 5858263,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/649380',
					id: 649380,
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5858263',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5858264,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/649380',
					id: 649380,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: '2019-10-31',
				additional_dates: {
					cargo_ready_date: '2019-10-31',
				},
				origin: {
					_object: '/shipment_node',
					tags: ['origin_address'],
					place: {
						_object: '/place',
						name: 'Mirko buyer',
						address: {
							_object: '/address',
							street_address: '12 Queens St',
							street_address2: 'Door 132',
							city: 'Hong Kong',
							state: 'Hong Kong',
							country: 'Hong Kong',
							country_code: 'HK',
							zip: null,
							unlocode: null,
							timezone: 'Asia/Hong_Kong',
							ref: 'mirko_buyer',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5858264',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5858265,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/649380',
					id: 649380,
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
						name: 'CVG1',
						address: {
							_object: '/address',
							street_address: '1155 Worldwide Blvd.',
							street_address2: null,
							city: 'Hebron',
							state: 'KY',
							country: 'United States',
							country_code: 'US',
							zip: '41048',
							unlocode: null,
							timezone: 'America/New_York',
							ref: 'id-22003',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5858265',
					},
				},
				rail_leg: null,
			},
		],
	},
	error: null,
}
