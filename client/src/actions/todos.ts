import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data, // dispatch is an array of interface Todo
    });
  };
};

export const deleteTodo = (id: number): DeleteAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
