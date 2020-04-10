import { Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Ingredient } from './ingredient';
import { Recipe } from './recipe';
import { Hop } from './hop';

@Entity()
export class RecipeHop extends Ingredient {
  @ManyToOne(type => Recipe, recipe => recipe.hops)
  recipe: Recipe;
  
  @OneToOne(type => Hop, { nullable: false, eager: true })
  @JoinColumn()
  hop: Hop;
}