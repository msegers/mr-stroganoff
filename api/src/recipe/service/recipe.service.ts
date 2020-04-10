import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private recipesRepository: Repository<Recipe>,
  ) {}

  async findAll() {
    return await this.recipesRepository.find();
  }

  async save(recipe: Recipe) {
    return this.recipesRepository.save(recipe);
  }
}
