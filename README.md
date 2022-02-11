# Teste React Native - Daniel Vega

<p align="center">
<img src="https://github.com/Agev-Projects/shoplist-react-native-app/blob/main/assets/splash.png?raw=true" alt="Splash Screen" width="auto" height="512">
</p>

## TABELA DE CONTEÚDO

<!-- TABELA DE CONTEÚDO -->
<details open="open">
  <summary>Tabela</summary>
  <ol>
    <li>
      <a href="#descrição-do-projeto">Descrição do Projeto</a>
      <ul>
        <li><a href="#características-do-projeto">Características do Projeto</a></li>
        <li><a href="#características-adicionais">Características adicionais</a></li>
      </ul>
    </li>
    <li>
      <a href="#instalação-do-projeto">Instalação do projeto</a>
      <ul>
       <li><a href="#dependências-do-projeto">Dependências do Projeto</a></li>
      </ul>
    </li>
  </ol>
</details>

## DESCRIÇÃO DO PROJETO

O projeto é uma aplicação Mobile criado com React Native para o teste prático da Web.art Group para a vaga de Desenvolvedor React Native.

O aplicativo consiste em cadastrar itens em uma lista de compras para facilitar a vida do usuário quando ele vai ao mercado.

Este aplicativo possui um campo para que o usuário possa digitar o nome do item que deseja comprar e também alista todos os itens já adicionados na lista.

### CARACTERÍSTICAS DO PROJETO

O projeto foi desenvolvido em React Native utilizando o Expo CLI. O aplicativo possui:

## <h4>Requisitos Obrigatórios </h4>

- :heavy_check_mark: O app deve ser desenvolvido em React Native;
- :heavy_check_mark: O app deve possuir um campo para cadastro de novos itens na lista;
- :heavy_check_mark: O app deve contabilizar alterar os estilos do item da lista caso este item esteja selecionado;
- :heavy_check_mark: O app deve permitir a exclusão de itens da lista, sendo que é necessário confirmar com o usuário se o item pode realmente ser excluído;
- :heavy_check_mark: O app deve apresentar a mensagem de “nenhum item na lista” caso nenhum item tenha sido adicionado.

## <h4>Requisitos Opcionais </h4>

- :heavy_check_mark: Splash screen;
- :heavy_check_mark: Persistir os itens da lista para que o usuário possa fechar o app sem perder os dados;
- :heavy_check_mark: Confirmar com o usuário se deseja realmente fechar o app;
- :heavy_check_mark: Permitir edição do nome do item da lista;
- :heavy_check_mark: Executar um som ao selecionar/remover seleção de um item da lista.

### CARACTERÍSTICA ADICIONAL

---

Além das características obrigatórias e opcionais, o aplicativo também possui uma característica adicional:

- Excluir os itens selecionados;

## INSTALAÇÃO DO PROJETO

1. Clone o repo
   ```sh
   gh repo clone Agev-Projects/shoplist-react-native-app
   ```
2. Instale os pacotes
   ```sh
   npm install
   ```
3. Inicie o cliente
   ```sh
   npm start
   ```

### DEPENDÊNCIAS DO PROJETO

Dependências do projeto

```
"@expo-google-fonts/roboto": "^0.2.2",
"@react-native-async-storage/async-storage": "~1.15.0",
"expo": "~44.0.0",
"expo-av": "~10.2.0",
"expo-font": "~10.0.4",
"expo-status-bar": "~1.2.0",
"react": "17.0.1",
"react-dom": "17.0.1",
"react-native": "0.64.3",
"react-native-bouncy-checkbox": "^2.1.10",
"react-native-web": "0.17.1",
"uuid": "^3.4.0"
```
