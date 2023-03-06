import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/self.jpg" alt="developer" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p style={{color: "white"}}>
               I am a Frontend Developer utilizing my growing expertise in creating fully responsive, interactive, and compliant web applications using languages/frameworks such as HTML, CSS, JavaScript, React.js, Next.js, and Shopify Liquid, while gaining a full-stack understanding of applications using SQL, Express.js, and Node.js . After shifting career paths from a Project Manager in Construction, to Frontend Development, I have always taken pride in the ability to adapt to the task at hand with an entrepreneurial, self-motivated, self-starter mindset. As someone who has shown initiative, growth, leadership, and the ability to adapt quickly to the task at hand in past job roles, I will be a strong asset to any development team.
                     
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