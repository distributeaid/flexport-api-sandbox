module.exports = {
	_object: '/api/response',
	self: 'https://flexport-sandbox.example.com/shipments?page=2&per=10',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: 'https://flexport-sandbox.example.com/shipments?page=1&per=10',
		next: 'https://flexport-sandbox.example.com/shipments?page=3&per=10',
		total_count: 126,
		data: [
			{
				metadata: {},
				_object: '/shipment',
				id: 476206,
				name: 'Dummy Booking for PRE booking tool NGB',
				booking: null,
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 10,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-01-10T02:21:26.571Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2019-10-28T07:45:22.466Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-01-25',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=476206',
					},
				},
				shippers: [],
				consignees: [],
				buyers: [],
				sellers: [],
				importers_of_record: [],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=476206',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=476206',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=476206',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=476206',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 476207,
				name: 'Dummy Booking for PRE booking tool SHA',
				booking: null,
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 10,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-01-10T02:21:53.054Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2019-10-28T07:45:22.521Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-01-25',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=476207',
					},
				},
				shippers: [],
				consignees: [],
				buyers: [],
				sellers: [],
				importers_of_record: [],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=476207',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=476207',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=476207',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=476207',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 490736,
				name: '1234',
				booking: null,
				transportation_mode: 'air',
				freight_type: 'door_to_door',
				incoterm: 'EXW',
				calculated_weight: {
					value: 2000,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 45,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: null,
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-05T07:15:19.097Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: null,
				air_shipment: {
					_object: '/air/shipment',
					house_airway_bill: '',
					master_airway_bill: null,
					chargeable_weight: {
						value: 7500,
						unit: 'kg',
						_object: '/quantity/weight',
					},
					chargeable_volume: {
						value: 45,
						unit: 'cbm',
						_object: '/quantity/volume',
					},
				},
				ocean_shipment: null,
				shippers: [
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
				consignees: [
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
				buyers: [],
				sellers: [],
				importers_of_record: [],
				items: [],
				legs: {
					_object: '/api/refs/collection',
					ref_type: '/shipment_leg',
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=490736',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=490736',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=490736',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=490736',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 492680,
				name: 'TEST VGM/HBL',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78305',
					id: 78305,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1299,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 65,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 100,
				it_number: null,
				created_date: '2019-08-07T06:04:36.009Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.376Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-02-28',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS492680A',
					master_bill_number: null,
					carrier_booking_number: 'SO6621312',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=492680',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=492680',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=492680',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=492680',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=492680',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493050,
				name: 'VGM/HBL Demo 1',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78500',
					id: 78500,
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
					value: 35,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 100,
				it_number: null,
				created_date: '2019-02-19T00:56:17.816Z',
				status: 'in_transit_to_arrival_port',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.272Z',
				archived_at: null,
				estimated_departure_date: '2019-03-14T12:00:00.000+08:00',
				actual_departure_date: '2019-03-14T12:00:00.000+08:00',
				estimated_arrival_date: '2019-03-30T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				actual_picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-08',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS493050A',
					master_bill_number: null,
					carrier_booking_number: null,
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493050',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493050',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493050',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493050',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493050',
				},
				departure_date: '2019-03-14T12:00:00.000+08:00',
				arrival_date: '2019-03-30T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493051,
				name: 'VGM/HBL Demo 2',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78501',
					id: 78501,
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
				created_date: '2019-02-19T00:56:39.812Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:27.949Z',
				archived_at: null,
				estimated_departure_date: '2019-03-14T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-30T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-08',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS493051A',
					master_bill_number: null,
					carrier_booking_number: null,
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493051',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493051',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493051',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493051',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493051',
				},
				departure_date: '2019-03-14T12:00:00.000+08:00',
				arrival_date: '2019-03-30T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493052,
				name: 'VGM/HBL Demo 3',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78502',
					id: 78502,
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
				created_date: '2019-02-19T00:56:43.842Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.548Z',
				archived_at: null,
				estimated_departure_date: '2019-03-14T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-30T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-08',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS493052A',
					master_bill_number: null,
					carrier_booking_number: 'fr3231jnrem',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493052',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493052',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493052',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493052',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493052',
				},
				departure_date: '2019-03-14T12:00:00.000+08:00',
				arrival_date: '2019-03-30T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493053,
				name: 'VGM/HBL Demo 4',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78503',
					id: 78503,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 1999.99,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 79.992,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 1660,
				it_number: null,
				created_date: '2019-02-19T00:56:47.759Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.728Z',
				archived_at: null,
				estimated_departure_date: '2019-03-14T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-30T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-03-08',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS493053A',
					master_bill_number: null,
					carrier_booking_number: 'SONO109838090',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493053',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493053',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493053',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493053',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493053',
				},
				departure_date: '2019-03-14T12:00:00.000+08:00',
				arrival_date: '2019-03-30T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493142,
				name: 'HBL VGM',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78566',
					id: 78566,
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
				created_date: '2019-02-19T04:58:10.959Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.226Z',
				archived_at: null,
				estimated_departure_date: '2019-03-04T12:00:00.000+08:00',
				actual_departure_date: null,
				estimated_arrival_date: '2019-03-19T12:00:00.000-07:00',
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: '2019-02-26T12:00:00.000+08:00',
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-02-27',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFHKUS493142A',
					master_bill_number: null,
					carrier_booking_number: '343rfdadmfdslfdjs',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493142',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493142',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493142',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493142',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493142',
				},
				departure_date: '2019-03-04T12:00:00.000+08:00',
				arrival_date: '2019-03-19T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-26T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 493143,
				name: 'HBL 3 fdfd',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/78567',
					id: 78567,
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
				created_date: '2019-02-19T04:57:52.227Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:28.487Z',
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
					house_bill_number: 'FLXTFHKUS493143A',
					master_bill_number: null,
					carrier_booking_number: 'fdalsajdlsk93488034',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=493143',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=493143',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=493143',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=493143',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=493143',
				},
				departure_date: '2019-03-04T12:00:00.000+08:00',
				arrival_date: '2019-03-19T12:00:00.000-07:00',
				picked_up_in_full_date: '2019-02-27T12:00:00.000+08:00',
				delivered_in_full_date: null,
			},
		],
	},
	error: null,
}
