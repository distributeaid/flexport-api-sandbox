module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/bookings/220095',
	version: 2,
	data: {
		metadata: {},
		_object: '/booking',
		id: 220095,
		name: 'Test lw2',
		flex_id: 'FLEX-752834',
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/752834',
			id: 752834,
		},
		status: 'booked',
		shipper_entity: {
			_object: '/company_entity',
			id: 629335,
			name: 'Flexport Demo Trading Company',
			mailing_address: {
				_object: '/address',
				street_address: '852 Damalu Street, XYZ Industrial Park',
				street_address2: null,
				city: 'Dongguan',
				state: 'Guangdong',
				country: 'China',
				country_code: 'CN',
				zip: null,
				unlocode: null,
				timezone: 'Asia/Chongqing',
				ref: null,
			},
			ref: 'id-629335',
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
		notify_party:
			'FLEXPORT INTERNATIONAL LLC\n760 MARKET STREET, FLOOR 8\nSAN FRANCISCO, CA 94102, USA\nARRIVALNOTICE@FLEXPORT.COM',
		transportation_mode: 'air',
		ocean_booking: null,
		air_booking: {
			_object: '/air/booking',
			incoterm: 'FOB',
			wants_pickup_service: false,
			wants_delivery_service: false,
			origin_port: {
				_object: '/place',
				name: 'SZX - Shenzhen - China',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'Shenzhen',
					state: null,
					country: 'China',
					country_code: 'CN',
					zip: null,
					unlocode: 'CNSZX',
					timezone: 'Asia/Shanghai',
					ref: 'id-39036',
				},
				details: [
					{
						_object: '/air/port',
						port_code: null,
						iata_code: 'SZX',
						icao_code: 'ZGSZ',
					},
					{
						_object: '/trucking/port',
						port_code: null,
					},
				],
			},
			destination_port: {
				_object: '/place',
				name: 'SFO - San Francisco - CA',
				address: {
					_object: '/address',
					street_address: null,
					street_address2: null,
					city: 'San Francisco',
					state: 'CA',
					country: 'United States',
					country_code: 'US',
					zip: '94128',
					unlocode: null,
					timezone: 'America/Los_Angeles',
					ref: 'id-41677',
				},
				details: [
					{
						_object: '/air/port',
						port_code: '2801',
						iata_code: 'SFO',
						icao_code: 'KSFO',
					},
					{
						_object: '/trucking/port',
						port_code: '2801',
					},
				],
			},
			product_descriptions: [
				{
					_object: '/bookings/product_description',
					description: 'Stuff toys bear',
					description_for_export_customs: '熊',
					description_for_export_customs_locale: 'zh_CN',
					hs_code: {
						_object: '/hs_code',
						description:
							': Tricycles, scooters, pedal cars and similar wheeled toys; dollsʼ carriages; dolls, other toys; reduced-scale (“scaleˮ) models and similar recreational models, working or not; puzzles of all kinds; parts and accessories thereof',
						code: '9503.00',
						country_code: 'US',
					},
				},
			],
		},
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
		cargo_ready_date: '2020-03-31',
		destination_address: null,
		delivery_date: null,
		wants_export_customs_service: false,
		cargo: {
			_object: '/cargo',
			volume: {
				value: 2.7,
				unit: 'cbm',
				_object: '/quantity/volume',
			},
			weight: {
				value: 500,
				unit: 'kg',
				_object: '/quantity/weight',
			},
			marks_and_numbers: null,
			shipping_units: [
				{
					_object: '/shipping_unit',
					name: 'Package 1',
					volume: {
						value: 0.027,
						unit: 'cbm',
						_object: '/quantity/volume',
					},
					weight: {
						value: 5,
						unit: 'kg',
						_object: '/quantity/weight',
					},
					height: {
						value: 30,
						unit: 'cm',
						_object: '/quantity/length',
					},
					length: {
						value: 30,
						unit: 'cm',
						_object: '/quantity/length',
					},
					width: {
						value: 30,
						unit: 'cm',
						_object: '/quantity/length',
					},
					count: 100,
					atomic_count: 100,
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
			link: 'https://api.flexport.com/booking_line_items?f.booking.id=220095',
		},
		created_at: '2020-03-24T02:13:09.299Z',
	},
	error: null,
}
