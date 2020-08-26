module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/474723',
	version: 2,
	data: {
		metadata: {},
		_object: '/shipment',
		id: 474723,
		name: 'Dummy Booking for PRE booking tool SHA',
		booking: null,
		transportation_mode: 'ocean',
		freight_type: 'port_to_door',
		incoterm: 'FOB',
		calculated_weight: {
			value: 1000,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 10,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 0,
		it_number: null,
		created_date: '2019-01-08T03:58:19.686Z',
		status: 'seller_location',
		priority: 'standard',
		updated_at: '2019-10-28T07:45:22.616Z',
		archived_at: null,
		estimated_departure_date: null,
		actual_departure_date: null,
		estimated_arrival_date: null,
		actual_arrival_date: null,
		estimated_picked_up_in_full_date: null,
		actual_picked_up_in_full_date: null,
		estimated_delivered_in_full_date: null,
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2019-01-24',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: false,
			house_bill_number: '',
			master_bill_number: null,
			carrier_booking_number: null,
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=474723',
			},
		},
		shippers: [],
		consignees: [],
		buyers: [],
		sellers: [],
		importers_of_record: [],
		items: [],
		legs: {
			_object: '/api/refs/collection',
			ref_type: '/shipment_leg',
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=474723',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=474723',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=474723',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=474723',
		},
		departure_date: null,
		arrival_date: null,
		picked_up_in_full_date: null,
		delivered_in_full_date: null,
	},
	error: null,
}