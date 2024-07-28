import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  legacyAddTodo,
  legacyDeleteTodo,
  legacyToggleTodo,
  toggleTodo,
} from "../store/todoSlice";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const legacyTodos = useSelector((state) => state.legacyTodos);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setNewTodo(evt.target.value);
  };

  const handleClick = () => {
    newTodo && dispatch(addTodo(newTodo));
  };

  const handleLegacyClick = () => {
    newTodo && dispatch(legacyAddTodo(newTodo));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleLegacyToggle = (id) => {
    dispatch(legacyToggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleLegacyDelete = (id) => {
    dispatch(legacyDeleteTodo(id));
  };

  return (
    <div className="m-2">
      <input
        className="border border-black mr-2"
        placeholder="Meeting at 5pm"
        type="text"
        value={newTodo}
        onChange={handleChange}
      />
      <button className="px-2 mx-1 bg-green-300" onClick={handleClick}>
        Add Todo
      </button>
      <button className="px-2 mx-1 bg-green-300" onClick={handleLegacyClick}>
        Legacy Add Todo
      </button>
      <div className="flex justify-between m-2">
        <div>
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="m-1 p-2 rounded-sm shadow-md">
                <button
                  className="mr-2 text-2xl"
                  onClick={() => handleDelete(todo.id)}
                >
                  🗑️
                </button>
                <button
                  className="mr-2 text-2xl"
                  onClick={() => handleToggle(todo.id)}
                >
                  📝
                </button>
                <span>{`${todo.completed ? "✅" : "🔴"} ${todo.text}`}</span>
              </div>
            );
          })}
        </div>
        <div>
          {legacyTodos.map((todo) => {
            return (
              <div key={todo.id} className="m-1 p-2 rounded-sm shadow-md">
                <button
                  className="mr-2 text-2xl"
                  onClick={() => handleLegacyDelete(todo.id)}
                >
                  🗑️
                </button>
                <button
                  className="mr-2 text-2xl"
                  onClick={() => handleLegacyToggle(todo.id)}
                >
                  📝
                </button>
                <span>{`${todo.completed ? "✅" : "🔴"} ${todo.text}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
