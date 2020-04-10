import { baseCrudContext } from '../base/base-crud-context';
import { Fermentable } from '../../models/fermentable';
import { Config } from '../../static/config';

export const { Context: FermentableContext, Provider: FermentableProvider} = baseCrudContext<Fermentable>(`${Config.API.BASE_PATH}${Config.API.FERMENTABLE}`);