import React from "react"
import { useState } from "react"
import "./Sidebar.css"
import {Link} from "react-router-dom"
import ll from "../../assets/sidebar/logo.png"


const SideBar = (props) => {
const [request,setrequest]=useState(false)
const [requestapproval,setrequestapproval]=useState(false)
            const signOut=()=>{
              localStorage.removeItem("token")
              localStorage.removeItem("disid")
              window.location="/"
            }
    return (
      <>
 <nav id={props.navId==false?"navdeactive":"navactive"} className=" d-lg-block d-md-none d-none">

        <div className="navanc">
          <Link to="/dashboard"><i className="fa fa-tachometer" />DASHBOARD</Link>
          <a style={{color:"black !important",textDecoration:"none !important",cursor:"pointer"}}  onClick={()=>setrequest(!request)}><i class="fas fa-weight"></i>REQUESTS</a>
          {
            request==true && props.times==true?
          <>
            <Link to="/reallocation-list"  className="ml-4 d-flex justify-content-center align-items-center" >REALLOCATION REQUEST</Link>
          <Link to="/procurement-list" className="ml-4 d-flex justify-content-center align-items-center" >PROCUREMENT REQUEST</Link>
          </>
          :""
          }
            <a style={{color:"black !important",textDecoration:"none !important",cursor:"pointer"}}  onClick={()=>setrequestapproval(!requestapproval)}><i class="fas fa-weight"></i>REQUEST APPROVAL</a>
          {
            requestapproval==true&& props.times==true?
          <>
            <Link to="/reallocation-approver-list"  className="ml-4 d-flex justify-content-center align-items-center" >REALLOCATION APPROVAL</Link>
          <Link to="/procurement-approver-list" className="ml-4 d-flex justify-content-center align-items-center" >PROCUREMENT APPROVAL</Link>
          </>
          :""
          }
          <Link to="/dashboard"><i class="fas fa-warehouse"></i>DEPARTMENT</Link>
          <Link to="/dashboard"><i class="far fa-users"></i>EMPLOYEE</Link>
          <Link onClick={()=>signOut()}><i class="fas fa-user"></i>Sign Out</Link>
          {/* <div className="dropdown">
            <button className="dropbtn"><i className="fas fa-file" />Report</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div> */}
        </div>
      </nav>






      <div className="container-fluid bg d-lg-none d-md-block d-block">
          <div className="row">
              <div className="col-md-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                      <div className="container-fluid">

                          <img src={ll} height={"50px"} width={"70px"} alt="" srcset="" />
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon" />
                          </button>
                          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                              <ul className="navbar-nav navul mb-2 mb-lg-0 ml-lg-5 ml-md-0 ml-0 mt-4" style={{height:"150px",overflowY:"auto"}}>
                                  <li className="nav-item dropdown mr-2">
                                  <Link style={{color:"black !important"}} to="/dashboard"><i className="fa fa-tachometer" />DASHBOARD</Link>
                                  </li>
                                  <li className="nav-item dropdown mr-2">
                                  <a style={{color:"black !important",textDecoration:"none !important",cursor:"pointer"}}  onClick={()=>setrequest(!request)} ><i class="fas fa-weight"></i>REQUESTS</a>
                                  </li>
                                  {
            request==true?
          <>
             <li className="nav-item dropdown mr-2">
                                  <Link style={{color:"black !important"}} to="/reallocation-list">REALLOCATION REQUEST</Link>
                                  </li>
                                  <li className="nav-item dropdown mr-2">
                                  <Link style={{color:"black !important"}} to="/procurement-list">PROCUREMENT REQUEST</Link>
                                  </li>
          </>
          :""
          }
                                  <li className="nav-item dropdown mr-2">
                                  <Link style={{color:"black !important"}} to="/warehouse"><i class="fas fa-warehouse"></i>DEPARTMENT</Link>
                                  </li>
                                  <li className="nav-item dropdown mr-2">
                                  <Link style={{color:"black !important"}} to="/employees"><i class="fas fa-users"></i>EMPLOYEE</Link>
                                  </li>
                                  <li className="nav-item dropdown mr-2">
                                  <Link onClick={()=>signOut()}><i class="fas fa-user"></i>Sign Out</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
      </>
    )
}
export default SideBar