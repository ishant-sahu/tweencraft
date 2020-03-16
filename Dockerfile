FROM node:12.13.1-alpine
MAINTAINER Ishant Sahu
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD ["npm","run","build"]