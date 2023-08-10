import todos from "../data/todoList.json";
import TodoItem from "./TodoItem";
const TodoList = () => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </div>
);
export default TodoList;
