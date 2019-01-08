FROM node:8

# Create app directory
WORKDIR /usr/src/limxtec-rates-api

# Clone limxtec-rates-api git repo
RUN git clone https://github.com/dalijolijo/limxtec-rates-api.git /usr/src/limxtec-rates-api

# Install app dependencies
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 3333
CMD [ "npm", "start" ]
