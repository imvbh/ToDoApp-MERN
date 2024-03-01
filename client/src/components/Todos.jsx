import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { ALL_TODOS, PENDING_TODOS,DONE_TODOS } from "../redux/actions/type.js";

import Todo from "./Todo.jsx";
import Tabs from "./Tabs.jsx";

export const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    } else if (currentTab === PENDING_TODOS) {
      return todos.filter((todo) => !todo.done);
    }
    
  }

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
      </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
