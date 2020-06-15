module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/4164915',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 4164915,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/504720',
			id: 504720,
		},
		estimated_arrival_date: '2019-04-21T12:00:00.000-04:00',
		actual_arrival_date: null,
		estimated_departure_date: '2019-04-10T12:00:00.000-07:00',
		actual_departure_date: null,
		cargo_ready_date: null,
		additional_dates: {},
		origin: {
			_object: '/shipment_node',
			tags: ['fmc_port_of_unloading'],
			place: {
				_object: '/place',
				name: 'Vancouver, Canada',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Vancouver',
					state: 'BC',
					country: 'Canada',
					country_code: 'CA',
					zip: null,
					unlocode: 'CAVAN',
					timezone: 'America/Vancouver',
					ref: 'id-36156',
				},
				details: [
					{
						_object: '/ocean/railport',
						port_code: '12493',
					},
					{
						_object: '/trucking/port',
						port_code: '12493',
					},
					{
						_object: '/ocean/port',
						port_code: '12493',
					},
				],
			},
			terminal: null,
		},
		destination: {
			_object: '/shipment_node',
			tags: ['port_of_unloading', 'customs_entry', 'place_of_delivery'],
			place: {
				_object: '/place',
				name: 'Indianapolis, Indiana',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Indianapolis',
					state: 'IN',
					country: 'United States',
					country_code: 'US',
					zip: null,
					unlocode: 'USIND',
					timezone: 'America/Indiana/Indianapolis',
					ref: 'id-41521',
				},
				details: [
					{
						_object: '/ocean/railport',
						port_code: '4110',
					},
					{
						_object: '/trucking/port',
						port_code: '4110',
					},
				],
			},
			terminal: null,
		},
		transportation_mode: 'rail',
		carrier_name: 'APM-Maersk',
		ocean_leg: null,
		air_leg: null,
		trucking_leg: null,
		rail_leg: {
			_object: '/rail/shipment_leg',
			container_legs: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container_leg',
				link:
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=4164915',
			},
		},
	},
	error: null,
}
