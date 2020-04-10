import React, { useReducer, createContext, PropsWithChildren } from "react";
import { Recipe } from "../../models/recipe";
import { Config } from "../../static/config";
import { ContextStatus } from "../status";

type SearchParams = { query: string; userId?: number };

type RecipeContextState = {
  recipes: Recipe[];
  status: ContextStatus;
  search: (params: SearchParams) => void;
};

const initialState: RecipeContextState = {
  recipes: [],
  status: ContextStatus.INIT,
  search: () => {}, // dummy
};

enum Type {
  FETCHING = "FETCHING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

const reducer = (
  state: RecipeContextState,
  { type, recipes }: { type: Type; recipes?: Recipe[] }
): RecipeContextState => {
  switch (type) {
    case Type.FETCHING:
      return { ...state, status: ContextStatus.LOAD };
    case Type.SUCCESS:
      // recipes will be defined on success hence recipes!
      return { ...state, status: ContextStatus.NORMAL, recipes: recipes! };
    case Type.ERROR:
      return { ...state, status: ContextStatus.ERROR };
    default:
      return state;
  }
};

export const RecipeContext = createContext(initialState);

export const RecipeProvider = ({ children }: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = async (params: SearchParams) => {
    dispatch({ type: Type.FETCHING });
    fetch(`${Config.API.BASE_PATH}${Config.API.RECIPE}?query=${params.query}`)
      .then((resp) => resp.json())
      .then((recipes: Recipe[]) => dispatch({ type: Type.SUCCESS, recipes }))
      .catch(() => dispatch({ type: Type.ERROR }));
  };

  return (
    <RecipeContext.Provider value={{...state, search}}>{children}</RecipeContext.Provider>
  );
};
