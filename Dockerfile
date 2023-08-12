FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  wget && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm install
  
EXPOSE 5000

CMD ["sh", "start.sh"]
