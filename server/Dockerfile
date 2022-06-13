FROM node:16.14.2

LABEL version="1.0"


WORKDIR /app

COPY ["package.json","package-lock.json","./"]

RUN npm install

COPY . .

EXPOSE 5000
CMD ["node","server.js"]