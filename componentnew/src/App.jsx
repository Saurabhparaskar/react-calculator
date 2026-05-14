import Counters from "./component/Counter"
import Employee from "./component/Employee"
import Student from "./StuDetaisUsingProps"
import TestImage from "./assets/TestImage.jpg";

function App() {
 

  return (
    <>
     <Counters/>
     <Employee></Employee>
     <Student name={"Saurabh Paraskar"}  age ={22} email ={"Sp@123"} img ={TestImage}
     >
      
     </Student>


    </>
  )
}

export default App
