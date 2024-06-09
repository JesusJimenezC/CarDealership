import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  seedBrands(brands: Brand[]) {
    this.brands = brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let updatedBrand = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        updatedBrand.updatedAt = new Date().getTime();
        updatedBrand = { ...updatedBrand, ...updateBrandDto };
        return updatedBrand;
      }

      return brand;
    });

    return updatedBrand;
  }

  remove(id: string) {
    this.findOne(id);

    this.brands = this.brands.filter((brand) => brand.id !== id);

    return `Brand ${id} removed successfully`;
  }
}
