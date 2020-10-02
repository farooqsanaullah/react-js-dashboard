import React from "react";
import '../css/card.css';
//import image from './assets/imgs/blog_image.jpg';



function Card(object) {


    return (

        <div className="card" >
            <span className="title">  <i class={'fa '+ object.icon} aria-hidden="true"></i> {object.title}</span>
            <span className={'description description'+ object.pc}>{object.description}</span> 
            <div class="progress">
         <div className={'progress-bar'+ object.pc +' w-75'} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
    )
}

export default Card