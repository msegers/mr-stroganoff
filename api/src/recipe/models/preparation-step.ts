import { Entity, OneToMany, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './recipe';

export enum PreparationType {
  WORT = 'WORT',
  BOIL = 'BOIL',
  HOP = 'HOP',
}

@Entity()
export class PreparationStep {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  order: number;
  @Column({ nullable: false })
  temperature: number;
  @Column({ nullable: false })
  time: number;
  @Column({ nullable: false })
  type: PreparationType;

  @OneToMany(
    () => Recipe,
    recipe => recipe.steps,
  )
  recipe: Recipe;
}
