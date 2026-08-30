FROM node:24-bookworm

RUN apt-get update && apt-get install -y chromium \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY gold-agent.js .
COPY gold-scraper.js .
COPY gold-state.js .
COPY message-generator.js .
COPY telegram-sender.js .
COPY logger.js .

CMD ["node", "gold-agent.js"]