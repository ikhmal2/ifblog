FROM ubuntu:latest

WORKDIR /app

RUN apt-get update && apt-get install -y python3 python3-pip unzip curl

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH /root/.bun/bin:$PATH

ENV NVM_DIR /usr/local/nvm

ENV NODE_VERSION v22.13.0

RUN mkdir -p /usr/local/nvm

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash


RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"

ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/bin

ENV PATH $NODE_PATH:$PATH

RUN node -v

COPY . .

RUN bun install

RUN bun run build

EXPOSE 3000

# CMD ["node" ".output/server/index.mjs"]
CMD /bin/bash -c "source \$NVM_DIR/nvm.sh && node .output/server/index.mjs"