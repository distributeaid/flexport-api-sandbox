module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/422042',
	version: 2,
	data: {
		metadata: {},
		_object: '/shipment',
		id: 422042,
		name: 'Online SI - FCL Test , PO# 1234',
		booking: {
			_object: '/api/refs/object',
			ref_type: '/booking',
			link: 'https://api.flexport.com/bookings/22207',
			id: 22207,
		},
		transportation_mode: 'ocean',
		freight_type: 'port_to_door',
		incoterm: 'FOB',
		calculated_weight: {
			value: 18000,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 90,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 2000,
		it_number: null,
		created_date: '2018-09-27T06:09:10.551Z',
		status: 'seller_location',
		priority: 'standard',
		updated_at: '2020-04-04T03:06:14.585Z',
		archived_at: null,
		estimated_departure_date: '2018-11-15T00:00:00.000+08:00',
		actual_departure_date: null,
		estimated_arrival_date: '2018-12-01T00:00:00.000-08:00',
		actual_arrival_date: null,
		estimated_picked_up_in_full_date: '2018-10-31T12:00:00.000+08:00',
		actual_picked_up_in_full_date: null,
		estimated_delivered_in_full_date: '2018-12-10T12:00:00.000-08:00',
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2018-04-25',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: false,
			house_bill_number: 'FCNUS422042A, FCNUS422042B',
			master_bill_number: null,
			carrier_booking_number: '1234-TEST',
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=422042',
			},
		},
		shippers: [
			{
				_object: '/company_entity',
				id: 638832,
				name: 'Hiding Supplier Co. (HK)',
				mailing_address: {
					_object: '/address',
					street_address: '123 Testing Street, Shatin',
					street_address2: '',
					city: 'Hong Kong',
					state: '',
					country: 'Hong Kong',
					country_code: 'HK',
					zip: '',
					unlocode: null,
					timezone: 'Asia/Hong_Kong',
					ref: null,
				},
				ref: 'id-638832',
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
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=422042',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=422042',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=422042',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=422042',
		},
		departure_date: '2018-11-15T00:00:00.000+08:00',
		arrival_date: '2018-12-01T00:00:00.000-08:00',
		picked_up_in_full_date: '2018-10-31T12:00:00.000+08:00',
		delivered_in_full_date: null,
	},
	error: null,
}
