import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApproverDetailsProcurement from "../pages/Approverdetailsprocurement";
import ApproverDetailsReallocation from "../pages/Approverdetailsreallocation";
import CreateRequestReallocation from "../pages/Createrequestreallocation";
import CreateRequestProcurement from "../pages/Createrequestprocurement";
import HomePage from "../pages/Home";
import ListProcurementApprover from "../pages/Listprocurementapprover";
import ListProcurementRequest from "../pages/Listprocurementrequest";
import ListReallocation from "../pages/Listreallocation";
import ListReallocationApprover from "../pages/Listreallocationapprover";
import LoginFrom from "../pages/Loginfrom";
import RequestDetailsProcurement from "../pages/Requestdetailsprocurement";
import RequestDetailsReallocation from "../pages/Requestdetailsreallocation";

function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                <Route path="/" exact component={LoginFrom} />
                    <Route path="/dashboard" exact component={HomePage} />
                    <Route path="/reallocation-list" exact component={ListReallocation} />
                    <Route path="/reallocation-request-detail" exact component={RequestDetailsReallocation} />
                    <Route path="/procurement-list" exact component={ListProcurementRequest} />
                    <Route path="/procurement-request-detail" exact component={RequestDetailsProcurement} />
                    <Route path="/reallocation-approver-list" exact component={ListReallocationApprover} />
                    <Route path="/procurement-approver-list" exact component={ListProcurementApprover} />
                    <Route path="/reallocation-approver-detail" exact component={ApproverDetailsReallocation} />
                    <Route path="/procurement-approver-detail" exact component={ApproverDetailsProcurement} />
                    <Route path="/create-reallocation-request" exact component={CreateRequestReallocation} />
                    <Route path="/create-procurement-request" exact component={CreateRequestProcurement} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routing;
