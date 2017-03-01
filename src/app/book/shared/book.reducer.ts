import { Book } from "./book";

export interface BookState {
  id: number;
  entity: Book;
  isLoading: boolean;
  error: any;
}

//TODO initialState

// TODO bookReducer
