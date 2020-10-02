import React ,{ useState } from "react";
import "./css/sidebar.css";
import Card from "./Cards/Card.js";
import detail from './Cards/CardDetail';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';


let toggleEvent;

function callCards(object)
{
  return(
    <Card  
    key = {object.key}
    title={object.title}
    description = {object.description}
    pc = {object.pc}
    icon = {object.icon}
    />
  )

}



function Navbar() {
  let [toggleEvent, update] = useState(true);

  const toggleStatus = () => {
    
    update(toggleEvent==false);
}



    return (

        <div className="d-flex" id="wrapper">

{
            toggleEvent?
        <div className="bg-dark border-right" id="sidebar-wrapper">
          <div className="sidebar-heading"> <span className="logo__color">Dark</span>Admin </div>
          
          <div>
            
<div className="profile">
<img src="https://i.pinimg.com/736x/7a/57/08/7a5708d3347e1965a6df017fdb960965.jpg" className="circle"  width="50" height="50" />
<label> M.Farooq <br></br> <span>Web Designer</span></label> 
</div>

          <div className="list-group list-group-flush">
          <label>Main</label>
            <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
            
            <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-table" aria-hidden="true"></i>Table</a>
            <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-area-chart" aria-hidden="true"></i>Charts</a>
            <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-address-book-o" aria-hidden="true"></i>Forms</a>
            <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>Logout</a>
          <label>Extras</label>
          <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-desktop" aria-hidden="true"></i>Demo</a>
            <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-desktop" aria-hidden="true"></i>Demo</a>
            <a href="#" className="list-group-item list-group-item-action bg-dark"><i className="fa fa-desktop" aria-hidden="true"></i>Demo</a>
          </div>
          
          </div>
         
        </div>
        :null
      }
        <div id="page-content-wrapper">
    
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
            {/* <button className="btn btn-primary" id="menu-toggle" onClick="toggle()">Toggle Menu</button> */}
            {toggleEvent?<i className="fa fa-arrow-circle-o-left" onClick={toggleStatus} aria-hidden="true"></i>
            :<i className="fa fa-arrow-circle-o-right" onClick={toggleStatus} aria-hidden="true"></i>
          }
            
    
            <div className="collapse navbar-collapse" >
         
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {/* <li>
              <div class="form-group">
    
    <input type="text" class="form-control"  placeholder="Search"></input>
   
   </div>
              </li> */}
              
              <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true"></i> </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#"><i className="fa fa-5x fa-envelope-o" aria-hidden="true"></i><sup><span className="badge ">8</span></sup> </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> <i className="fa fa-bell-o" aria-hidden="true"></i><sup><span className="badge badge-light">8</span></sup></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Mega<i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Logout<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </li>
               
     
              </ul>
            </div>
          </nav>
         
          <div className="main">
          <div className="container-fluid dashboard">
          <div class="row">
           <label>Dashboard</label>
          </div>
          </div>
            {/* Card html */}
          <div className="container-fluid carddetail">
          <div className="row">
            
            {detail.map(callCards)}
          </div>
          </div>
          {/* Charts html */}
          <div className="container-fluid chartdetail">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 section">
            <BarChart/>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 linechart">
              <div className="linechar__section">

              <LineChart/>
              </div>
              </div>
            </div>
          </div>
           
           {/* last block html */}


          <div className="container-fluid block__card">
            <div className="row info__block">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 section">
              <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 section">
                 <label className="label">
                   5657
                 </label>
                 <br></br>
                 <span className="span">
                   STANDARD SCANS
                 </span>
                 <div class="progress">
         <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 section">
              <div className="info__block"> 
              <label>
                  3.1459
                 </label>
                 <br></br>
                 <span>
                   TEAM SCANS
                 </span>
                 <div class="progress">
               <div class="progress-bar2 w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
              </div>
                 
              </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 linechart">
            <div className="section">
               
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 section">
                 <label className="label">
                   5657
                 </label>
                 <br></br>
                 <span className="span">
                   STANDARD SCANS
                 </span>
                 <div class="progress">
         <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 section">
              <div className="info__block"> 
              <label>
                  3.1459
                 </label>
                 <br></br>
                 <span>
                   TEAM SCANS
                 </span>
                 <div class="progress">
               <div class="progress-bar2 w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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
    )
}

export default Navbar