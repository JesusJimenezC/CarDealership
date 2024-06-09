import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'brand 1',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 2',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 3',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 4',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 5',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 6',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 7',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 8',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 9',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand 10',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
];
