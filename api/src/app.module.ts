import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { Recipe } from './recipe/models/recipe';
import { Fermentable } from './recipe/models/fermentable';
import { Hop } from './recipe/models/hop';
import { Misc } from './recipe/models/misc';
import { Yeast } from './recipe/models/yeast';
import { RecipeFermentable } from './recipe/models/recipe-fermentable';
import { RecipeHop } from './recipe/models/recipe-hop';
import { RecipeYeast } from './recipe/models/recipe-yeast';
import { RecipeMisc } from './recipe/models/recipe-misc';
import { PreparationStep } from './recipe/models/preparation-step';

@Module({
  imports: [RecipeModule, TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'orval',
      password: 'stroganoff',
      database: 'stroganoff',
      entities: [Recipe, Fermentable, Hop, Yeast, Misc, RecipeFermentable, RecipeHop, RecipeYeast, RecipeMisc, PreparationStep],
      synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude({ path: '(.*)', method: RequestMethod.GET })
      .forRoutes('*');
  }
}
