import "./App.css";
import React, { useState } from "react";
import Text from "./components/style";
function App() {
  const [text, setText] = useState([]);
  const [value, setValue] = useState({ id: Math.random(), message: "" });
  const TextHandler = (e) => {
    setValue({ id: Math.random(), message: e.target.value });
  };
  const onAdd = () => {
    setText([...text, value]);
    setValue({ id: Math.random(), message: "" });
  };
  const onDelete = (index) => {
    const array = text.filter((item) => item.id !== index);
    setText(array);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List!</h1>
        <div>
          {text.map((item, index) => (
            <Text
              text={item.message}
              key={index}
              onDelete={() => {
                onDelete(item.id);
              }}
            />
          ))}
        </div>
        <input onChange={TextHandler} value={value.message} />
        <button onClick={onAdd}> Add</button>
      </header>
    </div>
  );
}

export default App;