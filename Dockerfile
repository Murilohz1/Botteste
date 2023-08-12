FROM node:lts-buster

EXPOSE 5000

CMD ["sh", "start.sh", "--server"]
