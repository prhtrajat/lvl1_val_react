const error = {
  name: '',
  email: '',
  age: '',
  guestName: ''
}

export const validation = (value) => {

  //  name validation
  if (value.name == "") {
    error.name = "Name is required";
  } else {
    error.name = "";
  }

  // email validation
  if (value.email == "") {
    error.email = "Email is required";
  }else if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value.email)){
    error.email = "Ensure correct format";
  }else{
    error.email = "";
  }

  // age validation
  if(!value.age){
    error.age = "Enter Age";
  }else if(value.age == 0){
    error.age = "age cannot be 0";
  }else{
    error.age = "";
  }

  //guestName validation
  if(value.guestName == ""){
    error.guestName = "Guest Name is required";
  }else{
    error.guestName = "";
  }

  console.log(error);
  return error;
}

export const resetForm = () => {
  document.getElementById("eventForm").reset();
}

