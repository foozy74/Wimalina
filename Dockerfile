# Production-Grade Containerized Static Server for Wimalina.uk
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy project assets to Nginx html directory
COPY . /usr/share/nginx/html

# Copy custom nginx configuration for gzip compression & security headers
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    gzip on; \
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(?:css|js|map|jpe?g|png|gif|svg|ico|mp4|webm)$ { \
        expires 7d; \
        add_header Cache-Control "public, no-transform"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose standard HTTP port
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
