# Stage 1 — build the React app
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (use package-lock if present)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .

#Build the app
RUN npm run build

# Stage 2 — serve the build with 'serve'
FROM node:20-alpine 

# Install 'serve' to serve the build folder
RUN npm install -g serve

# Copy the build folder from the previous stage
COPY --from=build /app/build ./build

# Expose the port and start the app

EXPOSE 8080

# Run the app with 'serve'
CMD ["serve", "-s", "build", "-l", "8080"]
