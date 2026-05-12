
import './Counters.css'
import { useState } from 'react';
const Counters = () => {

        const[num1 , setNum1]=useState("");
        const[num2 , setNum2]=useState("");
      


    const addNumber =()=>{
     const result = confirm("Do you want to add numbers?");

    if(result){
        const sum =Number(num1)+Number(num2);
        alert(`Addition Success = ${sum}`);
         setNum1("");
        setNum2("");
    }
    else{
        alert("Cancelled");
    }
    };

    const subNumber=()=>{
        
        const result =confirm("Do you want subtraction?");
        if (result){
            const sub =Number(num1)-Number(num2);
             alert(`Subtraction Success = ${sub}`);
              setNum1("");
             setNum2("");
        }
        else{
            alert("cancelled");
        }
    };

    return (
        <div className="counter-container">
            <div >
                <input className="input-box" placeholder="Enter first number  " 
                value={num1}
                onChange={(e)=>setNum1(e.target.value)}
                
                ></input>
  
                <input className="input-box" placeholder='Enter second number '
                value={num2}
                onChange={(e)=>setNum2(e.target.value)}></input>
            </div>
            <button onClick={addNumber}className="btn add-btn">
                Addtion</button>
            <button onClick={subNumber}className="btn  sub-btn" >
                Subtration</button>
             


               <div>
               
                </div> 
        </div>
    )
};
export default Counters;

