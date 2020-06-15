module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/663832',
	version: 2,
	data: {
		metadata: {
			'PO #': ['2342819', '8833294'],
			'SKU #': ['2412190'],
		},
		_object: '/shipment',
		id: 663832,
		name: 'CFS-CY Flexport Demo Shipper LCL FLEX ID',
		booking: {
			_object: '/api/refs/object',
			ref_type: '/booking',
			link: 'https://api.flexport.com/bookings/165591',
			id: 165591,
		},
		transportation_mode: 'ocean',
		freight_type: 'port_to_port',
		incoterm: 'CIF',
		calculated_weight: {
			value: 110,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 60,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 300,
		it_number: null,
		created_date: '2019-11-11T05:31:49.896Z',
		status: 'seller_location',
		priority: 'standard',
		updated_at: '2020-04-13T03:28:40.115Z',
		archived_at: null,
		estimated_departure_date: '2019-11-08T12:00:00.000+08:00',
		actual_departure_date: null,
		estimated_arrival_date: '2019-11-29T12:00:00.000-08:00',
		actual_arrival_date: null,
		estimated_picked_up_in_full_date: null,
		actual_picked_up_in_full_date: null,
		estimated_delivered_in_full_date: '2020-01-06T12:00:00.000-08:00',
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2019-11-30',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: true,
			house_bill_number: 'FLXT0000000',
			master_bill_number: 'TEST0000123',
			carrier_booking_number: null,
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=663832',
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
				id: 679468,
				name: 'Bookings Test Consignee',
				mailing_address: {
					_object: '/address',
					street_address: '760 MARKET ST FL 8',
					street_address2: '',
					city: 'SAN FRANCISCO',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: '94102-2300',
					unlocode: null,
					timezone: 'America/Los_Angeles',
					ref: null,
				},
				ref: 'id-679468',
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
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=663832',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=663832',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=663832',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=663832',
		},
		departure_date: '2019-11-08T12:00:00.000+08:00',
		arrival_date: '2019-11-29T12:00:00.000-08:00',
		picked_up_in_full_date: null,
		delivered_in_full_date: null,
	},
	error: null,
}
