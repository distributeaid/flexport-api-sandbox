module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/bookings/84271',
	version: 2,
	data: {
		metadata: {},
		_object: '/booking',
		id: 84271,
		name: 'TEST 4 CRD 3/21',
		flex_id: 'FLEX-508281',
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/508281',
			id: 508281,
		},
		status: 'booked',
		shipper_entity: {
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
		consignee_entity: {
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
		notify_party: null,
		transportation_mode: 'ocean',
		ocean_booking: {
			_object: '/ocean/booking',
			is_lcl: false,
			container_counts: {
				_object: '/container_counts',
				twenty_ft: 1,
				forty_ft: null,
				forty_ft_hc: null,
				forty_five_ft_hc: null,
			},
			incoterm: 'FOB',
			wants_pickup_service: false,
			wants_delivery_service: true,
			origin_port: {
				_object: '/place',
				name: 'Yantian, China',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Yantian',
					state: null,
					country: 'China',
					country_code: 'CN',
					zip: null,
					unlocode: 'CNYTN',
					timezone: 'Asia/Hong_Kong',
					ref: 'id-38385',
				},
				details: [
					{
						_object: '/trucking/port',
						port_code: '57078',
					},
					{
						_object: '/ocean/port',
						port_code: '57078',
					},
				],
			},
			destination_port: {
				_object: '/place',
				name: 'Los Angeles, CA',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Los Angeles',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: null,
					unlocode: 'USLAX',
					timezone: 'America/Los_Angeles',
					ref: 'id-41538',
				},
				details: [
					{
						_object: '/ocean/railport',
						port_code: '2704',
					},
					{
						_object: '/trucking/port',
						port_code: '2704',
					},
					{
						_object: '/ocean/port',
						port_code: '2704',
					},
				],
			},
			product_descriptions: [
				{
					_object: '/bookings/product_description',
					description: 'Shoes',
					description_for_export_customs: '高跟鞋',
					description_for_export_customs_locale: 'zh_CN',
					hs_code: {
						_object: '/hs_code',
						description: ': Cocoa beans, whole or broken, raw or roasted',
						code: '1801.00',
						country_code: 'US',
					},
				},
			],
		},
		air_booking: null,
		trucking_booking: null,
		origin_address: {
			_object: '/address',
			street_address: '3435 Shenzhen Rd.',
			street_address2: '3425深圳路，深圳，广东省',
			city: 'Shenzhen',
			state: 'Guangdong',
			country: 'China',
			country_code: 'CN',
			zip: null,
			unlocode: null,
			timezone: 'Asia/Shanghai',
			ref: 'id-162815',
		},
		cargo_ready_date: '2019-03-21',
		destination_address: {
			_object: '/address',
			street_address: '1420 N McKinley Avenue',
			street_address2: null,
			city: 'Los Angeles',
			state: 'CA',
			country: 'United States',
			country_code: 'US',
			zip: '90059',
			unlocode: null,
			timezone: 'America/Los_Angeles',
			ref: 'id-227012',
		},
		delivery_date: null,
		wants_export_customs_service: false,
		cargo: {
			_object: '/cargo',
			volume: {
				value: 44,
				unit: 'cbm',
				_object: '/quantity/volume',
			},
			weight: {
				value: 1111,
				unit: 'kg',
				_object: '/quantity/weight',
			},
			marks_and_numbers: null,
			shipping_units: [
				{
					_object: '/shipping_unit',
					name: null,
					volume: {
						value: 0,
						unit: 'cbm',
						_object: '/quantity/volume',
					},
					weight: {
						value: 0,
						unit: 'kg',
						_object: '/quantity/weight',
					},
					height: {
						value: 0,
						unit: 'cm',
						_object: '/quantity/length',
					},
					length: {
						value: 0,
						unit: 'cm',
						_object: '/quantity/length',
					},
					width: {
						value: 0,
						unit: 'cm',
						_object: '/quantity/length',
					},
					count: 11,
					atomic_count: 11,
					unit_type: 'carton',
				},
			],
			contains_hazmat: false,
			contains_magnets: false,
			contains_other_dangerous_goods: false,
			contains_li_ion: false,
			contains_non_li_ion_battery: false,
			lithium_batteries_packing_types: [],
		},
		special_instructions: null,
		booking_line_items: {
			_object: '/api/refs/collection',
			ref_type: '/purchase_orders/booking_line_item',
			link: 'https://api.flexport.com/booking_line_items?f.booking.id=84271',
		},
		created_at: '2019-03-21T03:29:36.569Z',
	},
	error: null,
}