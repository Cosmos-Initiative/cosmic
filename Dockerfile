FROM node:lts-bookworm
COPY . .
RUN ["npx", "tsc"]
CMD node .
