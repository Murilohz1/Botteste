FROM node:lts-buster

RUN pkg install nodejs -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && pkg install wget -y

EXPOSE 5000

CMD ["sh", "start.sh", "--server"]
