import User from "./User";

function App(){

  const users = [{id:'21', name:'goutham', Age:'23'},
    {id:'22', name:'ganesh', Age:'24'},
    {id:'24', name:'sandeep', Age:'25'},
    {id:'25', name:'manoj', Age:'23'}
  ];
  return(
    <div>
      {
        [
          users.map((user)=>{
           return <User key={user.id}id={user.id} name={user.name} Age = {user.Age}/>
          })
        ]
      }  
    </div>
  );
}

export default App