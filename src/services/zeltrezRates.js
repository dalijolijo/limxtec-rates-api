const request = require('request-promise-native');

const zeltrezRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ZEC,ZEL,USDT,LTC,BTCZ,RVN,BCH,BNB,BTX,SONM,OMG,ZIL,ZRX,GNT,SPHTX,BAT,MKR,KNC,ENG,PAY,SUB,CVC,STX,BTG&tsyms=BTC', json: true }),
      request({ uri: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=HUSH,ZCL,XSG,BTCP,ZEN,SAFE,KMD,XZC,ZER,ABT,ADX,AE,AION,AST,BBO,APPC,BLZ,BNT,ETHOS,COFI,DAI,DGX,ELEC,ELF,ENJ,STORJ,IOST,DENT,LEND,LINK,MANA,LRC,QASH,ICN,MCO,MTL,POE,POLY,POWR,RCN,RDN,REQ,SNT,SALT,STORM,EDO,TUSD,DCN,WAX,WINGS,DTA,FUN,KIN&tsyms=BTC', json: true }),
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
