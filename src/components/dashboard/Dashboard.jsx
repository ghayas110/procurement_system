
import React from "react"
import "./Dashboard.css"
import { Chart } from "react-google-charts";
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid } from "recharts"


const Dashboard = (props) => {
   const data1 = [
    ["Task", "Hours per Day"],
    ["Work", 2],
    ["Eat", 2],
    ["Commute", 2],
  ];
   const options1 = {
    backgroundColor: 'transparent',
    legend: "none",
    
    // pieSliceText: "label",
    // title: "Swiss Language Use (100 degree rotation)",
    // pieStartAngle: 100,
  };
  // const data = [
  //   ["Year", "Sales", "Expenses", "Profit"],
  //   ["2014", 1000, 400, 200],
  //   ["2015", 1170, 460, 250],
  //   ["2016", 660, 1120, 300],
  //   ["2017", 1030, 540, 350],
  // ];
  // const options = {
  //   width: 900,
  //   title: "Nearby galaxies",
  //   curveType: "function",
  //   seriesType: "bars",
  //   series: {
  //     3: { targetAxisIndex: 1 }
  //   },
  //   vAxes: {
  //     0: { title: "primary" },
  //     1: { title: "secondary" }
  //   },
  //   legend: { position: "bottom" }
  // };
  const Array=[
    
    {
      name:"January",
      student:150,
      fess:"12$"
    },
    {
      name:"February",
      student:100,
      fess:"10$"
    },
    {
      name:"March",
      student:-50,
      fess:"50$"
    },
    {
      name:"April",
      student:0,
      fess:"40$"
    },
    {
      name:"May",
      student:50,
      fess:"60$"
    },
  ]
    return (
        <>
   <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-12">
          <div className="row py-2 mx-2 bg-white border border-dark rounded">
            <div className="col-md-12 text-center">
            <h2>Monthly Amount and Monthly count</h2>
            </div>
            <div className="col-md-4">
            <ResponsiveContainer width="100%"  aspect={2}>
              <BarChart data={Array} width={"100%"}   >
              <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis dataKey="student" />
                <Tooltip />
                <Bar dataKey="student" stackId="a" fill="#07b5af" />
                <Bar dataKey="student" stackId="a" fill="#fa5fd8" />
              </BarChart>
            </ResponsiveContainer>
    </div>
            <div className="col-md-4">  <ResponsiveContainer width="100%" aspect={2}>
              <BarChart data={Array} width={"100%"}  >
              <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis dataKey="student" />
                <Tooltip />
                <Bar dataKey="student" stackId="a" fill="#07b5af" />
                <Bar dataKey="student" stackId="a" fill="#fa5fd8" />
              </BarChart>
            </ResponsiveContainer></div>
            <div className="col-md-4 text-center"> <Chart options={options1} legend_toggle  chartType="PieChart" data={data1} width={"100%"} height={"100%"} /></div>
          </div>


          <div className="row">
            <div className="col-md-12 text-center py-5">
              <h2>INSTANT PROCUREMENT REQUEST</h2>
            </div>
          </div>
          <div className="row mx-4">
          <div className="col-md-6">
            <div className="bg-white border border-dark rounded p-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3"><h3>REQUEST SUBMITTED</h3></div>
                </div>
              </div>
              <div className="overflow_hide">
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="col-md-6 mt-lg-0 mt-md-0 mt-4">
            <div className="bg-white border border-dark rounded p-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3"><h3>REQUEST APPROVED</h3></div>
                </div>
              </div>
              <div className="overflow_hide">
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-12">
                  <div className="border border-dark rounded text-center py-3">
                    <div className="row">
                      <div className="col-md-4 text-center"><h4 className="mb-0 pb-0">TITLE</h4><span className="mt-0 pt-0">MAP TYPE</span></div>
                      <div className="col-md-4"><p className="font-weight-bold" style={{fontSize:"14px"}}>EXECUTIVE SUMMARY</p></div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
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
export default Dashboard