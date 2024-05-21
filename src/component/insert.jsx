import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);

  const handleSubmit = () => {
    const data = {
      field1: input1,
      field2: input2,
    };

    axios
      .post("http://api/v1/Sm/", data) // URL 수정 필요
      .then((response) => {
        console.log("Data saved successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the data:", error);
      });
  };

  return (
    <div>
      <h1>Insert Component</h1>
      <div>
        <input
          value={input1}
          onChange={handleInput1Change}
          placeholder="Input 1"
        />
      </div>
      <div>
        <input
          value={input2}
          onChange={handleInput2Change}
          placeholder="Input 2"
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Insert;
