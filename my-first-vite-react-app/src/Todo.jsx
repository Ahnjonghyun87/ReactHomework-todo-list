const Todo = ({ id, title, description, onDeleteTodo, onChangeTodoState }) => {
  return (
    <li className="todoCard">
      <div>{title}</div>
      <div>{description}</div>
      <button onClick={() => onDeleteTodo(id)}>삭제</button>
      <button onClick={() => onChangeTodoState(id)}>완료</button>
    </li>
  );
};

export default Todo;
