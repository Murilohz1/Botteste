FROM node:lts-buster

EXPOSE 5000

CMD ["node", "index.js", "--server"]
