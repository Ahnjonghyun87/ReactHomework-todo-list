import { useState } from "react";
import "./App.css";
import CompleteContainer from "./CompleteContainer";
import ProgressContainer from "./ProgressContainer";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const onClick = () => {
    if (!title.trim() || !description.trim()) {
      alert("내용을 입력해주세요");
      return;
    }

    const newValue = {
      title: title,
      description: description,
      isDone: false,
      id: new Date().getTime(),
    };

    setTodos((prev) => {
      return [...prev, newValue];
    });
    setTitle("");
    setDescription("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onDeleteTodo = (deleteId) => {
    setTodos((todos) => {
      return todos.filter(({ id }) => deleteId !== id);
    });
  };

  const onChangeTodoState = (targetId) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div className="App">
      <div className="header">
        <div>todo list</div>
        <div>react</div>
      </div>

      <div className="form-container">
        <input
          type="text"
          placeholder="제목"
          onChange={onChangeTitle}
          value={title}
        />
        <input
          type="text"
          placeholder="내용"
          onChange={onChangeDescription}
          value={description}
        />

        <button onClick={onClick}>추가하기</button>
      </div>

      <ProgressContainer
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onChangeTodoState={onChangeTodoState}
      />
      <CompleteContainer
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onChangeTodoState={onChangeTodoState}
      />
    </div>
  );
};

export default App;
