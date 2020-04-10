import React, { useReducer, createContext, PropsWithChildren } from "react";
import { ContextStatus } from "../status";

interface CrudState<Entity> {
  items: Entity[];
  status: ContextStatus;
  load: () => void;
  save: (item: Entity) => void;
  remove: (item: Entity) => void;
}

enum Type {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR"
}

const createReducer = <Entity, State>() => (
  state: State,
  { type, items }: { type: Type; items?: Entity[] }
): State => {
  switch (type) {
    case Type.LOADING:
      return { ...state, status: ContextStatus.LOAD };
    case Type.SUCCESS:
      return { ...state, status: ContextStatus.NORMAL, recipes: items! };
    case Type.ERROR:
      return { ...state, status: ContextStatus.ERROR };
    default:
      return state;
  }
};

export function baseCrudContext<T>(uri: string) {
  const initialState: CrudState<T> = {
    items: [],
    status: ContextStatus.INIT,
    load: () => {}, // dummy
    save: () => {}, // dummy
    remove: () => {} // dummy
  };

  const Context = createContext(initialState);
  const Provider = ({ children }: PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(
      createReducer<T, CrudState<T>>(),
      initialState
    );

    const load = async () => {
      dispatch({ type: Type.LOADING });
      fetch(uri)
        .then(resp => resp.json())
        .then((items: T[]) => dispatch({ type: Type.SUCCESS, items }))
        .catch(() => dispatch({ type: Type.ERROR }));
    };

    const save = async (item: T) => {
      dispatch({ type: Type.LOADING });
      fetch(uri, { method: "POST", body: JSON.stringify(item) })
        .then(() => load())
        .catch(() => dispatch({ type: Type.ERROR }));
    };

    const remove = async (item: T) => {
      dispatch({ type: Type.LOADING });
      fetch(uri, { method: "DELETE", body: JSON.stringify(item) })
        .then(() => load())
        .catch(() => dispatch({ type: Type.ERROR }));
    };
    return (
      <Context.Provider value={{ ...state, load, save, remove }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
