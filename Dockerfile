FROM node:20 AS frontend-build

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./

RUN npm run build

#---------------------------

FROM node:20 AS backend

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY --from=frontend-build /app/frontend/build ./public

COPY backend/ ./

EXPOSE 3000

CMD ["node", "app.js"]