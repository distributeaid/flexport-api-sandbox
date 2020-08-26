module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs?f.shipment.id=627213',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 3,
		data: [
			{
				_object: '/shipment_leg',
				id: 5530941,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/627213',
					id: 627213,
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
						name: 'HKG - Hong Kong - Hong Kong',
						address: {
							_object: '/address',
							street_address: 'Hong Kong',
							street_address2: null,
							city: 'Hong Kong',
							state: null,
							country: 'Hong Kong',
							country_code: 'HK',
							zip: null,
							unlocode: 'HKHKG',
							timezone: 'Asia/Hong_Kong',
							ref: 'id-39800',
						},
						details: [
							{
								_object: '/air/port',
								port_code: null,
								iata_code: 'HKG',
								icao_code: 'VHHH',
							},
							{
								_object: '/trucking/port',
								port_code: null,
							},
						],
					},
					terminal: null,
				},
				destination: {
					_object: '/shipment_node',
					tags: ['port_of_unloading', 'customs_entry'],
					place: {
						_object: '/place',
						name: 'LAX - Los Angeles - CA',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Los Angeles',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: '90045-5803',
							unlocode: 'USLAX',
							timezone: 'America/Los_Angeles',
							ref: 'id-41559',
						},
						details: [
							{
								_object: '/air/port',
								port_code: '2720',
								iata_code: 'LAX',
								icao_code: 'KLAX',
							},
							{
								_object: '/trucking/port',
								port_code: '2720',
							},
						],
					},
					terminal: null,
				},
				transportation_mode: 'air',
				carrier_name: null,
				ocean_leg: null,
				air_leg: {
					_object: '/air/shipment_leg',
					iata_code: null,
					icao_code: null,
					flight_number: null,
					pieces: null,
				},
				trucking_leg: null,
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5530942,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/627213',
					id: 627213,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
				origin: {
					_object: '/shipment_node',
					tags: ['port_of_unloading', 'customs_entry'],
					place: {
						_object: '/place',
						name: 'LAX - Los Angeles - CA',
						address: {
							_object: '/address',
							street_address: null,
							street_address2: null,
							city: 'Los Angeles',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: '90045-5803',
							unlocode: 'USLAX',
							timezone: 'America/Los_Angeles',
							ref: 'id-41559',
						},
						details: [
							{
								_object: '/air/port',
								port_code: '2720',
								iata_code: 'LAX',
								icao_code: 'KLAX',
							},
							{
								_object: '/trucking/port',
								port_code: '2720',
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
					service_type: 'cartage',
					pieces: null,
					container_legs: null,
				},
				rail_leg: null,
			},
			{
				_object: '/shipment_leg',
				id: 5530943,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/627213',
					id: 627213,
				},
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				cargo_ready_date: null,
				additional_dates: {},
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
						name: 'HKG - Hong Kong - Hong Kong',
						address: {
							_object: '/address',
							street_address: 'Hong Kong',
							street_address2: null,
							city: 'Hong Kong',
							state: null,
							country: 'Hong Kong',
							country_code: 'HK',
							zip: null,
							unlocode: 'HKHKG',
							timezone: 'Asia/Hong_Kong',
							ref: 'id-39800',
						},
						details: [
							{
								_object: '/air/port',
								port_code: null,
								iata_code: 'HKG',
								icao_code: 'VHHH',
							},
							{
								_object: '/trucking/port',
								port_code: null,
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
					service_type: 'cartage',
					pieces: null,
					container_legs: null,
				},
				rail_leg: null,
			},
		],
	},
	error: null,
}