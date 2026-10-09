FROM node:20.9.0-alpine

COPY ./app.js ./app.js
COPY ./listen.js ./listen.js
COPY package.json package-lock.json ./
RUN npm install --production

EXPOSE 300

ENTRYPOINT ["node", "listen.js"]
