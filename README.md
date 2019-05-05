# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Servindo a aplicação:

Rode `ng serve` para servir a aplicação, depois vá para http://localhost:4200 . Adicione a flag `--open` para abrir automaticamente no seu navegador.

## Estrutura do Projeto

Dentro de ```src/app``` temos a seguinte estrutura:

* **[components](https://angular.io/tutorial/toh-pt3)**: 
    Mostra os componentes que serão utilizado em certas páginas. Geralmente são partes repetidas ou que consomem grande parte da estrutura de uma página. Ex.: headers, footers, modais;

    ```bash
    ng g c components\nome-do-seu-component
    ````

* **pages**:
    Basicamente são as páginas do website. possuem a mesma estrutura de um component.Porém o que os diferenciam, é que as pages são roteadas ( declaradas dentro de ```app-routing.module.ts``` );
    
    ```bash
    ng g c pages\nome-da-sua-page
    ````
* **[services](https://angular.io/tutorial/toh-pt4)**:
    Qualquer lógica que envolva o acesso à um serviço externo fica dentro dessa pasta. Consulta de veículos do Gersite ou requisição post para o bingoos são exemplos de services que ficarão nesse diretório; 

    ```bash
    ng g s services\pasta-do-seu-service\nome-do-seu-service
    ````

* **[pipes](https://angular.io/guide/pipes)**: Utilizados como modificadores de mostragem de dados. Os Pipes são como formatadores, que por exemplo podem fazer contagem, modificar data, obtida através de um serviço;

    ```bash
    ng g p pipes\pasta-do-seu-pipe\nome-do-seu-pipe
    ```

### Dica:
> Para manter um padrão, é ideal que pipes e services possuam o mesmo nome, tanto na pasta como no arquivo em si.

Por exemplo, caso crie um pipe para transformar uma data, o comando para funcionar seria:
```bash
ng g p pipes\data-transform\data-transform
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

