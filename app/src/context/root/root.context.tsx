import React, { PropsWithChildren } from 'react';
import { RecipeProvider } from '../recipe/recipe.context';
import { FermentableProvider } from '../fermentable/fermentable.context';

const RootProviders = [
  RecipeProvider,
  FermentableProvider
];

// helper recursive component which will loop untill all provides are provided
const ProviderProvider = ({
  children,
  providers,
}: PropsWithChildren<{ providers: React.FunctionComponent[] }>) => {
  const [Provider, ...remainingProviders] = providers;
  if (remainingProviders.length) {
    return (
      <Provider>
        <ProviderProvider children={children} providers={remainingProviders} />
      </Provider>
    );
  } else {
    return <Provider>{children}</Provider>;
  }
};

// not an actual provider, just wrapping all providers here
export const RootProvider = ({children}: PropsWithChildren<any>) => {
  return <ProviderProvider providers={RootProviders}>{children}</ProviderProvider>
}