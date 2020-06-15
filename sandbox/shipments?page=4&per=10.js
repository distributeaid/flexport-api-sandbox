module.exports = {
	_object: '/api/response',
	self: 'https://flexport-sandbox.example.com/shipments?page=4&per=10',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: 'https://flexport-sandbox.example.com/shipments?page=3&per=10',
		next: 'https://flexport-sandbox.example.com/shipments?page=5&per=10',
		total_count: 126,
		data: [
			{
				metadata: {},
				_object: '/shipment',
				id: 493350,
				name: 'PO1234, CRD FEB 21  ',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78730',
					id: 78730,
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
				pieces: 100,
				it_number: null,
				created_date: '2019-02-19T11:01:08.962Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.151Z',
				archived_at: null,
				estimated_departure_date: '2019-03-04T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-19T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-02-28',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: '',
					master_bill_number: null,
					carrier_booking_number: 'SO0831900918',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493350',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493350',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493350',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493350',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493350',
				},
				departure_date: '2019-03-04T12:00:00.000+08:00',
				arrival_date: '2019-03-19T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493352,
				name: 'PO1234, CRD FEB 21    ',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78731',
					id: 78731,
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
				pieces: 100,
				it_number: null,
				created_date: '2019-02-19T11:01:12.703Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.135Z',
				archived_at: null,
				estimated_departure_date: '2019-03-04T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-19T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-02-28',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS493352A',
					master_bill_number: null,
					carrier_booking_number: 'SO9831092830912',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493352',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493352',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493352',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493352',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493352',
				},
				departure_date: '2019-03-04T12:00:00.000+08:00',
				arrival_date: '2019-03-19T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493850,
				name: 'test shipment, PO 13579, CRD 3/15, 1x40HC',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78898',
					id: 78898,
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
				pieces: 100,
				it_number: null,
				created_date: '2019-03-08T06:40:26.198Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.122Z',
				archived_at: null,
				estimated_departure_date: '2019-03-18T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-04-02T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-03-15T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-15',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS493850A',
					master_bill_number: null,
					carrier_booking_number: 'BK1234567888',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493850',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493850',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493850',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493850',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493850',
				},
				departure_date: '2019-03-18T12:00:00.000+08:00',
				arrival_date: '2019-04-02T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-03-15T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 494543,
				name: 'ABC Shipper, PO 1331, CRD 2/28',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/79220',
					id: 79220,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 2500,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 45,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 96,
				it_number: null,
				created_date: '2019-02-21T06:11:23.277Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-06T20:31:16.246Z',
				archived_at: null,
				estimated_departure_date: '2019-03-04T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-19T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-28T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-02-28',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS494543A',
					master_bill_number: null,
					carrier_booking_number: 'BK123450',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=494543',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=494543',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=494543',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=494543',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=494543',
				},
				departure_date: '2019-03-04T12:00:00.000+08:00',
				arrival_date: '2019-03-19T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-28T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
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
				updated_at: '2020-03-04T12:29:28.555Z',
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
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=494795',
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
			{
				metadata: {},
				_object: '/shipment',
				id: 494803,
				name: 'HK to LA WH, PO 3002, CRD 3/1',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/79349',
					id: 79349,
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
				pieces: 100,
				it_number: null,
				created_date: '2019-03-11T08:30:33.097Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2019-10-20T15:08:38.200Z',
				archived_at: null,
				estimated_departure_date: '2019-03-05T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-19T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-03-01T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-01',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFCNUS494803A',
					master_bill_number: null,
					carrier_booking_number: '123456jkrfdhbjkdfb',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=494803',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=494803',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=494803',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=494803',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=494803',
				},
				departure_date: '2019-03-05T12:00:00.000+08:00',
				arrival_date: '2019-03-19T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-03-01T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 494819,
				name: 'PO 1999, CRD 3/1, 1x40HQ, to LA Warehouse',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/79355',
					id: 79355,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1500,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 45,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 100,
				it_number: null,
				created_date: '2019-03-11T08:31:57.560Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-06T20:31:16.203Z',
				archived_at: null,
				estimated_departure_date: '2019-03-05T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-19T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-03-01T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-01',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFCNUS494819A',
					master_bill_number: null,
					carrier_booking_number: 'cxvb1123',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=494819',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=494819',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=494819',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=494819',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=494819',
				},
				departure_date: '2019-03-05T12:00:00.000+08:00',
				arrival_date: '2019-03-19T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-03-01T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 497706,
				name: 'API Test AWB#123TEST',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/80348',
					id: 80348,
				},
				transportation_mode: 'ocean',
				freight_type: 'door_to_port',
				incoterm: 'DAP',
				calculated_weight: {
					value: 20000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 200,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 100,
				it_number: null,
				created_date: '2019-02-28T05:40:21.456Z',
				status: 'in_transit_to_departure_port',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.781Z',
				archived_at: null,
				estimated_departure_date: '2019-03-08T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-15T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-03-08T12:00:00.000+08:00',
				actual_picked_up_in_full_date: '2019-03-05T12:00:00.000+08:00',
				estimated_delivered_in_full_date: '2019-03-22T12:00:00.000-07:00',
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-05',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'TEST',
					master_bill_number: '331232',
					carrier_booking_number: '312312312fdfd13',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=497706',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=497706',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=497706',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=497706',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=497706',
				},
				departure_date: '2019-03-08T12:00:00.000+08:00',
				arrival_date: '2019-03-15T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-03-05T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 502163,
				name: 'API test 2 AWB#12345',
				booking: null,
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 5769,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 300,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-03-09T11:57:34.493Z',
				status: 'final_destination',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.629Z',
				archived_at: null,
				estimated_departure_date: '2019-03-01T12:00:00.000+08:00',
				actual_departure_date: '2019-03-01T12:00:00.000+08:00',
				estimated_arrival_date: '2019-03-09T12:00:00.000-08:00',
				actual_arrival_date: '2019-03-09T12:00:00.000-08:00',
				estimated_picked_up_in_full_date: '2019-02-28T12:00:00.000+08:00',
				actual_picked_up_in_full_date: '2019-02-28T12:00:00.000+08:00',
				estimated_delivered_in_full_date: '2019-03-09T12:00:00.000-08:00',
				actual_delivered_in_full_date: '2019-03-09T12:00:00.000-08:00',
				cargo_ready_date: '2019-02-26',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'HBL12345',
					master_bill_number: 'COSU1238389823',
					carrier_booking_number: 'BOOKING12345',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=502163',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=502163',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=502163',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=502163',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=502163',
				},
				departure_date: '2019-03-01T12:00:00.000+08:00',
				arrival_date: '2019-03-09T12:00:00.000-08:00',
				picked_up_in_full_date: '2019-02-28T12:00:00.000+08:00',
				delivered_in_full_date: '2019-03-09T12:00:00.000-08:00',
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 502164,
				name: 'API test 2 AWB#12345',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/81900',
					id: 81900,
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
					value: 100,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 1000,
				it_number: null,
				created_date: '2019-03-09T11:55:25.758Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.257Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-05',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=502164',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=502164',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=502164',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=502164',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=502164',
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
