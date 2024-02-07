FROM node:14

RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install
WORKDIR /backend-app
COPY . .
CMD [ "npm", "run", "start:app" ]
