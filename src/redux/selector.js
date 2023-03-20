import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList.todos;
export const searchTextSelector = (state) => state.filter.search;
export const priorityFilterSelector = (state) => state.filter.priority;
export const statusFilterChange = (state) => state.filter.status;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterChange,
  priorityFilterSelector,
  (todoList, textSearch, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(textSearch) && priority.includes(todo.priority)
          : todo.name.includes(textSearch);
      }
      return (
        todo.name.includes(textSearch) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
