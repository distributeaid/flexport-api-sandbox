module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/646584',
	version: 2,
	data: {
		metadata: {},
		_object: '/shipment',
		id: 646584,
		name: 'Test Annie 1019_02',
		booking: null,
		transportation_mode: 'ocean',
		freight_type: 'port_to_door',
		incoterm: 'FOB',
		calculated_weight: {
			value: 5000,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 18,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 180,
		it_number: null,
		created_date: '2019-10-19T02:02:37.683Z',
		status: 'seller_location',
		priority: 'standard',
		updated_at: '2020-02-25T05:38:39.896Z',
		archived_at: null,
		estimated_departure_date: '2019-10-25T09:00:00.000+08:00',
		actual_departure_date: null,
		estimated_arrival_date: '2019-11-07T14:00:00.000-08:00',
		actual_arrival_date: null,
		estimated_picked_up_in_full_date: '2019-10-21T12:00:00.000+08:00',
		actual_picked_up_in_full_date: null,
		estimated_delivered_in_full_date: null,
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2019-10-19',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: false,
			house_bill_number: '',
			master_bill_number: 'ONEY12341234',
			carrier_booking_number: 'ONEY12341234',
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=646584',
			},
		},
		shippers: [
			{
				_object: '/company_entity',
				id: 566428,
				name: 'Flexport Demo Shipper',
				mailing_address: {
					_object: '/address',
					street_address: '1 Queen St',
					street_address2: null,
					city: 'Causeway Bay',
					state: 'Hong Kong',
					country: 'Hong Kong',
					country_code: 'HK',
					zip: null,
					unlocode: null,
					timezone: 'Asia/Hong_Kong',
					ref: null,
				},
				ref: 'id-566428',
				vat_numbers: [],
			},
		],
		consignees: [],
		buyers: [],
		sellers: [],
		importers_of_record: [],
		items: [],
		legs: {
			_object: '/api/refs/collection',
			ref_type: '/shipment_leg',
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=646584',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=646584',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=646584',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=646584',
		},
		departure_date: '2019-10-25T09:00:00.000+08:00',
		arrival_date: '2019-11-07T14:00:00.000-08:00',
		picked_up_in_full_date: '2019-10-21T12:00:00.000+08:00',
		delivered_in_full_date: null,
	},
	error: null,
}