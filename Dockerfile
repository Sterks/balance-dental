# Stage 1: Build the React application
FROM node:18.20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN echo 'server { \
        listen 80; \
        server_name localhost; \
        root /usr/share/nginx/html; \
        index index.html; \
        location / { \
            try_files $uri $uri/ /index.html; \
        } \
        error_page 500 502 503 504 /50x.html; \
        location = /50x.html { \
            root /usr/share/nginx/html; \
        } \
    }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]