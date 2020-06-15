module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/bookings/165591',
	version: 2,
	data: {
		metadata: {
			'PO #': ['2342819', '8833294'],
			'SKU #': ['2412190'],
		},
		_object: '/booking',
		id: 165591,
		name: 'CFS-CY Flexport Demo Shipper LCL FLEX ID',
		flex_id: 'FLEX-663832',
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/663832',
			id: 663832,
		},
		status: 'shipment',
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
		notify_party: null,
		transportation_mode: 'ocean',
		ocean_booking: {
			_object: '/ocean/booking',
			is_lcl: true,
			container_counts: {
				_object: '/container_counts',
				twenty_ft: null,
				forty_ft: null,
				forty_ft_hc: null,
				forty_five_ft_hc: null,
			},
			incoterm: 'FOB',
			wants_pickup_service: false,
			wants_delivery_service: false,
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
				name: 'Oakland, CA',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Oakland',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: null,
					unlocode: 'USOAK',
					timezone: 'America/Los_Angeles',
					ref: 'id-41584',
				},
				details: [
					{
						_object: '/ocean/railport',
						port_code: '2811',
					},
					{
						_object: '/trucking/port',
						port_code: '2811',
					},
					{
						_object: '/ocean/port',
						port_code: '2811',
					},
				],
			},
			product_descriptions: [
				{
					_object: '/bookings/product_description',
					description: 'Canvas Bag',
					description_for_export_customs: '产品货袋',
					description_for_export_customs_locale: 'zh_CN',
					hs_code: {
						_object: '/hs_code',
						description:
							'Sacks and bags, of a kind used for the packing of goods:: Of cotton (369)',
						code: '6305.20',
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
			street_address2: '',
			city: 'Shenzhen',
			state: 'Guangdong',
			country: 'China',
			country_code: 'CN',
			zip: null,
			unlocode: null,
			timezone: 'Asia/Shanghai',
			ref: 'id-162815',
		},
		cargo_ready_date: '2019-11-30',
		destination_address: null,
		delivery_date: '2019-11-30',
		wants_export_customs_service: false,
		cargo: {
			_object: '/cargo',
			volume: {
				value: 9.2,
				unit: 'cbm',
				_object: '/quantity/volume',
			},
			weight: {
				value: 888,
				unit: 'kg',
				_object: '/quantity/weight',
			},
			marks_and_numbers:
				'REUSABLE CANVASS SHOPPING BAGS, LOGO "SHOPPING IS LIFE, BABE"\nPO 8833294\nPO 2342819\nSKU 2412190\nBOX COUNT\nMADE IN CHINA',
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
					count: 409,
					atomic_count: 409,
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
			link: 'https://api.flexport.com/booking_line_items?f.booking.id=165591',
		},
		created_at: '2019-11-11T05:13:11.252Z',
	},
	error: null,
}
