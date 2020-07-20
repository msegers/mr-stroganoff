import { Entity, Column } from 'typeorm';
import { Ingredient } from './ingredient';

@Entity()
export class Fermentable extends Ingredient {
    @Column()
    sugarPercentage: string;
}