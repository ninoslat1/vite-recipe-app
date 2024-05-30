# ---- Build Stage ----
    FROM node:latest AS build
    WORKDIR /app
    COPY package.json .
    RUN npm install
    COPY . .
    RUN npm run build
    
    # ---- Runtime Stage ----
    FROM node:22-alpine
    WORKDIR /app
    # Install serve globally
    RUN npm install -g serve
    COPY --from=build /app/dist /app/dist
    
    EXPOSE 8081
    CMD ["serve", "-s", "dist", "-l", "8081"]