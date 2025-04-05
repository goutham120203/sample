import Child from "./Child";

function Parent({message}){
    return(
        <div>
            <h1>Parent component</h1>
            <Child message={message} />
        </div>
    )
}

export default Parent;