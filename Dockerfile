FROM node:lts-buster

RUN apt-get update && apt-get upgrade

COPY package.json .

RUN  pkg install nodejs -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && pkg install wget -y && pkg install git -y

COPY . .

EXPOSE 5000

CMD ["sh", "start.sh", "--server"]
