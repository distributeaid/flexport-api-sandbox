module.exports = {
	_object: '/api/response',
	self: 'https://flexport-sandbox.example.com/shipments?page=11&per=10',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: 'https://flexport-sandbox.example.com/shipments?page=10&per=10',
		next: 'https://flexport-sandbox.example.com/shipments?page=12&per=10',
		total_count: 126,
		data: [
			{
				metadata: {},
				_object: '/shipment',
				id: 693835,
				name: 'Test shipment - B1!!!6',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184232',
					id: 184232,
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
				created_date: '2019-12-19T09:43:55.856Z',
				status: 'seller_location',
				priority: 'high',
				updated_at: '2020-03-20T06:10:23.037Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2020-01-17',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=693835',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=693835',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=693835',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=693835',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=693835',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 693840,
				name: 'Shipper Shenzhen Factory 3',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184236',
					id: 184236,
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
				created_date: '2019-12-19T09:40:55.205Z',
				status: 'seller_location',
				priority: 'high',
				updated_at: '2020-03-20T04:44:45.811Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-24',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=693840',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=693840',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=693840',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=693840',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=693840',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 693843,
				name:
					'Shipper Tasks:  Login as demo shipper: https://core.flexport.com/clients/14820/company FLEX-ID: 693798',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184239',
					id: 184239,
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
				created_date: '2019-12-19T09:31:47.649Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-06T20:31:18.592Z',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=693843',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=693843',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=693843',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=693843',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=693843',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 693846,
				name: 'Demo Testing PO123 Collaboration Flow',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184240',
					id: 184240,
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
				created_date: '2019-12-19T09:26:46.303Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-06T20:31:18.535Z',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=693846',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=693846',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=693846',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=693846',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=693846',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 694931,
				name: 'Yao test shipment 12-1',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/184944',
					id: 184944,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_port',
				incoterm: 'FOB',
				calculated_weight: {
					value: 20,
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
				created_date: '2020-01-01T00:47:25.834Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-04T12:29:26.405Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2020-01-21',
				air_shipment: null,
				ocean_shipment: {
					_object: '/ocean/shipment',
					is_lcl: false,
					house_bill_number: 'FLXTFCNUS694931A',
					master_bill_number: null,
					carrier_booking_number: 'FDSFSFDSFD',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=694931',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=694931',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=694931',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=694931',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=694931',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 697130,
				name: 'Test shipment 12 3',
				booking: null,
				transportation_mode: 'air',
				freight_type: 'door_to_door',
				incoterm: 'EXW',
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
				created_date: null,
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-20T04:45:05.015Z',
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
						value: 0,
						unit: 'kg',
						_object: '/quantity/weight',
					},
					chargeable_volume: {
						value: 0,
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=697130',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=697130',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=697130',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=697130',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 698285,
				name: 'lcl shipment',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/187015',
					id: 187015,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 12345,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 5,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-12-24T02:39:45.194Z',
				status: 'departure_port',
				priority: 'standard',
				updated_at: '2020-01-30T22:30:02.885Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-27',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=698285',
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
						id: 746477,
						name: 'Real Client',
						mailing_address: {
							_object: '/address',
							street_address: '760 MARKET ST FL 8',
							street_address2: null,
							city: 'San Francisco',
							state: 'CA',
							country: 'United States',
							country_code: 'US',
							zip: '94102-2300',
							unlocode: null,
							timezone: 'America/Los_Angeles',
							ref: null,
						},
						ref: 'id-746477',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=698285',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=698285',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=698285',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=698285',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 699066,
				name: 'Test by Victor',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/187675',
					id: 187675,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 350,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 19.17,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 50,
				it_number: null,
				created_date: '2019-12-25T05:35:19.924Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-02-25T03:30:05.314Z',
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
					house_bill_number: 'FLXTFCNUS699066A',
					master_bill_number: null,
					carrier_booking_number: '5453213',
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=699066',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=699066',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=699066',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=699066',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=699066',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 699101,
				name: 'Test LCL by Victor 22 ',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/187699',
					id: 187699,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 100,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 100,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 200,
				it_number: null,
				created_date: '2019-12-25T06:26:32.209Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-03-19T01:04:58.943Z',
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
					is_lcl: true,
					house_bill_number: '',
					master_bill_number: null,
					carrier_booking_number: null,
					containers: {
						_object: '/api/refs/collection',
						ref_type: '/ocean/shipment_container',
						link:
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=699101',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=699101',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=699101',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=699101',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=699101',
				},
				departure_date: null,
				arrival_date: null,
				picked_up_in_full_date: null,
				delivered_in_full_date: null,
			},
			{
				metadata: {},
				_object: '/shipment',
				id: 699750,
				name: 'Victor LCL Test 20191226_1',
				booking: {
					_object: '/api/refs/object',
					ref_type: '/booking',
					link: 'https://api.flexport.com/bookings/188257',
					id: 188257,
				},
				transportation_mode: 'ocean',
				freight_type: 'port_to_door',
				incoterm: 'FOB',
				calculated_weight: {
					value: 100,
					unit: 'kg',
					_object: '/quantity/weight',
				},
				calculated_volume: {
					value: 100,
					unit: 'cbm',
					_object: '/quantity/volume',
				},
				pieces: 0,
				it_number: null,
				created_date: '2019-12-26T09:01:59.707Z',
				status: 'seller_location',
				priority: 'standard',
				updated_at: '2020-01-28T23:47:47.339Z',
				archived_at: null,
				estimated_departure_date: null,
				actual_departure_date: null,
				estimated_arrival_date: null,
				actual_arrival_date: null,
				estimated_picked_up_in_full_date: null,
				actual_picked_up_in_full_date: null,
				estimated_delivered_in_full_date: null,
				actual_delivered_in_full_date: null,
				cargo_ready_date: '2019-12-31',
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
							'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=699750',
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
					link: 'https://api.flexport.com/shipment_legs?f.shipment.id=699750',
				},
				customs_entries: {
					_object: '/api/refs/collection',
					ref_type: '/customs_entry',
					link: 'https://api.flexport.com/customs_entries?f.shipment.id=699750',
				},
				commercial_invoices: {
					_object: '/api/refs/collection',
					ref_type: '/commercial_invoice',
					link:
						'https://api.flexport.com/commercial_invoices?f.shipment.id=699750',
				},
				documents: {
					_object: '/api/refs/collection',
					ref_type: '/document',
					link: 'https://api.flexport.com/documents?f.shipment.id=699750',
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
