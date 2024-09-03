# 🛠️ Projeto de Gerenciamento de Boards e Cards

## 📚 Descrição
Este projeto é uma aplicação de gerenciamento de boards e cards, construída utilizando a arquitetura limpa (Clean Architecture) e princípios SOLID. A aplicação também integra um serviço de notificação usando RabbitMQ para eventos como a criação de boards e cards.

## 🚀 Tecnologias Utilizadas
- **Node.js:** Ambiente de execução JavaScript.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Express:** Framework web para Node.js.
- **NestJS:** Framework para construção de aplicações Node.js escaláveis e eficientes.
- **Mongoose:** Biblioteca de modelagem de dados para MongoDB.
- **RabbitMQ:** Mensageria para comunicação assíncrona entre serviços.
- **amqplib:** Biblioteca para interagir com RabbitMQ.

## 🏗️ Arquitetura

### Clean Architecture
A Clean Architecture, proposta por Robert C. Martin (Uncle Bob), visa separar a lógica de negócios da lógica de infraestrutura, facilitando a manutenção e evolução do sistema. A estrutura do projeto é dividida em camadas:

- **Application:** Contém os casos de uso da aplicação.
- **Domain:** Contém as entidades e serviços de domínio.
- **Infrastructure:** Contém a implementação de infraestrutura, como repositórios e serviços externos.
- **Interfaces:** Contém os controladores e interfaces de entrada/saída.

### Princípios SOLID
A aplicação segue os princípios SOLID para garantir um código mais limpo, modular e fácil de manter:

- **Single Responsibility Principle (SRP):** Cada classe tem uma única responsabilidade.
- **Open/Closed Principle (OCP):** Classes são abertas para extensão, mas fechadas para modificação.
- **Liskov Substitution Principle (LSP):** Subtipos devem ser substituíveis por seus tipos base.
- **Interface Segregation Principle (ISP):** Muitas interfaces específicas são melhores do que uma interface geral.
- **Dependency Inversion Principle (DIP):** Dependa de abstrações, não de implementações.

## 📂 Estrutura de Pastas
A estrutura de pastas do projeto é organizada de forma a refletir as camadas da arquitetura limpa, facilitando a navegação e manutenção do código.

## 🛠️ Configuração e Execução

### Pré-requisitos
- Node.js
- MongoDB
- RabbitMQ


### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/projeto-gerenciamento-boards-cards.git
   ```

2. Instale as dependências:

   ```bash
   cd projeto-gerenciamento-boards-cards
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto.

   Adicione as seguintes variáveis conforme a necessidade:

   ```env
   MONGO_URI=mongodb://localhost:27017/seu-banco-de-dados
   RABBITMQ_URL=amqp://localhost
   ```

4. Inicie o MongoDB e RabbitMQ:

   - **MongoDB:** Certifique-se de que o serviço MongoDB esteja em execução. Você pode iniciar o MongoDB localmente ou usar um serviço hospedado.
   - **RabbitMQ:** Inicie o RabbitMQ localmente, usando `rabbitmq-server` ou utilize um serviço hospedado.

### Execução

1. Inicie o servidor:

   ```bash
   npm run start
   ```

   O servidor estará disponível na porta definida nas variáveis de ambiente ou na porta padrão (3000).

2. Inicie os consumidores RabbitMQ:

   ```bash
   npm run start:consumers
   ```

   Os consumidores serão responsáveis por processar as mensagens de eventos (como a criação de boards e cards) enviadas ao RabbitMQ.

3. Acesse a aplicação:

   Acesse a aplicação através do navegador em `http://localhost:3000` (ou a porta configurada).

### 📬 Endpoints

#### Criar Board

- **URL:** `/boards`
- **Método:** `POST`
- **Body:**

   ```json
   {
     "title": "Nome do Board",
     "description": "Descrição do Board"
   }
   ```

- **Resposta de Sucesso (200):**

   ```json
   {
     "id": "ID do Board",
     "title": "Nome do Board",
     "description": "Descrição do Board",
     "createdAt": "Data de Criação"
   }
   ```

#### Criar Card

- **URL:** `/cards`
- **Método:** `POST`
- **Body:**

   ```json
   {
     "boardId": "ID do Board",
     "title": "Nome do Card",
     "description": "Descrição do Card"
   }
   ```

- **Resposta de Sucesso (200):**

   ```json
   {
     "id": "ID do Card",
     "boardId": "ID do Board",
     "title": "Nome do Card",
     "description": "Descrição do Card",
     "createdAt": "Data de Criação"
   }
   ```

### 🧪 Testes

Para executar os testes, utilize o comando:

   ```bash
   npm run test
   ```

Os testes cobrem as principais funcionalidades da aplicação, garantindo que os casos de uso, entidades e serviços estejam funcionando conforme o esperado.

#### Testes Unitários

Os testes unitários cobrem a lógica de negócios das camadas `Application` e `Domain`.

#### Testes de Integração

Os testes de integração validam a comunicação entre os componentes da aplicação, incluindo interações com o MongoDB e RabbitMQ.

### 📜 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
