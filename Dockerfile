FROM alpine:latest
FROM jarredsumner/bun:edge

COPY . ./
EXPOSE 8000

CMD bun run index.js