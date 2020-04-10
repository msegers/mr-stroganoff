import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../models/recipe';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {} 
  
  @Get()
  async findAll() {
    return this.recipeService.findAll();
  }

  @Post()
  @Put()
  async create(@Body() recipe: Recipe) {
    return this.recipeService.save(recipe);
  }
}
