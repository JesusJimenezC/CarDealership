import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[];

  seedCars(cars: Car[]) {
    this.cars = cars;
  }

  getCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const newCar = { ...createCarDto, id: uuid() };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    const carById = this.getCarById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Param id and body id should be the same');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        return { ...carById, ...updateCarDto, id };
      }
      return car;
    });

    return carById;
  }

  deleteCar(id: string) {
    this.getCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return `Car with id '${id}' has been deleted`;
  }
}
