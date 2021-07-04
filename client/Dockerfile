FROM node:14.6-alpine as base


ENV NODE_ENV=production
WORKDIR /frontend
COPY /package.json ./
RUN npm install --only=production && npm cache clean --force

FROM base as dev
ENV NODE_ENV=development

RUN npm install --only=development
ENV PATH=/frontend/node_modules/.bin:$PATH

CMD ["next"]
