import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p style={{color: "white"}}>
               I recently received my full stack web development certification 
               from Case Western Reserve University. Throughout the program, I 
               gained vast knowledge and concentrated skills in responsive 
               programming using HTML, CSS, Javascript, and Javascript libraries 
               such as React.js and JQuery, while also attaining an understanding 
               of server side web and data applications such as node.js and mySQL. 
               As someone who has shown initiative, growth, leadership, and the 
               ability to adapt quickly to the task at hand in past job roles, 
               I will be a strong asset to any development team.
                     
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}