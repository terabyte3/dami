FROM alpine:latest
FROM jarredsumner/bun:edge

COPY . ./
EXPOSE 8000
RUN bun install 
CMD bun run index.js