import { useState } from "react";

function App() {

  const [text, setText] = useState("Let's learn more about testing in React")
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{text}</p>
      <button 
        id="btn-message" 
        data-testid="btn-message" 
        style={{background: clicked ? "blue" : 'red', color: "white"}} 
        onClick={() => {
          setText("Testing is so fun!")
          setClicked(true)
        }}
      >Change Message</button>
    </div>
  );
}

export default App;
