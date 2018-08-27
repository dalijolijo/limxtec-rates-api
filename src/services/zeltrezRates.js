const request = require('request-promise-native');

const zeltrezRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ZEC,ZEL,USDT,LTC,BTCZ&tsyms=BTC', json: true }),
      request({ uri: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=HUSH,ZCL&tsyms=BTC', json: true }),
      request({ uri: 'https://bitpay.com/api/rates', json: true }),
    ]).then((results) => {
      const ccDataA = results[0]; // results from cryptocompare
      const ccDataB = results[1]; // results from cryptocompare
      const bitpayData = results[2]; // results from bitpay

      const rates = [];
      const efg = {}

      const coinsA = Object.keys(ccDataA)
      coinsA.forEach((coin) => {
        efg[coin] = ccDataA[coin].BTC
      })

      const coinsB = Object.keys(ccDataB)
      coinsB.forEach((coin) => {
        efg[coin] = ccDataB[coin].BTC
      })

      rates.push(bitpayData);
      rates.push(efg)

      return rates;
    });
  },
};

module.exports = zeltrezRates;
