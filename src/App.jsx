import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [count1, setcount1] = useState(0);

  // useEffect runs every time 'count' changes
  useEffect(() => {
    document.title = `Count: ${count}, Count1: ${count1}`;
  }, [count, count1]); // Adding 'count1' to the dependency array

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={() => setcount1(count1 + 1)}>Count1: {count1}</button>
    </div>
  );
};

export default App;
