# =========================================
# Stage 1: Build the Angular Application
# =========================================
ARG NODE_VERSION=22.17.0
ARG NGINX_VERSION=alpine3.21

FROM node:${NODE_VERSION} AS builder

WORKDIR /app

# Copy package-related files first
COPY package.json package-lock.json ./

# Install project dependencies with legacy peer deps handling
RUN --mount=type=cache,target=/root/.npm npm ci --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Build the Angular application
RUN npm run build

# =========================================
# Stage 2: Serve Static Files with Nginx
# =========================================
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner

USER nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx --from=builder /app/dist/*/browser /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]
