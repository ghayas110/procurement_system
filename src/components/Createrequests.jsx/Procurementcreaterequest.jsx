import React,{useState,useEffect} from "react"
import { Link } from 'react-router-dom';
import Modal from "react-modal";


const ProcurementCreateRequest = (props) => {
    const [SuccessModal, setSuccessModal] = useState(false);

    return (
        <>
   <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-10 text-center py-5">
            <h1>MAP INFORMATION</h1>
        </div>
      <div className="col-md-10 ">
      <table className="table table-bordered border-dark table-responsive rounded">
        <thead>
        <tr>
            <th scope="row" colSpan={4}>Original Approved Budget</th>
            <th colSpan={4} scope="row">Re-allocation Budget</th>
          </tr>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Original Cost Centre</th>
            <th scope="col">Original Budget Description</th>
            <th scope="col">Original Budget Amount</th>
            <th scope="col">Relocate To Cost Centre</th>
            <th scope="col">Relocate Budget Description</th>
            <th scope="col">Relocate Amount</th>
            <th scope="col">Balance Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th ><b>1</b></th>
            <td><input type="text" className="form-control" name="" id="" /></td>
            <td><input type="text" className="form-control" name="" id="" /></td>
            <td><input type="text" className="form-control" name="" id="" /></td>
            <td ><input type="text" className="form-control" name="" id="" /></td>
            <td><input type="text" className="form-control" name="" id="" /></td>
            <td><input type="text" className="form-control" name="" id="" /></td>
            <td><input type="text" className="form-control" name="" id="" /></td>
          </tr>
          <tr>
            <th ><b>2</b></th>
            <td>Budget Needed</td>
            <td>OPEX</td>
            <td>BUDGET NEEDED For Software Development</td>
            <td >Recomended</td>
            <td>OPEX</td>
            <td>Budget IT  development</td>
            <td>5000RM</td>
          </tr>
        </tbody>
      </table>
            </div>
            <div className="col-md-2 align-items-center justify-content-center d-flex flex-column">
                <label htmlFor="">Select Request Type</label>
                <select name="" className="form-control" id="" style={{fontSize:"14px"}}>
                    <option value="" >Select Request Type</option>
                    <option value="">OPEX</option>
                    <option value="">CAPEX</option>
                </select>
            </div>
           <div className="row">
           <div className="col-md-6 text-right mt-2">
            <a onClick={()=>setSuccessModal(true)}><input type="submit"  className="rounded bg-white text-dark border border-dark  text-center py-3" value="SUBMIT" style={{cursor:"pointer",fontSize:"18px",fontWeight:"bold"}} /></a>
            </div>
            <div className="col-md-6 text-center mt-2">
            <label className="upload-label" style={{cursor:"pointer"}}> Select File
                      <input style={{cursor:"pointer"}} type="file" accept=".pdf,.doc,.docx,.rft,.text,.txt,.pdf"  />
                    </label>
                    </div>
           </div>
      </div>
   </div>
   <Modal
              isOpen={SuccessModal}
              onRequestClose={() => setSuccessModal(false)}
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  zIndex: "100",
                },
                content: {
                  position: "absolute",
                  margin: "0 auto",
                  width: "450px",
                  height: "200px",
                  top: "calc(50% - 150px)",
                  left: "0",
                  right: "0",
                  bottom: "100px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  background: "#fff",

                  outline: "none",
                  padding: "20px",

                  background: "#fff",
                  border: "1px solid #fff",
                },
              }}
            >
              <div className="text-center mt-3">
                <h5>Your Rquest has been submited</h5>
                <a onClick={()=>setSuccessModal(false)}><input type="submit"  className="rounded bg-white text-dark border border-dark  text-center py-2  mt-3" value="OK" style={{cursor:"pointer",fontSize:"18px",fontWeight:"bold"}} /></a>

              </div>
            </Modal>
        </>
    )
}
export default ProcurementCreateRequest