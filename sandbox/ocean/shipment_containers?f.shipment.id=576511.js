module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=576511',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		total_count: 1,
		data: [
			{
				metadata: {},
				_object: '/ocean/shipment_container',
				id: 287024,
				container_type: 'dry',
				container_number: 'FSCU5001420',
				container_size: 'fourty_ft',
				seal_number: 'FSCU5001420',
				estimated_departure_date: '2019-08-04T12:00:00.000+08:00',
				actual_departure_date: '2019-08-04T15:10:00.000+08:00',
				estimated_arrival_date: '2019-08-21T12:00:00.000-07:00',
				actual_arrival_date: '2019-08-21T14:34:00.000-07:00',
				estimated_pickup_date: '2019-08-01T12:00:00.000+08:00',
				actual_pickup_date: null,
				estimated_delivery_date: '2019-08-29T12:00:00.000-07:00',
				actual_delivery_date: null,
				last_free_day_date: null,
				empty_returned_date: null,
				cargo_ready_date: '2019-07-24',
				available_for_pickup_date: null,
				estimated_available_for_pickup_date: null,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/576511',
					id: 576511,
				},
				container_legs: {
					_object: '/api/refs/collection',
					ref_type: '/ocean/shipment_container_leg',
					link:
						'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=287024',
				},
				items: [],
			},
		],
	},
	error: null,
}
