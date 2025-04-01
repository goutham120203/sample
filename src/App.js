import React from "react";

class App extends React.Component{
  
  state={
    counter : 0
  }
  render(){
    return(
      <>
        <h1>this is the extra used</h1>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={()=>{
          this.setState({
            counter:this.state.counter+1
          })
        }}>change</button>

      </>
    )
  }

}


  

export default App;