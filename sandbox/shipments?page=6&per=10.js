module.exports = {
	_object: '/api/response',
	self: 'https://flexport-sandbox.example.com/shipments?page=6&per=10',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: 'https://flexport-sandbox.example.com/shipments?page=5&per=10',
		next: 'https://flexport-sandbox.example.com/shipments?page=7&per=10',
		total_count: 126,
		data: [
			{
				metadata: {},
				_object: '/shipment',
				id: 509792,
				name: 'S. China Catchment Area Test',
				booking: null,
				transportation_mode: 'air',
				freight_type: 'door_to_door',
				incoterm: 'EXW',
				calculated_weight: {
					value: 3000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 1,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: null,
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-02-26T19:47:37.799Z',
				archived_at: null,
				estimated_departure_date: '2020-02-27T22:50:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2020-02-27T22:30:00.000-08:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-03-31T16:00:00.000Z',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: '2019-04-05T07:00:00.000Z',
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-04-01',
				air_shipment: {
					_object: '/air/shipment',
					house_airway_bill: 'TEST123',
					master_airway_bill: '160-18366445',
					chargeable_weight: {
						value: 3000,
						unit: 'kg',
						_object: '/quantity/weight',
					},
					chargeable_volume: {
						value: 1,
						unit: 'cbm',
						_object: '/quantity/volume',
					},
				},
				ocean_shipment: null,
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=509792',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=509792',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=509792',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=509792',
				},
				departure_date: '2020-02-27T22:50:00.000+08:00',
				arrival_date: '2020-02-27T22:30:00.000-08:00',
				picked_up_in_full_date: '2019-03-31T16:00:00.000Z',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 509913,
				name: 'DEMO DT',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/84856',
					id: 84856,
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
				created_date: '2019-03-25T06:35:16.298Z',
				status: 'departure_port',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.874Z',
				archived_at: null,
				estimated_departure_date: '2019-04-04T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-04-18T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-03-29T12:00:00.000+08:00',
				actual_picked_up_in_full_date: '2019-03-29T12:00:00.000+08:00',
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-28',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS509913A',
					master_bill_number: null,
					carrier_booking_number: 'TESTBOOKING12345',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=509913',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=509913',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=509913',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=509913',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=509913',
				},
				departure_date: '2019-04-04T12:00:00.000+08:00',
				arrival_date: '2019-04-18T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-03-29T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 519012,
				name: 'OFO demo 1, test',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/88394',
					id: 88394,
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
				created_date: '2019-04-10T06:38:01.983Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.654Z',
				archived_at: null,
				estimated_departure_date: '2019-04-18T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-04-27T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-04-11T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-04-11',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS519012A',
					master_bill_number: null,
					carrier_booking_number: 'FASFSDAFDFSDFS',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=519012',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=519012',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=519012',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=519012',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=519012',
				},
				departure_date: '2019-04-18T12:00:00.000+08:00',
				arrival_date: '2019-04-27T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-04-11T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 519013,
				name: 'OFO demo 2',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/88397',
					id: 88397,
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
				created_date: '2019-04-10T06:38:33.316Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.844Z',
				archived_at: null,
				estimated_departure_date: '2019-04-18T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-04-26T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-04-10T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-04-11',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS519013A',
					master_bill_number: null,
					carrier_booking_number: 'fsfsdsdsdfds',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=519013',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=519013',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=519013',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=519013',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=519013',
				},
				departure_date: '2019-04-18T12:00:00.000+08:00',
				arrival_date: '2019-04-26T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-04-10T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 523493,
				name: 'OFO 3   ',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/90608',
					id: 90608,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1100,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 33,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 110,
				it_number: null,
				created_date: '2019-04-17T06:51:14.788Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.650Z',
				archived_at: null,
				estimated_departure_date: '2019-04-24T12:00:00.000+08:00',
				actual_departure_date: '2019-04-24T12:00:00.000+08:00',
				estimated_arrival_date: '2019-05-02T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-04-23T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: '2019-07-05T12:00:00.000-07:00',
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-31',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS523493A',
					master_bill_number: 'FSFEW',
					carrier_booking_number: 'KHUGHUIGUIU',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=523493',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=523493',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=523493',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=523493',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=523493',
				},
				departure_date: '2019-04-24T12:00:00.000+08:00',
				arrival_date: '2019-05-02T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-04-23T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 527638,
				name: 'Demo with Hilltop',
				booking: null,
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 2200000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 4840,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-04-24T02:34:24.367Z',
				status: 'in_transit_to_arrival_port',
				priority: 'standard',
				updated_at: '2020-01-23T22:59:03.946Z',
				archived_at: null,
				estimated_departure_date: '2019-05-01T12:00:00.000+08:00',
				actual_departure_date: '2019-05-01T12:00:00.000+08:00',
				estimated_arrival_date: '2019-05-24T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-04-26T12:00:00.000+08:00',
				actual_picked_up_in_full_date: '2019-04-26T12:00:00.000+08:00',
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-04-24',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS527638A',
					master_bill_number: 'FSAFDSFD',
					carrier_booking_number: 's923840yu',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=527638',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=527638',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=527638',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=527638',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=527638',
				},
				departure_date: '2019-05-01T12:00:00.000+08:00',
				arrival_date: '2019-05-24T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-04-26T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 534738,
				name: 'try booking air',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/95948',
					id: 95948,
				},
				transportation_mode: 'air',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 111,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 11,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-08-08T08:30:06.956Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-23T07:49:17.078Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-08-05',
				air_shipment: {
					_object: '/air/shipment',
					house_airway_bill: '',
					master_airway_bill: null,
					chargeable_weight: {
						value: 1833.33,
						unit: 'kg',
						_object: '/quantity/weight',
					},
					chargeable_volume: {
						value: 11,
						unit: 'cbm',
						_object: '/quantity/volume',
					},
				},
				ocean_shipment: null,
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=534738',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=534738',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=534738',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=534738',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 542526,
				name: 'TEST COLLAB ',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/99461',
					id: 99461,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 122,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 20.008,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 122,
				it_number: null,
				created_date: '2019-08-28T07:30:43.475Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.910Z',
				archived_at: null,
				estimated_departure_date: '2019-09-01T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-09-25T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-08-29T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-05-25',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS542526A',
					master_bill_number: null,
					carrier_booking_number: 'TEST12212',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=542526',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=542526',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=542526',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=542526',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=542526',
				},
				departure_date: '2019-09-01T12:00:00.000+08:00',
				arrival_date: '2019-09-25T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-08-29T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 548651,
				name: 'MAGIC LINK TEST   ',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/102144',
					id: 102144,
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
					value: 30,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 100,
				it_number: null,
				created_date: '2019-05-30T01:30:54.953Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.032Z',
				archived_at: null,
				estimated_departure_date: '2019-06-22T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-07-31T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-06-20T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: '2019-08-08T12:00:00.000-07:00',
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-06-15',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS548651A',
					master_bill_number: null,
					carrier_booking_number: 'fwasdfewfewfew',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=548651',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=548651',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=548651',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=548651',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=548651',
				},
				departure_date: '2019-06-22T12:00:00.000+08:00',
				arrival_date: '2019-07-31T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-06-20T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
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
				updated_at: '2020-03-06T23:44:36.676Z',
				archived_at: null,
				estimated_departure_date: '2019-07-07T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-08-06T12:00:00.000-04:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-07-03T12:00:00.000+08:00',
				actual_picked_up_in_full_date: '2019-07-03T07:00:00.000+08:00',
				estimated_delivered_in_full_date: '2019-08-12T16:00:00.000Z',
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
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=561255',
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
		],
	},
	error: null,
}