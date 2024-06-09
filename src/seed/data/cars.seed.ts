import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Camry',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Accord',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fusion',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Focus',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Malibu',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Impala',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Altima',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Maxima',
  },
];
