module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/585525',
	version: 2,
	data: {
		metadata: {},
		_object: '/shipment',
		id: 585525,
		name: 'Purchase Order',
		booking: {
			_object: '/api/refs/object',
			ref_type: '/booking',
			link: 'https://api.flexport.com/bookings/121222',
			id: 121222,
		},
		transportation_mode: 'ocean',
		freight_type: 'port_to_door',
		incoterm: 'FOB',
		calculated_weight: {
			value: 12200,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 1202.28,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 1210,
		it_number: null,
		created_date: '2019-09-11T03:17:51.589Z',
		status: 'arrival_port',
		priority: 'standard',
		updated_at: '2020-02-13T07:42:42.394Z',
		archived_at: null,
		estimated_departure_date: '2019-09-14T08:00:00.000+08:00',
		actual_departure_date: '2019-09-14T12:00:00.000+08:00',
		estimated_arrival_date: '2019-09-28T12:00:00.000-07:00',
		actual_arrival_date: '2019-09-29T05:19:00.000-07:00',
		estimated_picked_up_in_full_date: null,
		actual_picked_up_in_full_date: null,
		estimated_delivered_in_full_date: null,
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2019-07-02',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: false,
			house_bill_number: 'FLXTFCNUS585525A',
			master_bill_number: 'FDSDSF',
			carrier_booking_number: 'BK100001',
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=585525',
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
		consignees: [
			{
				_object: '/company_entity',
				id: 629335,
				name: 'Flexport Demo Trading Company',
				mailing_address: {
					_object: '/address',
					street_address: '852 Damalu Street, XYZ Industrial Park',
					street_address2: null,
					city: 'Dongguan',
					state: 'Guangdong',
					country: 'China',
					country_code: 'CN',
					zip: null,
					unlocode: null,
					timezone: 'Asia/Chongqing',
					ref: null,
				},
				ref: 'id-629335',
				vat_numbers: [],
			},
		],
		buyers: [],
		sellers: [],
		importers_of_record: [],
		items: [],
		legs: {
			_object: '/api/refs/collection',
			ref_type: '/shipment_leg',
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=585525',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=585525',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=585525',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=585525',
		},
		departure_date: '2019-09-14T12:00:00.000+08:00',
		arrival_date: '2019-09-29T05:19:00.000-07:00',
		picked_up_in_full_date: null,
		delivered_in_full_date: null,
	},
	error: null,
}
