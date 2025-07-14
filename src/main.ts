import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app/app.routes';
import { reservationReducer } from './app/store/reservation.reducers';

bootstrapApplication(App, {
   providers: [
    provideRouter(routes),
    provideStore({
      reservation: reservationReducer,
    }),
  ],
}).catch((err) => console.error(err));