import React from "react"
import { Link } from 'react-router-dom';


const ProcurementRequestList = (props) => {

    return (
        <>
   <div className="container-fluid my-4">
      <div className="row">
      <div className="col-md-12 ">
            <div className="bg-white border border-dark rounded p-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="border border-dark rounded py-3">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8"><h3 className="pl-lg-5">PROCUREMENT REQUEST</h3></div>
                        <div className="col-md-4 text-center">
                        <Link to="/create-procurement-request"><input type="submit"  className=" bg-white text-dark border border-dark rounded-0 text-center py-3" value="CREATE NEW" style={{cursor:"pointer"}} /></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow_hide">
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3 hover_details  hover_details">
                    <Link to="/procurement-request-detail" className="text-dark "  >
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                       <div className="col-md-4"><i className="fa fa-ellipsis-h border border-dark rounded-circle"></i><i className="fa fa-check text-white bg-dark border border-dark rounded-circle"></i></div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3 hover_details">
                    <Link to="/procurement-request-detail" className="text-dark "  >
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                       <div className="col-md-4"><i className="fa fa-ellipsis-h border border-dark rounded-circle"></i><i className="fa fa-check text-white bg-dark border border-dark rounded-circle"></i></div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3 hover_details">
                    <Link to="/procurement-request-detail" className="text-dark "  >
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                       <div className="col-md-4"><i className="fa fa-ellipsis-h border border-dark rounded-circle"></i><i className="fa fa-check text-white bg-dark border border-dark rounded-circle"></i></div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3 hover_details">
                    <Link to="/procurement-request-detail" className="text-dark "  >
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                       <div className="col-md-4"><i className="fa fa-ellipsis-h border border-dark rounded-circle"></i><i className="fa fa-check text-white bg-dark border border-dark rounded-circle"></i></div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3 hover_details">
                    <Link to="/procurement-request-detail" className="text-dark "  >
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                       <div className="col-md-4"><i className="fa fa-ellipsis-h border border-dark rounded-circle"></i><i className="fa fa-check text-white bg-dark border border-dark rounded-circle"></i></div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3 hover_details">
                    <Link to="/procurement-request-detail" className="text-dark "  >
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                       <div className="col-md-4"><i className="fa fa-ellipsis-h border border-dark rounded-circle"></i><i className="fa fa-check text-white bg-dark border border-dark rounded-circle"></i></div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
      </div>
   </div>
        </>
    )
}
export default ProcurementRequestList