FROM node:18

# Instala dependências para o wait-for.sh
RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Adiciona o script wait-for.sh
COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh

EXPOSE 3000
CMD ["/wait-for.sh", "case-db", "5432", "npm", "start"]
