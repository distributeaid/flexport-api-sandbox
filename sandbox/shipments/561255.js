module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/561255',
	version: 2,
	data: {
		metadata: {
			'PO #': ['123'],
		},
		_object: '/shipment',
		id: 561255,
		name: 'Demo Booking - SO Release 1',
		booking: {
			_object: '/api/refs/object',
			ref_type: '/booking',
			link: 'https://api.flexport.com/bookings/108230',
			id: 108230,
		},
		transportation_mode: 'ocean',
		freight_type: 'port_to_door',
		incoterm: 'FOB',
		calculated_weight: {
			value: 4120,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 33,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 100,
		it_number: null,
		created_date: '2019-07-17T01:53:26.251Z',
		status: 'in_transit_to_departure_port',
		priority: 'high',
		updated_at: '2020-04-16T05:21:07.331Z',
		archived_at: null,
		estimated_departure_date: '2019-07-07T12:00:00.000+08:00',
		actual_departure_date: null,
		estimated_arrival_date: '2019-08-06T12:00:00.000-04:00',
		actual_arrival_date: null,
		estimated_picked_up_in_full_date: '2019-07-03T12:00:00.000+08:00',
		actual_picked_up_in_full_date: '2019-07-03T07:00:00.000+08:00',
		estimated_delivered_in_full_date: '2019-08-12T12:00:00.000-04:00',
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2019-06-27',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: false,
			house_bill_number: 'FDFS',
			master_bill_number: null,
			carrier_booking_number: 'BK159001',
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=561255',
			},
		},
		shippers: [
			{
				_object: '/company_entity',
				id: 740419,
				name: 'Saigon Thread',
				mailing_address: {
					_object: '/address',
					street_address: '1188 Mission St',
					street_address2: '',
					city: 'San Francisco',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: '94102',
					unlocode: null,
					timezone: 'America/Los_Angeles',
					ref: null,
				},
				ref: 'id-740419',
				vat_numbers: [],
			},
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
		buyers: [],
		sellers: [],
		importers_of_record: [],
		items: [],
		legs: {
			_object: '/api/refs/collection',
			ref_type: '/shipment_leg',
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=561255',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=561255',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=561255',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=561255',
		},
		departure_date: '2019-07-07T12:00:00.000+08:00',
		arrival_date: '2019-08-06T12:00:00.000-04:00',
		picked_up_in_full_date: '2019-07-03T07:00:00.000+08:00',
		delivered_in_full_date: null,
	},
	error: null,
}