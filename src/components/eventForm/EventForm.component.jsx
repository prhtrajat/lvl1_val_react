import { useState } from "react";
import FormElement from "../formElement/FormElement.component";
import {validation, resetForm} from "../validation/validation";
import FinalSummary from "../finalSummary/FinalSummary.component";

const defaultValue = {
  name: '',
  email: '',
  age: '',
  guest: false,
  guestName: 'NA'
}

const EventForm = () => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState({
    name: '',
    email: '',
    age: '',
    guestName: ''
  });
  const [isValid, setIsValid] = useState(0);



  const OnChangeHandler = (event) => {

    setValue(prevValue => ({
      ...prevValue,
      [event.target.id]: event.target.value
    }));

    const yesGuest = document.getElementById('yes');
    const noGuest = document.getElementById('no');


    if(yesGuest.checked == true){

      setValue(prevValue => ({
        ...prevValue, 
        guest: true,
      }))
      
    }

    if(noGuest.checked == true){
      setValue(preValue => ({
          ...preValue,
        guest: false,
        }))
    }

    setError(validation(value));
  }

  const onSubmitHandler = (event) => {

    event.preventDefault();
    const errorList = validation(value);
    setError(errorList);
    setIsValid(1);
    Object.values(errorList).map((value)=>{
     
      if(!(value == "")){
        setIsValid(0);
      }

    })
    if(isValid){
      
      console.log("successfull");
      resetForm();
      

    }
    

  }

  return (

    <div className="row pt-5 justify-content-center">
      {console.log("render")}
      <div className="col-6 d-block">
        <form onSubmit={onSubmitHandler} id="eventForm" noValidate>
          <FormElement id="name" label="Name" type="text" onChange={OnChangeHandler} error={error} elementType={"form-group"} inputType={"form-control"} />
          <FormElement id="email" label="Email" type="email" onChange={OnChangeHandler} error={error} elementType={"form-group"} inputType={"form-control"} />
          <FormElement id="age" label="Age" type="number" onChange={OnChangeHandler} error={error} elementType={"form-group"} inputType={"form-control"} />
          
          <span>Are you attending with a guest? <i className=" text-danger ms-auto">*</i></span>
          <FormElement id="yes" label="yes" name="guest-check" onChange={OnChangeHandler} error={error} type="radio" elementType={"form-check"} inputType={"form-check-input"} />
          <FormElement id="no" label="no" name="guest-check" onChange={OnChangeHandler} error={error} type="radio" elementType={"form-check"} inputType={"form-check-input"} />
          
          {
            value.guest ? (
              <FormElement id="guestName" label="Guest Name" type="text" onChange={OnChangeHandler} error={error} elementType={"form-group"} inputType={"form-control"} />
            ) : <></>
          }

          <button type="submit" className="btn btn-success text-light w-100 my-3 mx-0">Submit</button>
        </form>

        
      </div>
      <div id="summary" className="row py-5 justify-content-center" >
       {
        isValid ? (<FinalSummary value = {value} />):<></>
       }
      </div>
    </div>
  )
}

export default EventForm;
