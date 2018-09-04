const request = require('request-promise-native');

const zeltrezRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ZEC,USDT,LTC,BTCZ,RVN,BCH,BNB,BTX,SONM,OMG,ZIL,ZRX,GNT,SPHTX,BAT,MKR,KNC,ENG,PAY,SUB,CVC,STX,BTG,KCS,SRN&tsyms=BTC', json: true }),
      request({ uri: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=HUSH,ZCL,XSG,BTCP,ZEN,KMD,XZC,ZER,ABT,ADX,AE,AION,AST,BBO,APPC,BLZ,BNT,ETHOS,COFI,DAI,DGX,ELEC,ELF,ENJ,STORJ,IOST,DENT,LEND,LINK,MANA,LRC,QASH,ICN,MCO,MTL,POE,POLY,POWR,RCN,RDN,REQ,SNT,SALT,STORM,EDO,TUSD,DCN,WAX,WINGS,DTA,FUN,KIN&tsyms=BTC', json: true }),
      request({ uri: 'https://bitpay.com/api/rates', json: true }),
      request({ uri: 'https://coinlib.io/api/v1/coin?key=ef17eaaef4e1f6f2&pref=BTC&symbol=SAFE', json: true }),
      request({ uri: 'https://api.coinmarketcap.com/v1/ticker/zelcash/', json: true }),
    ]).then((results) => {
      const ccDataA = results[0]; // results from cryptocompare
      const ccDataB = results[1]; // results from cryptocompare
      const bitpayData = results[2]; // results from bitpay
      const safeprice = Number(results[3].price)
      const zelprice = Number(results[4][0].price_btc)

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

      efg.SAFE = safeprice
      efg.ZEL = zelprice

      rates.push(bitpayData);
      rates.push(efg)

      return rates;
    });
  },
};

module.exports = zeltrezRates;
