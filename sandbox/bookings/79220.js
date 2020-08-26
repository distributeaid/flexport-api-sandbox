module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/bookings/79220',
	version: 2,
	data: {
		metadata: {},
		_object: '/booking',
		id: 79220,
		name: 'ABC Shipper, PO 1331, CRD 2/28',
		flex_id: 'FLEX-494543',
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/494543',
			id: 494543,
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
				twenty_ft: null,
				forty_ft: null,
				forty_ft_hc: 1,
				forty_five_ft_hc: null,
			},
			incoterm: 'FOB',
			wants_pickup_service: false,
			wants_delivery_service: true,
			origin_port: {
				_object: '/place',
				name: 'Hong Kong, Hong Kong',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Hong Kong',
					state: null,
					country: 'Hong Kong',
					country_code: 'HK',
					zip: null,
					unlocode: 'HKHKG',
					timezone: 'Asia/Hong_Kong',
					ref: 'id-38384',
				},
				details: [
					{
						_object: '/trucking/port',
						port_code: '58201',
					},
					{
						_object: '/ocean/port',
						port_code: '58201',
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
			street_address:
				"GLP Logistics Park, Phase II, Block 9, Mingzhu 3rd Rd and Yong'an North 2nd St",
			street_address2: '深圳市盐田区永安路北一街盐田港普洛斯物流园二期9号仓库',
			city: 'Shenzhen',
			state: 'Guangdong',
			country: 'China',
			country_code: 'CN',
			zip: null,
			unlocode: null,
			timezone: 'Asia/Shanghai',
			ref: 'id-160816',
		},
		cargo_ready_date: '2019-02-28',
		destination_address: {
			_object: '/address',
			street_address: '940 Avila Street',
			street_address2: null,
			city: 'Los Angeles',
			state: 'CA',
			country: 'United States',
			country_code: 'US',
			zip: '90012',
			unlocode: null,
			timezone: 'America/Los_Angeles',
			ref: 'id-185321',
		},
		delivery_date: null,
		wants_export_customs_service: false,
		cargo: {
			_object: '/cargo',
			volume: {
				value: 45,
				unit: 'cbm',
				_object: '/quantity/volume',
			},
			weight: {
				value: 2500,
				unit: 'kg',
				_object: '/quantity/weight',
			},
			marks_and_numbers: 'N/A\nTEST',
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
					count: 12,
					atomic_count: 96,
					unit_type: 'pallet',
				},
			],
			contains_hazmat: false,
			contains_magnets: false,
			contains_other_dangerous_goods: false,
			contains_li_ion: false,
			contains_non_li_ion_battery: false,
			lithium_batteries_packing_types: [],
		},
		special_instructions: 'TEST booking',
		booking_line_items: {
			_object: '/api/refs/collection',
			ref_type: '/purchase_orders/booking_line_item',
			link: 'https://api.flexport.com/booking_line_items?f.booking.id=79220',
		},
		created_at: '2019-02-21T06:01:13.279Z',
	},
	error: null,
}