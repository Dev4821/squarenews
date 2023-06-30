import React from "react";

const Footer=()=>  {
  
    return (
      <div >
        <div className="card text-center text-white" style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,54,151,1) 100%, rgba(201,235,219,1) 100%)",textShadow:"5px 5px 5px black"}}>
         
       
          <div className="card-body">
            <h5 className="card-title">Square News</h5>
            <p className="card-text">Provides you most recently news here.</p>
          </div>
          <div className="card-footer ">
            Developed By:
            <a
              href={"https://github.com/Dev4821"}
              className="link-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
               Divyansh 
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Footer;
