
import { useState } from "react";
import "./Employee.css";
const Employee=()=>{

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[salary,setSalary]=useState("");
    const[date,setDate]=useState("");
    
    return(
        <>
        <h2> Employee From </h2>
            <div className="container">
                <from className="employee-form">


               <div className=".form-row">
                <label >Name </label>  <input type="text" value={name} 
                onChange={(e)=>setName(e.target.value)}></input>
                </div><br/> 


              <div className=".form-row"><label >Email </label>  
              <input type="text" onChange={(e)=>setEmail(e.target.value)}>
              </input></div><br/>


              <div className=".form-row"><label >Salary </label>  <input type="text" onChange={(e)=>setSalary(e.target.value)}>
              </input></div><br/>

              <div className=".form-row"><label> Date</label><input type="date" onChange={(e)=>setDate(e.target.value)}></input></div><br/>

              <button onClick={(e)=>setEmployee(e.target.value)}>Submit</button>

              </from>

            </div>
            <br/>
            <h1>Name : {name}</h1> <br/>
            <h1>Email :{email}</h1><br/>
            <h1>salary :{salary}</h1><br/>
            <h1>Date :{date}</h1><br/>

            </>
    )
}

export default Employee;