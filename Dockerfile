FROM node

WORKDIR /usr/lib/app

COPY package*.json ./

RUN npm install -g nodemon && npm install 

COPY . .

EXPOSE 4000

CMD [ "./start.sh" ]
