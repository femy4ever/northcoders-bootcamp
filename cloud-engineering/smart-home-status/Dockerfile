FROM node:20.9.0-alpine

COPY ./app.js ./app.js
COPY ./listen.js ./listen.js
COPY package.json package-lock.json ./
RUN npm install --production

ENV LIGHTS_SERVICE="http://light-service-replace-me.com:3000"
ENV HEATING_SERVICE="http://heating-service-replace-me.com:3001"
ENV AUTH_SERVICE="http://auth-service-replace-me.com:3002"

EXPOSE 3003

ENTRYPOINT ["node", "listen.js"]
