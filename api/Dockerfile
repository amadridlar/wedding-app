FROM node:12.16.1

WORKDIR /home/wedding-api/

ADD package*.json ./

RUN npm i --production

ADD controllers ./controllers/
ADD routes ./routes/
ADD src ./src/
ADD index.js .

EXPOSE 3000

CMD npm start