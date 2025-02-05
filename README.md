# Projeto Cão Sem Dono

Este projeto é uma aplicação web dedicada à causa dos animais abandonados, promovendo doações, adoção responsável e ações de voluntariado.

![Página Inicial](public/img/screencapture-caosemdono.png)

## Requisitos
- **Node.js**: v20.18.0
- **Next.js**: 15.1.4

## Tecnologias Utilizadas

- **React**: Para construção da interface de usuário.
- **Next.js**: Framework para renderização do lado do servidor e criação de sites estáticos.
- **Chakra UI**: Para componentes de interface.
- **Axios**: Para requisições HTTP, como a integração com a API para gerar códigos Pix para doações.
- **TypeScript**: Para tipagem estática no código.
- **API do Pix**: Utilizada para gerar códigos Pix que podem ser escaneados e usados nas doações.
- **Imagem otimizada**: Para garantir carregamento rápido de conteúdo visual.

## Funcionalidades

### 1. **Informações sobre a organização**
- A página apresenta informações sobre a missão e objetivos da organização "Cão Sem Dono", além de destacar suas ações e campanhas.


### 3. **Engajamento do Usuário**
- Os usuários podem se envolver com a causa, acessando páginas de doação, preenchendo formulários de lar temporário para animais resgatados e se informando sobre a posse responsável de animais.

### 4. **Responsividade**
- A interface da aplicação é totalmente responsiva, se ajustando a diferentes tamanhos de tela para garantir a melhor experiência de usuário.

### 5. **Doações via Pix**
   O projeto permite que os usuários façam doações por meio do sistema de pagamento Pix. A funcionalidade integra a geração de um código Pix através de uma API interna. 
   - **Geração do QR Code**: O usuário pode escolher o valor da doação, e o sistema gera um código Pix que pode ser escaneado por qualquer aplicativo de pagamento.
   - **Códigos Pix personalizáveis**: O usuário pode copiar o código Pix manualmente caso prefira não escanear o QR code.
   
### 6. **Integração com API de Geração de Código Pix**
   A aplicação utiliza uma API interna para gerar códigos Pix. Quando o usuário escolhe um valor de doação, uma solicitação é enviada ao servidor para criar um código Pix no formato BR Code. A API retorna uma URL do QR Code gerado, que é exibido na interface.
   
   **Como a API funciona**:
   - A requisição é feita por meio do método `POST` para o endpoint `/api/pix`, enviando o valor da doação.
   - A chave Pix, configurada como variável de ambiente no servidor, é usada para gerar o código.
   - O código Pix é então convertido para um QR Code, que pode ser exibido no frontend da aplicação.

  **Exemplo de Fluxo**:
- O usuário escolhe um valor fixo de doação (R$ 2,00, R$ 5,00 e R$ 10,00) ou digita um valor personalizado.
- Ao clicar no botão "Gerar QR Code", o sistema envia uma solicitação para o servidor, que gera o código Pix com a chave configurada.
- O QR Code gerado é exibido na tela para que o usuário possa escanear e concluir a doação.


## Como Rodar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Jezebel1990/nextjs-charity.git
   cd cao-sem-dono

2. **Instale as dependências**:

```bash
npm run dev
# ou
yarn dev
```

3.  **Inicie o servidor de desenvolvimento **:
```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

Feito com ♥ por [Jezebel Guedes](https://www.linkedin.com/in/jezebel-guedes/) 👋 Entre em contato!
