module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/shipments/494795',
	version: 2,
	data: {
		metadata: {},
		_object: '/shipment',
		id: 494795,
		name: 'HK to LA WH, PO 3001, CRD  3/1',
		booking: {
			_object: '/api/refs/object',
			ref_type: '/booking',
			link: 'https://api.flexport.com/bookings/49159',
			id: 49159,
		},
		transportation_mode: 'ocean',
		freight_type: 'port_to_door',
		incoterm: 'FOB',
		calculated_weight: {
			value: 1000,
			unit: 'kg',
			_object: '/quantity/weight',
		},
		calculated_volume: {
			value: 50,
			unit: 'cbm',
			_object: '/quantity/volume',
		},
		pieces: 10,
		it_number: null,
		created_date: '2019-03-11T08:28:44.668Z',
		status: 'seller_location',
		priority: 'standard',
		updated_at: '2020-04-04T03:06:06.315Z',
		archived_at: null,
		estimated_departure_date: '2019-02-28T01:00:00.000+08:00',
		actual_departure_date: '2019-02-26T18:09:00.000+08:00',
		estimated_arrival_date: '2019-03-13T12:00:00.000-07:00',
		actual_arrival_date: null,
		estimated_picked_up_in_full_date: '2019-02-26T12:00:00.000+08:00',
		actual_picked_up_in_full_date: null,
		estimated_delivered_in_full_date: null,
		actual_delivered_in_full_date: null,
		cargo_ready_date: '2019-02-26',
		air_shipment: null,
		ocean_shipment: {
			_object: '/ocean/shipment',
			is_lcl: false,
			house_bill_number: 'FLXTFCNUS494795A',
			master_bill_number: 'APLU123214',
			carrier_booking_number: 'dsfgfdsggsf',
			containers: {
				_object: '/api/refs/collection',
				ref_type: '/ocean/shipment_container',
				link:
					'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=494795',
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
			link: 'https://api.flexport.com/shipment_legs?f.shipment.id=494795',
		},
		customs_entries: {
			_object: '/api/refs/collection',
			ref_type: '/customs_entry',
			link: 'https://api.flexport.com/customs_entries?f.shipment.id=494795',
		},
		commercial_invoices: {
			_object: '/api/refs/collection',
			ref_type: '/commercial_invoice',
			link: 'https://api.flexport.com/commercial_invoices?f.shipment.id=494795',
		},
		documents: {
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=494795',
		},
		departure_date: '2019-02-26T18:09:00.000+08:00',
		arrival_date: '2019-03-13T12:00:00.000-07:00',
		picked_up_in_full_date: '2019-02-26T12:00:00.000+08:00',
		delivered_in_full_date: null,
	},
	error: null,
}
