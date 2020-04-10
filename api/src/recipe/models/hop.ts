import { Entity } from 'typeorm';
import { Ingredient } from './ingredient';

@Entity()
export class Hop extends Ingredient {}
