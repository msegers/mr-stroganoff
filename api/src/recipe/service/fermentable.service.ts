import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fermentable } from '../models/fermentable';

@Injectable()
export class FermentableService {
  constructor(
    @InjectRepository(Fermentable) private fermentableRepository: Repository<Fermentable>,
  ) {}

  async findAll() {
    return await this.fermentableRepository.find();
  }

  async save(fermentable: Fermentable) {
    return this.fermentableRepository.save(fermentable);
  }
}
