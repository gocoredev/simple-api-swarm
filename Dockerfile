FROM node:alpine

WORKDIR /app

COPY ["package.json", "./"]

ENV NODE_ENV=prd

RUN npm install --silent

COPY . . 

EXPOSE 5000

CMD yarn start