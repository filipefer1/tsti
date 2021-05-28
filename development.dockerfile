FROM node:12.18.3-alpine As development

RUN apk add --no-cache bash git

RUN npm i -g @nestjs/cli@7.4.1

WORKDIR /usr/src/app

CMD ["node", "dist/main"]
