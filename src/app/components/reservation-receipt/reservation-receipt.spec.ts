import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationReceipt } from './reservation-receipt';

describe('ReservationReceipt', () => {
  let component: ReservationReceipt;
  let fixture: ComponentFixture<ReservationReceipt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationReceipt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationReceipt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
