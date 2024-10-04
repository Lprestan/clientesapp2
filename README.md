Crud de clientes realizado con Angular17 no stanalone, con bootstrap como estilos css y json server como backend.
se utilizan diferenetes componentes como navegacion(menu de navegacion), nuevo cliente(modulo para agregar un registro),listado de clientes(donde se muestra la informacion de cada registro)
y las opciones de actualizar o editar y de eliminar cada registro.
se puede acceder a cada componente utilizando las rutas en Angular. 
y se utiliza un servicio (clienteservice) para cada una de las diferentes funciones en el crud.

# json server

antes de ciniciar el proyecto se debe iniciar el servicio de json server con el comando
npx json-server -w db/db.json

# Clientesapp2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
