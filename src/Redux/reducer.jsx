import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    updateToDo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        } else {
          return todo;
        }
      });
    },

    completedToDo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addToDo, removeToDo, updateToDo, completedToDo } =
  addToDoReducer.actions;
export default addToDoReducer.reducer;
