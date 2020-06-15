module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/bookings/159650',
	version: 2,
	data: {
		metadata: {},
		_object: '/booking',
		id: 159650,
		name: 'CRD test 2 - no origin leg',
		flex_id: 'FLEX-653678',
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/653678',
			id: 653678,
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
				forty_ft_hc: 1,
				forty_five_ft_hc: null,
			},
			incoterm: 'EXW',
			wants_pickup_service: true,
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
					description: 'TOYS',
					description_for_export_customs: null,
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
		air_booking: null,
		trucking_booking: null,
		origin_address: {
			_object: '/address',
			street_address: '123 Star Avenue, Wanchai',
			street_address2: null,
			city: 'Hong Kong',
			state: '',
			country: 'Hong Kong',
			country_code: 'HK',
			zip: '',
			unlocode: null,
			timezone: 'Asia/Hong_Kong',
			ref: 'id-90202',
		},
		cargo_ready_date: '2019-10-25',
		destination_address: {
			_object: '/address',
			street_address: '6201 Knott Avenue',
			street_address2: null,
			city: 'Buena Park',
			state: 'CA',
			country: 'United States',
			country_code: 'US',
			zip: '90620',
			unlocode: null,
			timezone: 'America/Los_Angeles',
			ref: 'id-227012',
		},
		delivery_date: null,
		wants_export_customs_service: true,
		cargo: {
			_object: '/cargo',
			volume: {
				value: 30,
				unit: 'cbm',
				_object: '/quantity/volume',
			},
			weight: {
				value: 1000,
				unit: 'kg',
				_object: '/quantity/weight',
			},
			marks_and_numbers: 'THINGS IN BOXES\nMAYBE EVEN TOYS',
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
					count: 50,
					atomic_count: 50,
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
			link: 'https://api.flexport.com/booking_line_items?f.booking.id=159650',
		},
		created_at: '2019-10-28T08:45:34.233Z',
	},
	error: null,
}
