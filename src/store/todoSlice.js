import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (todos, action) => {
      todos.push({
        id: nanoid(),
        completed: false,
        text: action.payload,
      });
    },

    toggleTodo: (todos, action) => {
      const todo = todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (todos, action) => {
      const todoIndex = todos.findIndex((todo) => todo.id === action.payload);
      todos.splice(todoIndex, 1);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;

/**
 * Legacy code
 */

const ADD_TODO = "todo/legacyAddTodo";
const TOGGLE_TODO = "todo/legacyToggleTodo";
const DELETE_TODO = "todo/legacyDeleteTodo";

export const legacyAddTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: { text, id: nanoid() },
  };
};

export const legacyToggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const legacyDeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const initialState = [];
export const legacyTodoReducer = (todos = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return todos.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });

    case TOGGLE_TODO:
      return todos.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

    case DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload);

    default:
      return todos;
  }
};
