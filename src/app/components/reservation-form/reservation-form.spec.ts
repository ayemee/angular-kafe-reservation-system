import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationForm } from './reservation-form';


describe('ReservationForm', () => {
  let component: ReservationForm;
  let fixture: ComponentFixture<ReservationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark invalid form when required fields are empty', () => {
    component.form.reset();
    expect(component.form.valid).toBeFalse();
  });

  it('should check valid pattern', () => {
    component.form.controls['email'].setValue('im-wrong-email');
    expect(component.form.controls['email'].valid).toBeFalse();

    component.form.controls['email'].setValue('ayemeeizingvalid@email.com');
    expect(component.form.controls['email'].valid).toBeTrue();
  });

  it('should mark valid form when required fields are added', () => {
    component.form.setValue({
      name: 'Aimee Zing',
      email: 'aimee@zing.com',
      phone: '0914314300',
      date: '2025-07-24',
      time: '21:30',
      partySize: 4,
      area: 'Bar',
      allowChildren: false,
      allowSmoking: false,
    });

    expect(component.form.valid).toBeTrue();
  });

  it('should not allow partySize greater than 12', () => {
    component.form.controls['partySize'].setValue(15);
    expect(component.form.controls['partySize'].valid).toBeFalse();

    component.form.controls['partySize'].setValue(12);
    expect(component.form.controls['partySize'].valid).toBeTrue();
  });
});
