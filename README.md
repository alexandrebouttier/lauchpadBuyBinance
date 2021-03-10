# Binance Lauchpad Buy Bot

## Installation

```
yarn  ou  npm install
```

## Lancer le bot

Exemples date : 10H00 le 19 février
Aide cron https://crontab.guru/

```
Minute,heure,jour,mois
00 10 19 02 *
```

# Changer le fusion horaire de son serveur

```
sudo timedatectl set-timezone Europe/Paris
```

APIKEY=macleapi APISECRET=monapisecret SYMBOL=ETH/USDT SOMME=100 TIME="00 10 19 02 *" yarn start

## Start serveur PM2

APIKEY=monapikey APISECRET=monapisecret SYMBOL=DODO/USDT SOMME=200 TIME="02 09 19 02 *" pm2 start --name bot-binance-lauchpad ./app.js
