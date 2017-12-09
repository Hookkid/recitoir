#### General Packages

| Required | Library | Version Range | Notes |
| ------------- | ------------- | ---| --- |
| ✔ | [Node.js](http://nodejs.com/)  | >= 7.10 | [nvm](https://github.com/creationix/nvm) is highly recommended for managing multiple node versions on a single machine |
| ✔ | [Visual Studio Code](https://code.visualstudio.com/)  | >= 1.14 | We'll be using several specific features of the VS Code editor. We can't force you to use it, but you'll miss out if you don't! |
| ✔ | [Yarn](https://yarnpkg.com/)  | >= 0.24 | An alternative to [npm](https://github.com/npm/npm) |
| ✔ | [Firefox](https://www.mozilla.org/en-US/firefox/new/)  | >= 50 | We'll need Firefox briefly in order to create certificates. |
| ✔ | [SQLite 3](http://sqlite.com/)  | >= 3 | Embedded database |

#### VS Code Extensions

| Required | Extension | Notes |
| ------------- | ------------- | --- |
| ✔ | [sass-indented](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented) | Syntax highlighting and code completion support for [Sass](http://sass-lang.com) stylesheets |
| ✔ | [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Static code analysis for JavaScript and JSX files |
| ✔ | [jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) | Syntax highlighting for [Jest snapshot testing](https://facebook.github.io/jest/docs/snapshot-testing.html) and in-editor test pass/fail statuses |
|   | [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) | Better file and folder icons |
|   | [rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) | An in-editor REST client, so we can experiment with our API effortlessly |


#### Global Node.js Packages

```
npm install -g <package-name>
```

| Required | Library | Version Range |
| ------------- | ------------- | ---|
| ✔ | [babel-eslint](https://github.com/babel/babel-eslint)  | ^7.0.0 |
| ✔ | [eslint](https://github.com/eslint/eslint) | ^4.0.0 |
| ✔ | [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)  | ^4.0.0 |
| ✔ | [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)  | ^7.1.0 |
| ✔ | [web-push](https://github.com/web-push-libs/web-push)  | ^3.0.0 |

```
yarn
```
```
npm run prepcerts
```

To start the server, run

```sh
npm run watch
```

# Creating Certificate

`npm run prepcerts`


# Clean Certificates and Dist

`npm run clean`
