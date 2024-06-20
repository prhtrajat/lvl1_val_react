

const FinalSummary = ({value}) => {

  const {name, email, age, guestName} = value;

 return <>
 
 <div className="row py-5 justify-content-center" >

  <div className="col-8">
  <div className="card">
  <div className="card-body">
    <h3 className="card-title text-center py-3">Summary</h3>
    <table className="table">
      <tbody>
      <tr className="py-5">
        <th className="text-center">Name</th>
        <td className="text-center">{name}</td>
      </tr>
      <tr className="py-5">
      <th className="text-center">Email</th>
      <td className="text-center">{email}</td>
      </tr>
      <tr className="py-5">
        <th className="text-center">Age</th>
        <td className="text-center">{age}</td>
      </tr>
      <tr className="py-5">
        <th className="text-center">Guest</th>
        <td className="text-center">{guestName}</td>
      </tr>
      </tbody>
    </table>
   
  </div>
</div>
  </div>

  </div>

 </>
}

export default FinalSummary;