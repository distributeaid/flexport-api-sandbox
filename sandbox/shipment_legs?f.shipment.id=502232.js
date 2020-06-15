module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=502232',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/shipment_leg',
				id: 4143106,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502232',
					id: 502232,
				},
				estimated_arrival_date: '2019-03-16T12:00:00.000+08:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-03-15T12:00:00.000+08:00',
				actual_departure_date: null,
				cargo_ready_date: '2019-03-27',
				additional_dates: {
					cargo_ready_date: '2019-03-27',
					delivery_appointment_scheduled_for_date:
						'2019-03-16T12:00:00.000+08:00',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4143106',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4143107,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502232',
					id: 502232,
				},
				estimated_arrival_date: '2019-03-30T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-03-29T12:00:00.000-07:00',
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
						name: 'Xavier LLC',
						address: {
							_object: '/address',
							street_address: '123 Main St, Los Angeles',
							street_address2: null,
							city: 'Los Angeles',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: '90007',
							unlocode: null,
							timezone: 'America/Los_Angeles',
							ref: 'id-112580',
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
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4143107',
					},
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 4143108,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502232',
					id: 502232,
				},
				estimated_arrival_date: '2019-03-28T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_departure_date: '2019-03-19T12:00:00.000+08:00',
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
					vessel_name: 'PAXI',
					vessel_imo: '9679555',
					voyage_number: '101',
					container_legs: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container_leg',
						link:
							'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4143108',
					},
				},
				air_leg: null,
				trucking_leg: null,
				rail_leg: null,
			},
		],
	},
	error: null,
}
