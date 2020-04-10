import { Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Recipe } from './recipe';
import { Yeast } from './yeast';
import { RecipeIngredient } from './recipe.ingredient';

@Entity()
export class RecipeYeast extends RecipeIngredient {
  @ManyToOne(
    () => Recipe,
    recipe => recipe.yeast,
  )
  recipe: Recipe;

  @OneToOne(() => Yeast, { nullable: false, eager: true })
  @JoinColumn()
  yeast: Yeast;
}