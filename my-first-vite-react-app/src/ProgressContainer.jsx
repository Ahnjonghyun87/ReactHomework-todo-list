import React from "react";
import Todo from "./Todo";

const ProgressContainer = ({ todos, onDeleteTodo, onChangeTodoState }) => {
  return (
    <div className="progress-container">
      <div>working..🔥</div>
      <ul className="todos">
        {todos.map(({ title, description, id, isDone }) => {
          if (isDone) return null;

          return (
            <Todo
              key={id}
              id={id}
              title={title}
              description={description}
              isDone={isDone}
              onDeleteTodo={onDeleteTodo}
              onChangeTodoState={onChangeTodoState}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProgressContainer;
