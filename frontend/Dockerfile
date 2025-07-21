# -------- STAGE 1: Build Angular SSR App --------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the full app
COPY . .

# Build browser and server bundles
RUN npm run build && npm run build:ssr

# -------- STAGE 2: Run Angular Universal Server --------
FROM node:20-alpine

WORKDIR /app

# Copy compiled app and package files
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev && npm cache clean --force

# Optional: use environment variable for port
ENV PORT=4000
EXPOSE 4000

# Launch server-side bundle
CMD ["node", "dist/frontend-server/main.js"]
