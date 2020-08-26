module.exports = {
	_object: '/api/response',
	self: 'https://flexport-sandbox.example.com/shipments?page=10&per=10',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: 'https://flexport-sandbox.example.com/shipments?page=9&per=10',
		next: 'https://flexport-sandbox.example.com/shipments?page=11&per=10',
		total_count: 126,
		data: [
			{
				metadata: {},
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
				updated_at: '2020-03-04T12:29:26.748Z',
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
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=663832',
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
			{
				metadata: {},
				_object: '/shipment',
				id: 670593,
				name: 'Testing demo',
				booking: null,
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 0,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 0,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-11-19T03:25:56.130Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:26.532Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-11-20',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'TEST',
					master_bill_number: null,
					carrier_booking_number: null,
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=670593',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=670593',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=670593',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=670593',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=670593',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 678697,
				name: 'Ron-first-shipment - 985!',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/174570',
					id: 174570,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 200,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 20,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 1,
				it_number: null,
				created_date: '2019-11-29T03:19:34.194Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-06T08:21:46.085Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-11-29',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFCNUS678697A',
					master_bill_number: null,
					carrier_booking_number: 'FDSFSFSDSD',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=678697',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=678697',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=678697',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=678697',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=678697',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 680833,
				name: 'test crd',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/176049',
					id: 176049,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 2,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 4,
				it_number: null,
				created_date: '2019-12-19T09:37:34.353Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-06T20:31:18.131Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-14',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=680833',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=680833',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=680833',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=680833',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=680833',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 680836,
				name: 'lcltest1',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/176053',
					id: 176053,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 1,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 1,
				it_number: null,
				created_date: '2020-01-02T09:03:30.052Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-02-20T08:54:25.555Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-13',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: true,
					house_bill_number: '',
					master_bill_number: null,
					carrier_booking_number: null,
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=680836',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=680836',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=680836',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=680836',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=680836',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 683210,
				name: 'sky test workflow68',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/177415',
					id: 177415,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 2,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 4,
				it_number: null,
				created_date: '2019-12-25T06:50:33.746Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-06T20:31:18.423Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-25',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=683210',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=683210',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=683210',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=683210',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=683210',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 685551,
				name: 'Ron-Quote_2 ',
				booking: null,
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 12,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 10.005,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 15,
				it_number: null,
				created_date: '2019-12-17T14:24:08.782Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-25T15:26:02.334Z',
				archived_at: null,
				estimated_departure_date: '2020-01-03T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2020-01-23T12:00:00.000-08:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-12-23T04:00:00.000Z',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-17',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFCNUS685551A',
					master_bill_number: null,
					carrier_booking_number: 'fsdfsdfds',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=685551',
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
							ref: null,
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=685551',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=685551',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=685551',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=685551',
				},
				departure_date: '2020-01-03T12:00:00.000+08:00',
				arrival_date: '2020-01-23T12:00:00.000-08:00',
				picked_up_in_full_date: '2019-12-23T04:00:00.000Z',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 693798,
				name: 'PO123 Urgent product launch shipment LA',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184199',
					id: 184199,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 20000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 28,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 300,
				it_number: null,
				created_date: '2019-12-18T07:28:47.699Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-02T07:33:25.224Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-09',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFCNUS693798A',
					master_bill_number: null,
					carrier_booking_number: 'FSDSDFSDF',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=693798',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=693798',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=693798',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=693798',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=693798',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 693814,
				name: 'Collaboration Testing!!17',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184219',
					id: 184219,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 100,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 10,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 10,
				it_number: null,
				created_date: '2019-12-31T21:53:19.200Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-25T03:38:34.408Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-25',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=693814',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=693814',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=693814',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=693814',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=693814',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 693824,
				name: 'PO123 Collaboration shipment',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184225',
					id: 184225,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 20000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 28,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 300,
				it_number: null,
				created_date: '2019-12-19T09:49:22.545Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-06T20:31:18.498Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-26',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=693824',
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				buyers: [],
				sellers: [],
				importers_of_record: [
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
							ref: null,
						},
						ref: 'id-556359',
						vat_numbers: [],
					},
				],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=693824',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=693824',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=693824',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=693824',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
		],
	},
	error: null,
}