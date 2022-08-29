# syntax=docker/dockerfile:1

FROM node:16.17.0
WORKDIR /
COPY ["package.json", "package-lock.json*", ".env", "./"]
RUN npm install
CMD [ "npm", "run", "start" ]