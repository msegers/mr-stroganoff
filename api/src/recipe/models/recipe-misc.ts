import { Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Recipe } from './recipe';
import { Misc } from './misc';
import { RecipeIngredient } from './recipe.ingredient';

@Entity()
export class RecipeMisc extends RecipeIngredient {
  @ManyToOne(
    type => Recipe,
    recipe => recipe.misc,
  )
  recipe: Recipe;

  @OneToOne(type => Misc, { nullable: false, eager: true })
  @JoinColumn()
  misc: Misc;
}
