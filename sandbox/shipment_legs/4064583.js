module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/4064583',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 4064583,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/493051',
			id: 493051,
		},
		estimated_arrival_date: '2019-03-30T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_departure_date: '2019-03-14T12:00:00.000+08:00',
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
		carrier_name: 'Australian National Line (ANL)',
		ocean_leg: {
			_object: '/ocean/shipment_leg',
			scac_code: 'ANNU',
			vessel_name: 'CMA CGM T. JEFFERSON',
			vessel_imo: '9780861',
			voyage_number: '0TX2JE1NL',
			container_legs: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container_leg',
				link:
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4064583',
			},
		},
		air_leg: null,
		trucking_leg: null,
		rail_leg: null,
	},
	error: null,
}
