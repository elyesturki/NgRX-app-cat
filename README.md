# NgRXAppCat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2. <br>
ngRx<br>
json-server<br>
Bootstrap 4.5<br>
Font Awesome 4.7<br>

## Development server
- Create <b>db.json</b> on your root project and push this content inside it: <br>
{
  "products": [
    {
      "id": 1,
      "name": "Computer",
      "price": 4300,
      "quantity": 800,
      "selected": true,
      "available": true
    },
    {
      "id": 2,
      "name": "Printer",
      "price": 300,
      "quantity": 100,
      "selected": false,
      "available": false
    },
    {
      "id": 3,
      "name": "Smartphone",
      "price": 1200,
      "quantity": 200,
      "selected": false,
      "available": true
    },
    {
      "id": 4,
      "name": "PC sam",
      "price": "500",
      "quantity": 200,
      "selected": true,
      "available": true
    },
    {
      "name": "top",
      "price": "22",
      "quantity": 300,
      "selected": true,
      "available": true,
      "id": 5
    }
  ]
} 
<br><br>

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
