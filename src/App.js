import { useRef } from "react";

function App(){
  const myref = useRef(null);
   let change = () =>{
    myref.current.innerHTML="bye"
   }
  console.log(myref)
  return <div ref={myref} onClick={change}>Hello</div>
}


export default App