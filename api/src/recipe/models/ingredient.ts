import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
