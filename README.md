<!-- VARS -->

[star-badge]: https://img.shields.io/github/stars/jiyose12/proffy-JoseFernandes?color=8257E5&logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/jiyose12/proffy-JoseFernandes?color=%238257E5
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/
[sqlite-url]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite/

<!-- VARS -->

<div align="center">  

<img width="500px" align="center" src="https://user-images.githubusercontent.com/54639269/89223832-dd796380-d5ad-11ea-9a39-fc852538ca13.png"></img>

</div>

<br>
<p align="center">
    Plataforma online para conectar professores com alunos, feito em Node.js, React.js e React Native com Typescript durante a<a src="https://nextlevelweek.com"> NLW (Next Level Week) #02</a>🚀
</p>

<div align="center">  
    
![Git Stars][star-badge]
![NLW Stats][nlw-badge]


</div>


### Conteúdo
* [Iniciando](#Iniciando-)
    * [Clonando](#Clonando)
    * [Requisitos](#Requisitos)
        * [Web](#Web)
        * [Server](#Server)
        * [Mobile](#Mobile)
    * [Executando](#Executando)

### Iniciando 🚀

#### Clonando

```ps
# Use o comando para clonar
$ git clone https://github.com/jiyose12/proffy-JoseFernandes.git

# Access the project folder
$ cd proffy-JoseFernandes
```

#### Requisitos
* [Node.js][node-url]
* [Yarn][yarn-url] or [npm][npm-url]
* [Expo][expo-url]

##### Web

Exemplo com yarn

```ps
$ cd web
$ yarn install
```

Exemplo com npm

```ps
$ cd web
$ npm install
```

##### Server 

Exemplo com yarn

```ps
$ cd server
$ yarn install
```

Exemplo com npm

```ps
$ cd server
$ npm install
```

Para iniciar o servidor, é necessário criar o banco com as migrações

```
$ yarn knex:migrate

```
> Caso queira visualizar os dados, você poderá baixar a extensão ![SQLite do VSCode][sqlite-url]

##### Mobile

Exemplo com yarn

```ps
$ cd mobile
$ yarn install
```

Exemplo com npm

```ps
$ cd mobile
$ npm install
```

É necessário instalar as fontes

```
# Installing all fonts used
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
```

#### Executando

Para executar entre em cada uma dsa pastas e digite o comando no terminal
Exemplo com yarn

```ps
$ yarn start
```

Exemplo com npm

```ps
$ npm start
```