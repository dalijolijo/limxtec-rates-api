# limxtec-rates-api
A Restful API that displays currently integrated LIMXTEC coins in exchange rates

## Requirements
Requires node version 6.0 and above
```sh
sudo apt-get install nodejs
nodejs --version
```

## Installation
Install npm dependencies with command:
```
cd limxtec-rates-api
npm config set strict-ssl false
npm install
```

## Usage
Start the service with command:
```
npm start
```

After the service has been started, you should be able to browse to it on port 3333.
Example: http://localhost:3333/rates

## Run as docker container
```sh
docker run --rm --name limxtec-rates-api -p 3333:3333 -d dalijolijo/limxtec-rates-api
docker logs limxtec-rates-api
```
