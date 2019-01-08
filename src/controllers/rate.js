const limxtecRates = require('../services/limxtecRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling Rates information from APIs');
  limxtecRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
