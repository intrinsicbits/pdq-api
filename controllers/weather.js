const rp = require('request-promise')

async function forecast (ctx) {
  // https://api.forecast.io/forecast/f30c5e510b0f910bd35f540a9d1dec12/37.7857361,-122.4318036
  // console.log(ctx.request)
  const forecast = await rp.get('https://api.forecast.io/forecast/f30c5e510b0f910bd35f540a9d1dec12/37.7857361,-122.4318036')
  // ctx.ok({ forecast })
  ctx.body = forecast
}

module.exports = {
  forecast
}
