FROM node:16-alphine
WORKDIR /usr/app

COPY packge.json .

RUN npm install 

COPY . .

EXPOSE 3333

CMD ["npm" . "start"]