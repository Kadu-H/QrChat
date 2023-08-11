# QrChat - Gerador de QR Code para Chat do WhatsApp (Node.js Backend)

O QrChat é um projeto simples construído em Node.js que se concentra no backend de uma aplicação para gerar QR Codes que, quando escaneados, redirecionam os usuários para o chat do WhatsApp com uma mensagem pré-definida pelo usuário. O objetivo deste projeto é fornecer uma solução minimalista e rapida para iniciar conversas no WhatsApp por meio da leitura de QR Codes.

## Funcionalidade e Fluxo de Trabalho

O QrChat é projetado para ser uma aplicação leve e fácil de usar:

1. O usuário acessa o site do QrChat.
2. Insere a mensagem desejada no campo apropriado.
3. Clica no botão "Gerar QR Code".
4. Um QR Code é gerado, contendo as informações da mensagem.
5. Os usuários podem escanear o QR Code usando um aplicativo de leitura de QR Code.
6. Após escanear, o aplicativo do WhatsApp é aberto automaticamente, com a mensagem pré-definida pronta para ser enviada.

## Requisitos e Instalação

Certifique-se de ter o Node.js instalado em seu ambiente. Para usar o QrChat:

1. Clone este repositório para o seu ambiente local ou faça o download dos arquivos.
2. Abra um terminal e navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências:
```
npm install
```
4. Após a instalação, execute o seguinte comando para iniciar o servidor:  
```
npm server.js
```
5. Abra o navegador e acesse `http://localhost` para acessar o QrChat.

## Estrutura do Projeto

A estrutura do projeto é bastante simples:

- `server.js`: O arquivo principal que define o servidor Express e as rotas.
- `src/views/`: Armazena os arquivos de visualização usados pelo Express.


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, enviar pull requests ou fornecer sugestões para melhorias do projeto.

