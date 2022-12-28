FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

FROM mongo

COPY . .

EXPOSE 27017

CMD ["mongod"]
