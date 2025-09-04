export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export type TodoList = Todo[];