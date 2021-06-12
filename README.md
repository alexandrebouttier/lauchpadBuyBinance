# Binance Lauchpad Buy Bot

Robot to buy crypto on Binance at a specific date and time, and resell at a specific time, can be used for Binance lauchpads

## Setup

```
yarn  or  npm install
```

## Launch the bot



Examples date : 10H00 le 19 février
Help cron https://crontab.guru/

```
Minute,hour,day,month
00 10 19 02 *
```

## Change the time zone of your server


```
sudo timedatectl set-timezone Europe/Paris
```

APIKEY=macleapi APISECRET=monapisecret SYMBOL=ETH/USDT SOMME=100 TIME="00 10 19 02 *" yarn start

## Start serveur PM2

APIKEY=monapikey APISECRET=monapisecret SYMBOL=DODO/USDT SOMME=200 TIME="02 09 19 02 *" pm2 start --name bot-binance-lauchpad ./app.js
