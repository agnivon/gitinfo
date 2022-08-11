FROM node:16
WORKDIR /usr/src/edureka-nodejs/gitinfo
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]