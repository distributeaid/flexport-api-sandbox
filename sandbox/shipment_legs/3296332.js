module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipment_legs/3296332',
	version: 2,
	data: {
		_object: '/shipment_leg',
		id: 3296332,
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/422042',
			id: 422042,
		},
		estimated_arrival_date: '2018-12-10T12:00:00.000-08:00',
		actual_arrival_date: null,
		estimated_departure_date: '2018-12-07T12:00:00.000-08:00',
		actual_departure_date: null,
		cargo_ready_date: null,
		additional_dates: {},
		origin: {
			_object: '/shipment_node',
			tags: ['port_of_unloading', 'customs_entry', 'fmc_port_of_unloading'],
			place: {
				_object: '/place',
				name: 'Oakland, CA',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Oakland',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: null,
					unlocode: 'USOAK',
					timezone: 'America/Los_Angeles',
					ref: 'id-41584',
				},
				details: [
					{
						_object: '/ocean/railport',
						port_code: '2811',
					},
					{
						_object: '/trucking/port',
						port_code: '2811',
					},
					{
						_object: '/ocean/port',
						port_code: '2811',
					},
				],
			},
			terminal: null,
		},
		destination: {
			_object: '/shipment_node',
			tags: ['destination_address', 'deconsolidation'],
			place: {
				_object: '/place',
				name: 'Flexport Los Angeles Warehouse (OLD LOCATION)',
				address: {
					_object: '/address',
					street_address: '6201 Knott Avenue',
					street_address2: null,
					city: 'Buena Park',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: '90620',
					unlocode: null,
					timezone: 'America/Los_Angeles',
					ref: 'id-227012',
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
					'https://api.flexport.com/ocean/shipment_container_legs?f.leg.id=3296332',
			},
		},
		rail_leg: null,
	},
	error: null,
}
