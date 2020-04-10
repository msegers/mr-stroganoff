import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RecipeHop } from './recipe-hop';
import { RecipeFermentable } from './recipe-fermentable';
import { RecipeYeast } from './recipe-yeast';
import { RecipeMisc } from './recipe-misc';
import { IsDefined } from 'class-validator';
import { PreparationStep } from './preparation-step';

enum BeerType {
  ALT = 'ALT',
  AMBER = 'AMBER',
  BARLEYWINE = 'BARLEYWINE',
  BERLINER_WEISSE = 'BERLINER_WEISSE',
  BITTER = 'BITTER',
  BLONDE = 'BLONDE',
  BOCK = 'BOCK',
  BROWN = 'BROWN',
  STEAM = 'STEAM',
  CREAM = 'CREAM',
  DORTMUNDER = 'DORTMUNDER',
  DOPPELBOCK = 'DOPPELBOCK',
  DUNKEL = 'DUNKEL',
  DUNKELWEIZEN = 'DUNKELWEIZEN',
  EISBOCK = 'EISBOCK',
  FLANDERS_RED = 'FLANDERS_RED',
  GOLD = 'GOLD',
  GOSE = 'GOSE',
  GEUZE = 'GEUZE',
  HEFEWEIZEN = 'HEFEWEIZEN',
  HELL = 'HELL',
  IPA = 'IPA',
  KOLSCH = 'KOLSCH',
  LAMBIC = 'LAMBIC',
  LIGHT = 'LIGHT',
  MAIBOCK = 'MAIBOCK',
  MALT_LIQUOR = 'MALT_LIQUOR',
  MILD = 'MILD',
  MARZEN = 'MARZEN',
  OLD = 'OLD',
  OUD_BRUIN = 'OUD_BRUIN',
  PALE = 'PALE',
  PILS = 'PILS',
  PORTER = 'PORTER',
  RED = 'RED',
  RYE = 'RYE',
  SAISON = 'SAISON',
  SCOTCH = 'SCOTCH',
  STOUT = 'STOUT',
  SCHWARZ = 'SCHWARZ',
  VIENNA = 'VIENNA',
  WIT = 'WIT',
  WEISS = 'WEISS',
  WEIZEN = 'WEIZEN',
}

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  @IsDefined()
  name: string;
  @Column({ nullable: false })
  maischWater: number;
  @Column({ nullable: false })
  filterWater: number;
  @Column()
  ibu: number;
  @Column()
  ebu: number;
  @Column()
  alcohol: number;
  @Column({ nullable: false, enum: BeerType })
  type: BeerType;

  @OneToMany(
    () => PreparationStep,
    step => step.recipe,
  )
  steps: PreparationStep[];
  @OneToMany(
    () => RecipeFermentable,
    fermentable => fermentable.recipe,
    { cascade: true, eager: true },
  )
  fermentables: RecipeFermentable[];
  @OneToMany(
    () => RecipeHop,
    hop => hop.recipe,
    { cascade: true, eager: true },
  )
  hops: RecipeHop[];
  @OneToMany(
    () => RecipeYeast,
    yeast => yeast.recipe,
    { cascade: true, eager: true },
  )
  yeast: RecipeYeast[];
  @OneToMany(
    () => RecipeMisc,
    misc => misc.recipe,
    { cascade: true, eager: true },
  )
  misc: RecipeMisc[];
}
