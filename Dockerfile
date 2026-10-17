
FROM node:24-bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends chromium \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY gold-agent.js .
COPY gold-scraper.js .
COPY gold-state.js .
COPY message-generator.js .
COPY telegram-sender.js .
COPY logger.js .

CMD ["node", "gold-agent.js"]
