import './App.css';

const App = () => {
return (
  <div className="App">
    <div className="header">
      <div>todo list</div>
      <div>react</div>
    </div>
  
  <div className="form-container">
    <input type="text" placeholder="제목" />
    <input type="text" placeholder="내용" />
    <button>추가하기</button>
  </div>
  <div className="progress-container">
    <div>working..🔥</div>
  </div>
  <div className="complete-container">
    <div>done..!🏆</div>
  </div>
  </div>
)
};

export default App;