


const FormElement = ({id, label, type, elementType, inputType, name, onChange, error}) => {


 return(
  <div className={elementType}>

  <label className="w-100 justify-content-between" htmlFor={id}>{label} {
    (elementType == "form-group") ? <> <p className="ms-auto text-end text-danger d-inline"> {`${error[`${id}`]}`} <i className=" text-danger text-end">*</i></p> </>:<></>
    }  </label>
  <input id={id} name={name} type={type} onChange={onChange} className={`${inputType} my-2`}></input>
</div>
 )
}

export default FormElement;