module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/5427023',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 5427023,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/585525',
			id: 585525,
		},
		estimated_arrival_date: '2019-09-28T12:00:00.000-07:00',
		actual_arrival_date: '2019-09-29T05:19:00.000-07:00',
		estimated_departure_date: '2019-09-14T08:00:00.000+08:00',
		actual_departure_date: '2019-09-14T12:00:00.000+08:00',
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
		carrier_name: 'APL',
		ocean_leg: {
			_object: '/ocean/shipment_leg',
			scac_code: 'APLU',
			vessel_name: 'APL SENTOSA',
			vessel_imo: '9632040',
			voyage_number: '0TX3ZE1PL',
			container_legs: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container_leg',
				link:
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5427023',
			},
		},
		air_leg: null,
		trucking_leg: null,
		rail_leg: null,
	},
	error: null,
}