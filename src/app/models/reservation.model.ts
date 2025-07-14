export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: {year: number, month: number, day: number};
  time: string;
  partySize: number;
  area: 'Main Hall' | 'Bar' | 'Riverside' | 'Riverside (Smoking)';
  allowChildren: boolean;
  allowSmoking: boolean;
}