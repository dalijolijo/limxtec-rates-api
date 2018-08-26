const request = require('request-promise-native');

const zeltrezRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ZEC,ZEL,USDT,LTC,BTCZ&tsyms=BTC', json: true }),
      request({ uri: 'https://bitpay.com/api/rates', json: true }),
    ]).then((results) => {
      const ccData = results[0]; // results from cryptocompare
      const bitpayData = results[1]; // results from bitpay

      const rates = [];
      const efg = {}

      const coins = Object.keys(ccData)
      coins.forEach((coin) => {
        efg[coin] = ccData[coin].BTC
      })

      rates.push(bitpayData);
      rates.push(efg)

      return rates;
    });
  },
};

module.exports = zeltrezRates;
