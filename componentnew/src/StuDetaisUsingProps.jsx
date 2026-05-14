const Student=(props)=>{

    return(
        <div>
        <h1>Name :{props.name} </h1>
        <h2>Age ={props.age} <br></br>Email ={props.email }</h2>
          <img src={props.img} alt="Student" width="200" />
        </div>


    )


}

export default Student;