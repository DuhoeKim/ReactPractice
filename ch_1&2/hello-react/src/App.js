import "./App.css";
function App() {
  let name = "김두회";

  return (
    <div className="App">
      <h1>{name || "리액트"}</h1>
      <h2>좆같이 들여쓰기</h2>
    </div>
  );
}

export default App;
