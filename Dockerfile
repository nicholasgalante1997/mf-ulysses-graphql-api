FROM node:latest 

EXPOSE 5001 

WORKDIR /app

COPY package.json package.json 

RUN npm install \
    && npm cache clean --force 

COPY . .

CMD [ "npm", "run", "start" ]