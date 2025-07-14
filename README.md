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

To install packages:

```bash
npm i or npm i --force
```

To start a local development server, run:

```bash
ng serve
```
# ENJOY !!
