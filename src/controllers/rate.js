const zeltrezRates = require('../services/zeltrezRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling Rates information from APIs');
  zeltrezRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
