import { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const onClick = () => {
    const newValue = {
      title: title,
      description: description,
      isDone: false,
      id: new Date().getTime(),
    };

    setTodos((prev) => {
      return [...prev, newValue];
    });
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
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
      <div className="progress-container">
        <div>working..🔥</div>
        <ul className="todos">
          {todos.map(({ title, description, id, isDone }) => {
            return (
              <li className="todoCard" key={id}>
                <div>{title}</div>
                <div>{description}</div>
                <button>삭제</button>
                <button>완료</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-container">
        <div>done..!🏆</div>
      </div>
    </div>
  );
};
export default App;
