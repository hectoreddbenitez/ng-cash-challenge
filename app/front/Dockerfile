FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

EXPOSE 3000

RUN npm install

COPY . .

CMD ["npm", "start"]
