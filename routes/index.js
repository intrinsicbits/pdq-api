module.exports = (router) => {
  router.prefix('/v1')
  router.use('/weather', require('./weather'))
  router.use('/muni', require('./muni'))
}
