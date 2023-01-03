import React from "react"
import { Link } from 'react-router-dom';


const ReallocationRequestDetails = (props) => {

    return (
        <>
   <div className="container-fluid my-4">
      <div className="row mx-3">
      <div className="col-md-12 ">
        <h1>REQUEST INFO</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took 
a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus 
PageMaker including versions of Lorem Ipsum.</p>
<p className="mt-5">(Name) / Head of division: <b>Approved</b></p>
<p>(Name) / Cheif finencial officer : <b>Pending</b></p>
<p>(Name) / Original cost center: <b>Decline</b></p>
<p>(Name) / Reallocation cost center : <b>Approved</b></p>
            </div>
      </div>
   </div>
        </>
    )
}
export default ReallocationRequestDetails