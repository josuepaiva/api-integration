FROM node:15

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json ./

RUN yarn --install.no-lockfile true

COPY . .

EXPOSE ${PORT_SERVER}

CMD ["yarn", "start"]
