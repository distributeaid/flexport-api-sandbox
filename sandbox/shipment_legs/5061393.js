module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/5061393',
	version: 2,
	data: {
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
	error: null,
}
