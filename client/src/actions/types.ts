import { FetchAction, DeleteAction } from "./todos";

export enum ActionTypes {
  fetchTodos, // = 0
  deleteTodo,
}

export type Action = FetchAction | DeleteAction;
