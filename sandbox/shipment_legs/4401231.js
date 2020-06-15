module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/4401231',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 4401231,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/527638',
			id: 527638,
		},
		estimated_arrival_date: '2019-05-24T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_departure_date: '2019-05-01T12:00:00.000+08:00',
		actual_departure_date: '2019-05-01T12:00:00.000+08:00',
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
			vessel_name: 'MAERSK BATUR',
			vessel_imo: '9402029',
			voyage_number: '44E',
			container_legs: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container_leg',
				link:
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4401231',
			},
		},
		air_leg: null,
		trucking_leg: null,
		rail_leg: null,
	},
	error: null,
}
