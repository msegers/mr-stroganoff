import { Module } from '@nestjs/common';
import { RecipeService } from './service/recipe.service';
import { RecipeController } from './controllers/recipe.controller';
import { Recipe } from './models/recipe';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
