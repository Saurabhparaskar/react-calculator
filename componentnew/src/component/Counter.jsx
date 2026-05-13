
import './Counters.css'
import { useState } from 'react';
const Counters = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const clearInputs = () => {
        setNum1("");
        setNum2("");
    };
   
    const InputBoxEmpty = () => {
    if (num1 === "" || num2 === "") {
        alert("Please enter numbers");
        return true;
    }

    return false;
}
    const addNumber = () => {
         if (InputBoxEmpty()) return;
        const result = confirm("Do you want to add numbers?");
       
        if (result) {
            
            const sum = Number(num1) + Number(num2);
            alert(`Addition Success = ${sum}`);
            clearInputs();
        }
        else {
            alert("Cancelled");
        }
    };
    const subNumber = () => {
        if (InputBoxEmpty()) return;

        const result = confirm("Do you want subtraction?");
        if (result) {
            const sub = Number(num1) - Number(num2);
            alert(`Subtraction Success = ${sub}`);
            clearInputs();
        }
        else {
            alert("cancelled");
        }
    };
    const division = () => {
        if (InputBoxEmpty()) return;
        const result = confirm("Do you want division");
        if (result) {
            const div = Number(num1) / Number(num2);
            alert(`Division successfully =${div}`);
            clearInputs();
        }
        else {
            alert("Cancelled");
        }

    }
    const multiplication = () => {
        if (InputBoxEmpty()) return;
        const result = confirm("do you want Multiplication");

        if (result) {
            const mul = Number(num1) * Number(num2);
            alert(`Multiplication Succesfully =${mul}`);
            clearInputs();
        }
        else {
            alert("Cancelled");
        }
    }

    return (
        <div className="counter-container">
            <div >
                <input className="input-box" placeholder="Enter first number  "
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}

                ></input>

                <input className="input-box" placeholder='Enter second number '
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}></input>
            </div>
            <div>
                <button onClick={addNumber}  className="btn add-btn">
                    Addition</button>
                <button  onClick={subNumber} className="btn  sub-btn" >
                    Subtraction</button>

                <button onClick={division} className="btn div-btn">Division</button>

                <button onClick={multiplication} className="btn mul-btn">Multiplication</button>

            </div>
            <div>

            </div>
        </div>
    )
};
export default Counters;

