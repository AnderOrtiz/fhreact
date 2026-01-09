FROM node:24.11.1-alpine3.23 AS dev
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
EXPOSE 5173
CMD ["npm", "run", "dev"]


FROM node:24.11.1-alpine3.23 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG VITE_GIPHY_API_KEY
ENV VITE_GIPHY_API_KEY=$VITE_GIPHY_API_KEY

# RUN npm run test
RUN npm run build


FROM nginx:1.29-alpine AS prod
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
# COPY assets/ /usr/share/nginx/html/assets
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
CMD [ "nginx","-g","daemon off;"]