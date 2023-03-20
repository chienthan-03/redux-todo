import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const TodoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload]
//     default:
//       return state;
//   }
// };

// export default TodoListReducer;

const TodoSlice = createSlice({
  name: "todoList",
  initialState: { status: "complete", todos: [] },
  // reducers: {
  //   addTodo : (state, action) => {
  //     state.todos.push(action.payload)
  //   }
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "complete";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  console.log({ data });
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

export default TodoSlice;
