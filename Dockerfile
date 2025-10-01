# --- build stage ---
FROM node:19-alpine AS build
WORKDIR /app

# install deps (use package-lock if present)
COPY package*.json ./
RUN npm ci --silent

# copy source and build
COPY . .
RUN npm run build

# --- production stage ---
FROM node:19-alpine AS prod
WORKDIR /app

# lightweight static server that respects $PORT
RUN npm install -g serve@14 --silent

# copy built files from build stage
COPY --from=build /app/build ./build

# Cloud Run uses PORT env; expose 8080 (convention)
ENV PORT 8080
EXPOSE 8080

# start server on $PORT
CMD ["sh", "-c", "serve -s build -l $PORT"]
