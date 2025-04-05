import { useContext } from "react"
import { context } from "./App"
function Child(){
    let data = useContext(context)
    return(
        <div>
            <h1>Child component</h1>
            <h1>{data}</h1>
            
        </div>
    )
}

export default Child