module.exports = {
	_object: '/api/response',
	self: 'https://api.flexport.com/bookings/99461',
	version: 2,
	data: {
		metadata: {},
		_object: '/booking',
		id: 99461,
		name: 'TEST COLLAB',
		flex_id: 'FLEX-542526',
		shipment: {
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/542526',
			id: 542526,
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
			destination_port: null,
			product_descriptions: [
				{
					_object: '/bookings/product_description',
					description: 'book',
					description_for_export_customs: '书',
					description_for_export_customs_locale: 'zh_CN',
					hs_code: {
						_object: '/hs_code',
						description:
							'Optical fibers and optical fiber bundles; optical fiber cables other than those of heading 8544; sheets and plates of polarizing material; lenses (including contact lenses), prisms, mirrors and other optical elements, of any material, unmounted, other than such elements of glass not optically worked:: Optical fibers, optical fiber bundles and cables',
						code: '9001.10',
						country_code: 'US',
					},
				},
			],
		},
		air_booking: null,
		trucking_booking: null,
		origin_address: {
			_object: '/address',
			street_address: '1223 hola st',
			street_address2: null,
			city: 'Hong Kong',
			state: 'Hong kong',
			country: 'Hong Kong',
			country_code: 'HK',
			zip: '00000',
			unlocode: null,
			timezone: 'Asia/Hong_Kong',
			ref: 'id-90202',
		},
		cargo_ready_date: '2019-05-25',
		destination_address: {
			_object: '/address',
			street_address: '160 Corwin St',
			street_address2: null,
			city: 'San Francisco',
			state: 'CA',
			country: 'United States',
			country_code: 'US',
			zip: '94105',
			unlocode: null,
			timezone: 'America/Los_Angeles',
			ref: 'id-91819',
		},
		delivery_date: null,
		wants_export_customs_service: false,
		cargo: {
			_object: '/cargo',
			volume: {
				value: 20,
				unit: 'cbm',
				_object: '/quantity/volume',
			},
			weight: {
				value: 122,
				unit: 'kg',
				_object: '/quantity/weight',
			},
			marks_and_numbers: null,
			shipping_units: [],
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
			link: 'https://api.flexport.com/booking_line_items?f.booking.id=99461',
		},
		created_at: '2019-05-20T06:50:23.785Z',
	},
	error: null,
}