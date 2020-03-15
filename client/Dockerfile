FROM node:13.3.0 AS compile-image
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g @angular/cli@9.0.3
RUN npm install
COPY . /app
EXPOSE 4200
CMD ["npm", "run", "start"]
