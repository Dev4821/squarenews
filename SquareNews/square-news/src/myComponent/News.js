import React ,{useEffect,useState}from 'react'
import Spinner from './Spin'
import NewsComponent from './NewsComponent'
import PropTypes from 'prop-types'


const News= (props)=> {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
  const[articles,setArticles]=useState([])

  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  const[loading,setLoading]= useState(false)
    
  const updateNews=async()=>
    {
      props.setProgress(10);
       const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0516ff4fe6e44803b32e7e321ccfd96f&page=1&pageSize=${props.size}`;
       setLoading(true)
       props.setProgress(30);
       let data =await fetch(url);
       setLoading(false)
       let parsedData= await data.json()
       props.setProgress(70);
       setArticles(parsedData.articles)
       setTotalResults(parsedData.totalResults)
       props.setProgress(100);

    }
    useEffect(()=>{  document.title = `${capitalizeFirstLetter(props.category)} - Square News`;
    updateNews();
    // eslint-disable-next-line
  },[])
   const previousClick= async()=>{
       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0516ff4fe6e44803b32e7e321ccfd96f&page=${page+1}&pageSize=${props.size}`;
       setLoading(true)
       let data =await fetch(url);
       setLoading(false)
       let parsedData= await data.json()
       setArticles(parsedData.articles)
       setPage(page-1)
      

    }
   const nextClick= async()=>{
      if(! (page+1 > Math.ceil(totalResults/props.size)))
      {
       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0516ff4fe6e44803b32e7e321ccfd96f&page=${page+1}&pageSize=${props.size}`;
       setLoading(true)
       let data =await fetch(url);
       setLoading(false)
       let parsedData= await data.json()
       
       setArticles(parsedData.articles)
       setPage(page+1)
        
        
        }
    }
 
    return (
      <div className='container my-2' >
        <h2 className='text-center '  style={{color:"rgb(16,13,57)",textShadow:"2px 2px 5px rgb(0,0,50)"}}>{ props.category!=="general" && capitalizeFirstLetter(props.category)} Top Headlines</h2>
           {loading && <Spinner/>}
          {  !loading &&
        <div className="row">
        {articles.map((element)=>{
            
          return <div className="col-md-6 " key={element.url}  >
           <NewsComponent  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}author={element.author} date={element.publishedAt} source={element.source.name} />
                </div> 
        })}
          
        </div>
          }
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button disabled={page<=1} className="btn btn-sm me-md-2 text-white" onClick={previousClick} type="button" style={{background:"rgb(2,0,36)",boxShadow:"5px 5px 10px rgb(16,0,57)"}}>&larr; previous</button>
            <button disabled={page+1 > Math.ceil(totalResults/props.size)} className="btn btn-sm text-white " onClick={nextClick} type="button" style={{background:"rgb(2,0,36)",boxShadow:"5px 5px 10px rgb(16,0,57)"}}>next &rarr;</button>
       </div>
      
      </div>
    )
  }

  News.defaultProps = {
    country: 'in',
    size: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    size: PropTypes.number,
    category: PropTypes.string,
}

export default News
