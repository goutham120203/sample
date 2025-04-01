function User(props){
    return(
        <div>
            <h3>Id: {props.id}</h3>
            <h4>Name:{props.name}</h4>
            <p>Age:{props.Age}</p>
        </div>
    )
}

export default User