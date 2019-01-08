# limxtec-rates-api
A Restful API that displays currently integrated LIMXTEC coins in exchange rates

## Requirements
Requires node version 6.0 and above
```sh
sudo apt-get install nodejs jq
nodejs --version
```

## Installation
Install npm dependencies with command:
```
cd limxtec-rates-api
npm config set strict-ssl false
npm install
```

## Start
Start the service with command:
```
npm start
```

## Usage
After the service has been started, you should be able to browse to it on port 3333 (http://localhost:3333/rates).
```sh

#get all rates
curl http://localhost:3333/rates

#get all rates parsed as JSON
curl --silent http://localhost:3333/rates | jq

#get all FIAT currency rates parsed as JSON
curl --silent http://localhost:3333/rates | jq '.[0]'

#get all crypto rates parsed as JSON
curl --silent http://localhost:3333/rates | jq '.[1]'

#get rate of COIN parsed as JSON
curl --silent http://localhost:3333/rates | jq '.[1]'.COIN
```

## Run as docker container
```sh
docker run --rm --name limxtec-rates-api -p 3333:3333 -d dalijolijo/limxtec-rates-api
docker logs limxtec-rates-api
```
