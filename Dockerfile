FROM node:18-alpine

WORKDIR /usr/src/app

EXPOSE 3000 

COPY package*.json ./

COPY . .

RUN npm install

ENV NODE_ENV=production

RUN npm run build


CMD ["npm", "start"] 