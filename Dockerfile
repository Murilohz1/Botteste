FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  wget && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
  
EXPOSE 5000

CMD ["sh", "start.sh", "--server"]
