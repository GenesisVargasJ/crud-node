module.exports = Object.freeze({
  GET_ID: 'SELECT id FROM public.person WHERE id = $1',
  GET_EXIST: 'SELECT id FROM public.person WHERE identification = $1',
  GET_ONE: 'SELECT p.*, pr.name AS profession, c.name AS city FROM public.person p, public.profession pr, public.city c WHERE p.id_profession = pr.id AND p.id_city = c.id AND p.id = $1',
  GET_ALL: 'SELECT p.*, pr.name AS profession, c.name AS city FROM public.person p, public.profession pr, public.city c WHERE p.id_profession = pr.id AND p.id_city = c.id',
  GET_PROFESSIONS: 'SELECT * FROM public.profession ORDER BY name ASC',
  GET_CITIES: 'SELECT * FROM public.city ORDER BY name ASC',
  POST_CREATE: 'INSERT INTO public.person(name, lastname, identification, birth_date, gender, phone, address, id_profession, id_city, created_by) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id',
  PUT_ONE: 'UPDATE public.person SET name = $1, lastname = $2, identification = $3, birth_date = $4, gender = $5, phone = $6, address = $7, id_profession = $8, id_city = $9 WHERE id = $10',
  DELETE_ONE: 'DELETE FROM public.person WHERE id = $1',
})