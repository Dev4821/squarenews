import React from 'react'

const NewsComponent=(props)=> {
  
    let {title,description,imageUrl,newsUrl,author, date, source}=props;
   
    return (

      <div className='my-3 mx-3' style={{boxShadow:"5px 5px 10px rgb(16,0,57)"}}>
       <div className="card" >
        <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        boxShadow:"2px 0px 10px rgb(50,50,255) "

                    }}>
                      <span className="badge  " style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,70,175,1) 40%, rgba(0,212,255,1) 100%)"}}> {source} </span>
                 </div>
  <img src={!imageUrl?"https://images.puella-magi.net/thumb/2/27/No_Image_Wide.svg/800px-No_Image_Wide.svg.png?20110202071158":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body" >
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm text-white" style={{background:"rgb(2,0,36)",boxShadow:"5px 5px 10px rgb(16,0,57)"}}>Read More</a>
     </div>
   </div>
 </div>
    )
  
}

export default NewsComponent
