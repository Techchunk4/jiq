# Use the official Node.js image.
FROM node:14-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy application code to the container.
COPY . .

# Build the application.
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]
