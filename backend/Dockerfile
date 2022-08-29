# syntax=docker/dockerfile:1

FROM node:16.17.0
WORKDIR /
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
CMD [ "npm", "run", "serve" ]