#from base image of NODEJS 16 LTS
FROM node:16

#Argument List
ARG DEFINED_HOST
ARG DEFINED_PASSWORD
ARG DEFINED_DBNAME

#create working directory for the backend application
WORKDIR /usr/src/seccambackend

#copy the package.json and package-lock.json
COPY package*.json ./

#install the required dependencies
RUN npm install

#copy the backend source code 
COPY . .

#Replace variables with defined Arguments
RUN sed -i "s/DEFINED_HOST/${DEFINED_HOST}/g" ./db.js
RUN sed -i "s/DEFINED_PASSWORD/${DEFINED_PASSWORD}/g" ./db.js
RUN sed -i "s/DEFINED_DBNAME/${DEFINED_DBNAME}/g" ./db.js

#the backend app binds to port 9001 (check server.js) so I need to expose it to be mapped by docker
EXPOSE 9001

#run the backend application
CMD ["node", "server.js"]