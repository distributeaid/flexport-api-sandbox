module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/114900',
	version: 2,
	data: {
		metadata: {
			FBA: ['ONT8'],
			'pizza flavor': ['mozzarella'],
		},
		_object: '/shipment',
		id: 114900,
		name: 'TEST Multiparty',
		booking: {
			_object: '/api/refs/object',
			ref_type: '/booking',
			link: 'https://api.flexport.com/bookings/9417',
			id: 9417,
		},
		transportation_mode: 'ocean',
		freight_type: 'door_to_port',
		incoterm: 'EXW',
		calculated_weight: {
			value: 10000,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 54,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 280,
		it_number: null,
		created_date: '2017-09-20T02:37:37.685Z',
		status: 'arrival_port',
		priority: 'high',
		updated_at: '2020-04-04T03:06:22.730Z',
		archived_at: null,
		estimated_departure_date: '2018-02-11T00:00:00.000+08:00',
		actual_departure_date: '2018-02-11T00:15:00.000+08:00',
		estimated_arrival_date: '2018-02-26T00:00:00.000-08:00',
		actual_arrival_date: '2018-02-26T12:00:00.000-08:00',
		estimated_picked_up_in_full_date: '2018-01-31T12:00:00.000+08:00',
		actual_picked_up_in_full_date: '2018-02-02T12:00:00.000+08:00',
		estimated_delivered_in_full_date: '2018-03-01T12:00:00.000-08:00',
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2018-01-30',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: false,
			house_bill_number: '13123321, TEST',
			master_bill_number: 'DFFDFD',
			carrier_booking_number: null,
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=114900',
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
			{
				_object: '/company_entity',
				id: 594547,
				name: 'Thomson',
				mailing_address: {
					_object: '/address',
					street_address: '1 queen st',
					street_address2: null,
					city: 'boston',
					state: 'AL',
					country: 'United States',
					country_code: 'US',
					zip: '00000',
					unlocode: null,
					timezone: 'America/Chicago',
					ref: null,
				},
				ref: 'id-594547',
				vat_numbers: [],
			},
		],
		consignees: [
			{
				_object: '/company_entity',
				id: 556359,
				name: 'Bookings Test Consignee',
				mailing_address: {
					_object: '/address',
					street_address: '760 MARKET ST FL 8',
					street_address2: '',
					city: 'San Francisco',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: '94102-2300',
					unlocode: null,
					timezone: 'America/Los_Angeles',
					ref: 'id-324515',
				},
				ref: 'id-556359',
				vat_numbers: [],
			},
		],
		buyers: [
			{
				_object: '/company_entity',
				id: 556359,
				name: 'Bookings Test Consignee',
				mailing_address: {
					_object: '/address',
					street_address: '760 MARKET ST FL 8',
					street_address2: '',
					city: 'San Francisco',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: '94102-2300',
					unlocode: null,
					timezone: 'America/Los_Angeles',
					ref: 'id-324515',
				},
				ref: 'id-556359',
				vat_numbers: [],
			},
		],
		sellers: [
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
			{
				_object: '/company_entity',
				id: 594547,
				name: 'Thomson',
				mailing_address: {
					_object: '/address',
					street_address: '1 queen st',
					street_address2: null,
					city: 'boston',
					state: 'AL',
					country: 'United States',
					country_code: 'US',
					zip: '00000',
					unlocode: null,
					timezone: 'America/Chicago',
					ref: null,
				},
				ref: 'id-594547',
				vat_numbers: [],
			},
		],
		importers_of_record: [],
		items: [],
		legs: {
			_object: '/api/refs/collection',
			ref_type: '/shipment_leg',
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=114900',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=114900',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=114900',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=114900',
		},
		departure_date: '2018-02-11T00:15:00.000+08:00',
		arrival_date: '2018-02-26T12:00:00.000-08:00',
		picked_up_in_full_date: '2018-02-02T12:00:00.000+08:00',
		delivered_in_full_date: null,
	},
	error: null,
}
