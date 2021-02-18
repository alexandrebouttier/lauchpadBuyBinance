const cron = require('node-cron');
const ccxt = require('ccxt');
const cmlog = require('cmlog');
const _ = require('lodash');

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const { APIKEY } = process.env;
const { APISECRET } = process.env;
const { SYMBOL } = process.env;
const { TIME } = process.env;
const { SOMME } = process.env;

if (!APIKEY) {
  cmlog.error(new Error('APIKEY non renseigné !'));
  return;
}
if (!APISECRET) {
  cmlog.error(new Error('APISECRET non renseigné !'));
  return;
}
if (!SYMBOL) {
  cmlog.error(new Error('SYMBOL non renseigné !'));
  return;
}
if (!TIME) {
  cmlog.error(new Error('TIME non renseigné !'));
  return;
}
if (!SOMME) {
  cmlog.error(new Error('SOMME non renseigné !'));
  return;
}

cmlog.start('Binance Lauchpad Buy Bot');
cmlog.info(
  `Bot démarrer sur ${SYMBOL}  avec la clé APIKEY=${APIKEY} APISECRET=${APISECRET} `
);

cron.schedule(TIME, () => {
  const exchangeClass = ccxt['binance'];
  const exchange = new exchangeClass({
    apiKey: APIKEY,
    secret: APISECRET,
  });
  let binance = new ccxt.binance();

  binance.fetchTicker(SYMBOL).then((res) => {
    const lastPrice = res.last;

    let quantity = Number(SOMME) / lastPrice;

    exchange
      .createOrder(SYMBOL, 'market', 'buy', quantity.toFixed(5) * 0.9)
      .then((res) => {
        logger.info('Ordre exécuté avec succées');
        cmlog.success('Ordre exécuté avec success !');
      })
      .catch((err) => {
        console.log('erreur', err);
        logger.info('Ordre exécuté avec succées');
        logger.error('Ordre exécuté avec succées');
        cmlog.error(new Error("Une erreur est survenu lors de l'ordre"));
        return;
      });
  });
});
