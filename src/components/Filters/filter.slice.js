// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const FilterReducer = (state = initState, action) => {
  //   switch (action.type) {
    //     case "filter/searchFilterChange":
    //       return {
      //         ...state,
//         search: action.payload,
//       };
//     case "filter/statusFilterChange":
//       return {
  //         ...state,
  //         status: action.payload,
  //       };
  //     case "filter/priorityFilterChange":
  //       return {
    //         ...state,
    //         priority: action.payload,
    //       };
    //     default:
    //       return state;
    //   }
    // };
    
import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    //xử lí object kiểu inmutation (không trực tiếp)
    //với kiểu mutation (trực tiếp) lên object (IMMER) 
    searchFilterChange: (state, action) => {
        state.search = action.payload
    }, //tự tạo action
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action) => {
        state.priority = action.payload
    }
  }
});

export default FilterSlice;

