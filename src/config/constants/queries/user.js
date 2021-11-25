module.exports = Object.freeze({
  POST_LOGIN: 'SELECT id FROM public.user WHERE email = $1 AND password = md5($2)',
})