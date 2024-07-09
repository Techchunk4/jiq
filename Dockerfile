# Use official Node.js LTS image as base
FROM node:lts-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to work directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on (if applicable)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
