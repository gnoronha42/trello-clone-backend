# Use a imagem oficial do Node.js como imagem base
FROM node:16-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código da aplicação para o diretório de trabalho
COPY . .

# Compile o TypeScript (se necessário)
RUN npm run build

# Defina o comando para iniciar o aplicativo
CMD ["npm", "start"]

# Exponha a porta que o aplicativo vai rodar
EXPOSE 3000
