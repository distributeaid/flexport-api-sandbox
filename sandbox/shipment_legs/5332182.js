module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/5332182',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 5332182,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/542526',
			id: 542526,
		},
		estimated_arrival_date: '2019-09-25T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_departure_date: '2019-09-01T12:00:00.000+08:00',
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
				name: 'Tacoma',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Tacoma',
					state: 'WA',
					country: 'United States',
					country_code: 'US',
					zip: null,
					unlocode: 'USTIW',
					timezone: 'America/Los_Angeles',
					ref: 'id-36164',
				},
				details: [
					{
						_object: '/ocean/railport',
						port_code: '3002',
					},
					{
						_object: '/trucking/port',
						port_code: '3002',
					},
					{
						_object: '/ocean/port',
						port_code: '3002',
					},
				],
			},
			terminal: null,
		},
		transportation_mode: 'ocean',
		carrier_name: 'APL',
		ocean_leg: {
			_object: '/ocean/shipment_leg',
			scac_code: 'APLU',
			vessel_name: 'EVER LEGACY',
			vessel_imo: '9595515',
			voyage_number: '0TG4BE1PL',
			container_legs: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container_leg',
				link:
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5332182',
			},
		},
		air_leg: null,
		trucking_leg: null,
		rail_leg: null,
	},
	error: null,
}
