module.exports = Object.freeze({
  GET_ALL: 'SELECT vp.*, vt.name AS vehicle_type, vb.name AS vehicle_brand FROM public.vehicle_person vp, public.vehicle_type vt, public.vehicle_brand vb WHERE vp.id_vehicle_type = vt.id AND vp.id_vehicle_brand = vb.id AND vp.id_person = $1',
  GET_TYPES: 'SELECT * FROM public.vehicle_type ORDER BY name ASC',
  GET_BRANDS: 'SELECT * FROM public.vehicle_brand ORDER BY name ASC',
  POST_CREATE: 'INSERT INTO public.vehicle_person(id_person, id_vehicle_type, id_vehicle_brand, model, created_by) VALUES($1, $2, $3, $4, $5) RETURNING id',
})