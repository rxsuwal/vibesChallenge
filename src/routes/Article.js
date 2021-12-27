import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { Layout } from '../components/Layout'

import * as actionCreator from '../store/actionCreators'



function Article(props) {
    

    let location = useLocation()

    const [article, setarticle] = useState(null)
   

    useEffect(() => {

        let pathname = location.pathname.replace('/','')  

        let currentIndex = props.articles.articles.findIndex(function(o){
                    return o.slug === pathname
        })
              
        setarticle(props.articles.articles[currentIndex])

        console.log('article-->',article)

    

       

    },[])

    

    return (
        <Layout>
        {article !== null ? 
           <section>
               <div className='bg-dark p-5'>
                <div className='ps-5'>
                    <h1 className='text-light'>{article.title}</h1>
                    <div className='d-flex align-items-center justify-content-start'>
                           <figure className='size-50 m-0'>
                               <img src={article.author.image} className='rounded-circle' alt=''/>
                           </figure>
                           <div className='ps-2'>
                               <h6 className='text-success m-0'>{article.author.username}</h6>
                               <span className='text-secondary'>{article.createdAt.slice(0,10)}</span>
                           </div>
                    </div>
                </div>
           </div>

           <div className='ps-5'>
                <p className='fs-4 fw-bold py-2'>{article.body}</p>
                <div className='py-4 border-bottom'>
                    {article.tagList.map(tag=>{
                        return <span className='border py-2 px-4 rounded-pill'> {tag}</span>
                    })}
                </div>
           </div>

           <div className='row'>
               
               <div className='col-md-12 col-lg-7 mx-auto'>
               <div className='fs-5 p-4'>
                   <Link to='#!' className='text-success mx-2'>Sign In</Link>
                   or
                   <Link to='/register' className='text-success mx-2'>Sign Up</Link>

                   to add comments ona article.
               </div>

               <div>
                    {article.comments.map(comment=>{
                        return   <div className='border rounded mb-5'>
                        <p className='p-3 fs-5'>
                            {comment.body}
                        </p>

                        <div className='bg-light py-4 px-4 d-flex align-items-center justify-content-start'>
                            <figure className='m-0 size-50 mx-1'>
                                <img src={comment.author.image} className='rounded-circle' alt=''/>
                            </figure>

                            <h5 className='text-success mx-1'>{comment.author.username}</h5>

                            <h6 className='mx-1'>{comment.createdAt.slice(0,10)}</h6>

                        </div>

                    </div>
                  
                    })}

               </div>
           </div>

           </div>
           </section> :
           <>loading</>}
           
        </Layout>
    )
}

const mapStateToProps = state =>{
    return{
        articles:state.reducer.articles,
     
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loadData:(data)=>dispatch(actionCreator.loadData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article)
