import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReservationFacade } from '../../store/reservation.facade';


@Component({
  selector: 'app-navigation',
  imports: [ RouterModule, CommonModule ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
  currentRoute:string = '';
  canShowConfirmation$: Observable<any>;

  constructor(
    private router: Router,
    private reservationFacade: ReservationFacade
  ) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => {
        this.currentRoute = e.urlAfterRedirects;
      });

      this.canShowConfirmation$ = this.reservationFacade.isReservationValid$;
  }

  isActive(path: string): boolean {
    return this.currentRoute === path;
  }
}