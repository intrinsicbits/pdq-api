const sfmuni = require('nextbusjs').client()

function getMuniData () {
  return new Promise(function (resolve, reject) {
    sfmuni.cacheAgency('sf-muni', function (err) {
      if (err) {
        reject(err)
      } else {
        sfmuni.stopPredict('6592', null, function (err, data) {
          resolve(data)
        }, 'minutes')
      }
    });
  })

}

async function schedule (ctx) {
  ctx.body = await getMuniData()
}

module.exports = {
  schedule
}
