import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class RecipeIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
}
