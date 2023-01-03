import React from "react"
import { Link } from 'react-router-dom';


const ProcurementApproverDetails = (props) => {

    return (
        <>
   <div className="container-fluid my-4">
      <div className="row mx-3 border border-dark rounded py-3">
      <div className="col-md-12 ">
        <h1>REQUEST INFO</h1>
        <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took 
a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus 
PageMaker including versions of Lorem Ipsum.</p>
<h3 className="mt-5 mb-3 mx-4">Comments</h3>
<textarea name="" className="form-control w-75 mx-4" id="" cols="20" rows="3"></textarea>
<div className="row">
    <div className="col-md-6 text-center"><Link to="/dashboard"><input type="submit"  className="my-5 bg-white text-dark border border-dark rounded-0 text-center py-3 font-weight-bold" value="Accept" style={{cursor:"pointer"}} /></Link></div>
    <div className="col-md-6 text-left"><Link to="/dashboard"><input type="submit"  className="my-5 bg-white text-dark border border-dark rounded-0 text-center py-3 font-weight-bold" value="Decline" style={{cursor:"pointer"}} /></Link></div>
</div>
            </div>
      </div>
   </div>
        </>
    )
}
export default ProcurementApproverDetails