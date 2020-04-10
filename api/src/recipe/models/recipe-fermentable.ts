import { Entity, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Recipe } from './recipe';
import { Fermentable } from './fermentable';
import { RecipeIngredient } from './recipe.ingredient';

@Entity()
export class RecipeFermentable extends RecipeIngredient {
  @ManyToOne( type => Recipe, recipe => recipe.fermentables)
  recipe: Recipe;

  @OneToOne(type => Fermentable, { nullable: false, eager: true })
  @JoinColumn()
  fermentable: Fermentable;
}
