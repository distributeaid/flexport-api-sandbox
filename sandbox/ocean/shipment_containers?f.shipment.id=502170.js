module.exports = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/ocean/shipment_containers?f.shipment.id=502170',
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
				id: 202143,
				container_type: 'dry',
				container_number: 'MSKU6284738',
				container_size: 'fourty_ft',
				seal_number: '',
				estimated_departure_date: '2019-03-18T12:00:00.000+08:00',
				actual_departure_date: '2019-03-18T12:00:00.000+08:00',
				estimated_arrival_date: '2019-03-29T12:00:00.000-05:00',
				actual_arrival_date: null,
				estimated_pickup_date: null,
				actual_pickup_date: null,
				estimated_delivery_date: null,
				actual_delivery_date: null,
				last_free_day_date: null,
				empty_returned_date: null,
				cargo_ready_date: null,
				available_for_pickup_date: null,
				estimated_available_for_pickup_date: null,
				shipment: {
					_object: '/api/refs/object',
					ref_type: '/shipment',
					link: 'https://api.flexport.com/shipments/502170',
					id: 502170,
				},
				container_legs: {
					_object: '/api/refs/collection',
					ref_type: '/ocean/shipment_container_leg',
					link:
						'https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=202143',
				},
				items: [],
			},
		],
	},
	error: null,
}
