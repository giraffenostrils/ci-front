import { useState } from "react";

import "./App.css";
import { getBoard, postBoard } from "./api/boardApi";

function App() {
  const [smPloject, setsmPloject] = useState([]);
  const [name, setName] = useState(null);
  const [text, setText] = useState(null);

  const submit = async () => {
    const body = { name, text };
    await postBoard(body);
  };

  const fetchdata = async () => {
    try {
      const response = await getBoard();
      console.log(response);
      setsmPloject(response.data);
    } catch (error) {}
  };

  return (
    <>
      <div>
        <input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          placeholder="text"
          onCanPlay={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={submit}>submit</button>
      </div>
    </>
  );
}

export default App;
