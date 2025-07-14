# KafeReservationSystem ☕☕☕

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Features
- 30 minute time slot reservation (6:00 PM – 10:00 PM)
- date restriction between July 24–31**
- Party size limits and dynamic area rules:
  - Main Hall (max 12, children allowed, non-smoking)
  - Bar (max 4, no children, non-smoking)
  - Riverside (max 8, children allowed, non-smoking)
  - Riverside Smoking (max 6, no children, smoking)
- Collects user info for the reservation
  - Used Angular form validators(with custom date, time and area validator)
- Route guard on confirmation page(confirmation page conditions when page is being reloaded)
- NgRx Store + Facade architecture (getting/reseting reservation data)
- Full form validation (checking during form touched/submit)
- Basic unit testing for reservation inputs
- SCSS + Bootstrap 5 (for responsiveness and custom styling)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```


# ENJOY !!