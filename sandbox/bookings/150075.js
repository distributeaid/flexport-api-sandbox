module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/bookings/150075',
	version: 2,
	data: {
		metadata: {},
		_object: '/booking',
		id: 150075,
		name: 'test',
		flex_id: 'FLEX-638247',
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/638247',
			id: 638247,
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
				forty_ft: 1,
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
					description: 'Stuff toys bear',
					description_for_export_customs: '玩具熊',
					description_for_export_customs_locale: 'zh_CN',
					hs_code: {
						_object: '/hs_code',
						description:
							': Ethyl alcohol (provided for in subheadings 2207.10.60 and 2207.20) or any mixture containing such ethyl alcohol (provided for in heading 2710 or 3824) if such ethyl alcohol or mixture is to be used as a fuel or in producing a mixture of gasoline and alcohol, a mixture of a special fuel and alcohol, or any other mixture to be used as fuel (including motor fuel provided for in subheading 2710.12.15, 2710.19.16, 2710.19.24 or 2710.20.15), or is suitable for any such uses',
						code: '9901.00',
						country_code: 'US',
					},
				},
			],
		},
		air_booking: null,
		trucking_booking: null,
		origin_address: {
			_object: '/address',
			street_address: '123 Table Street, TT Industrial Park',
			street_address2: null,
			city: 'Shenzhen',
			state: 'Guangdong',
			country: 'China',
			country_code: 'CN',
			zip: null,
			unlocode: null,
			timezone: 'Asia/Chongqing',
			ref: 'id-155975',
		},
		cargo_ready_date: '2019-10-10',
		destination_address: {
			_object: '/address',
			street_address: '123 Main St, Los Angeles',
			street_address2: null,
			city: 'Los Angeles',
			state: 'CA',
			country: 'United States',
			country_code: 'US',
			zip: '90007',
			unlocode: null,
			timezone: 'America/Los_Angeles',
			ref: 'id-112580',
		},
		delivery_date: null,
		wants_export_customs_service: false,
		cargo: {
			_object: '/cargo',
			volume: {
				value: 10,
				unit: 'cbm',
				_object: '/quantity/volume',
			},
			weight: {
				value: 100,
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
					count: 10,
					atomic_count: 10,
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
		special_instructions: null,
		booking_line_items: {
			_object: '/api/refs/collection',
			ref_type: '/purchase_orders/booking_line_item',
			link: 'https://api.flexport.com/booking_line_items?f.booking.id=150075',
		},
		created_at: '2019-10-10T07:24:16.746Z',
	},
	error: null,
}
