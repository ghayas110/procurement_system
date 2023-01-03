import React,{useState} from "react"
import Dashboard from "../components/dashboard/Dashboard"
import SideBar from "../components/sidebar/Sidebar"


const HomePage = ()=>{
    const [navId,setNavId]=useState(false)
    const [headId,setHeadId]=useState(false)
    const [barsId,setBarsId]=useState(false)
    const [logoId,setLogoId]=useState(false)
    const [timesId,setTimesId]=useState(false)
    const Open=()=>{
setNavId(true)
setHeadId(true)
setBarsId(true)
setLogoId(true)
setTimesId(true)
    }
    const Close=()=>{
        setNavId(false)
        setHeadId(false)
        setBarsId(false)
        setLogoId(false)
        setTimesId(false)
            }
    return(
        <>
        <div className="container-fluid d-lg-block d-md-none d-none" style={{backgroundColor:"#eeeeee"}}>
            <div className="row">
                <div className="col-md-12  py-3">
                    <h3 className="">
                    <i className="fa fa-bars" style={{position:"relative",left:"-10px"}} onClick={()=>Open()} id={barsId==false?"barsdeactive":"barsactive"} />
                    <i className="fa fa-times" style={{position:"relative",left:"-10px"}} onClick={()=>Close()} id={timesId==false?"timesdeactive":"timesactive"} />
                        DASHBOARD</h3>
                    {/* <div id={headId==false?"headdeactive":"headactive"} > */}
          
          {/* <div id="va">Code Routing</div> */}

        {/* </div> */}
                </div>
            </div>
        </div>
<div className="d-lg-flex d-md-none d-none">
<SideBar navId={navId} times={timesId} />
<Dashboard />
</div>
<div className="d-lg-none d-md-block d-block">
<SideBar />
<Dashboard />
</div>
</>
    )
}
export default HomePage