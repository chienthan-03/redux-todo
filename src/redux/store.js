// import { createStore } from "redux";
// import TodoListReducer from "../components/TodoList/todoList.slice";
// import FilterReducer from "../components/Filters/filter.slice";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension'
// const composeEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composeEnhancers)

import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "../components/Filters/filter.slice";
import TodoListSlice from "../components/TodoList/todoList.slice";

// export default store

const store = configureStore({
    reducer: {
        todoList: TodoListSlice.reducer,
        filter: FilterSlice.reducer
    }
})

export default store