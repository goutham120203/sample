import User from "./User";

function App(){
  let counter = 0;

  function updateCounter(){
    ++counter;
    console.log(counter)
  }
  return(
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={updateCounter}>Change</button>
    </>
  );
}

export default App