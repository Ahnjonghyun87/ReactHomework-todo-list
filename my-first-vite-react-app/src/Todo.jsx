const Todo = ({
  id,
  title,
  description,
  isDone,
  onDeleteTodo,
  onChangeTodoState,
}) => {
  return (
    <li className="todoCard">
      <div>{title}</div>
      <div>{description}</div>
      <div className="button-container">
        <button onClick={() => onDeleteTodo(id)}>삭제</button>
        <button onClick={() => onChangeTodoState(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
};

export default Todo;
