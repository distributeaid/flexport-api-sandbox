module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/5873738',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 5873738,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/659879',
			id: 659879,
		},
		estimated_arrival_date: null,
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
				name: 'Cleveland, OH',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Cleveland',
					state: 'OH',
					country: 'United States',
					country_code: 'US',
					zip: null,
					unlocode: 'USCLE',
					timezone: 'America/New_York',
					ref: 'id-41461',
				},
				details: [
					{
						_object: '/ocean/railport',
						port_code: '4101',
					},
					{
						_object: '/trucking/port',
						port_code: '4101',
					},
					{
						_object: '/ocean/port',
						port_code: '4101',
					},
				],
			},
			terminal: null,
		},
		transportation_mode: 'rail',
		carrier_name: 'APL',
		ocean_leg: null,
		air_leg: null,
		trucking_leg: null,
		rail_leg: {
			_object: '/rail/shipment_leg',
			container_legs: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container_leg',
				link:
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=5873738',
			},
		},
	},
	error: null,
}
