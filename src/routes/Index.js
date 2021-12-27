import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import ListItem from '../components/ListItem'
import Layout from '../components/Layout'
import * as actionCreator from '../store/actionCreators'
import { useHistory } from 'react-router-dom'

function Index(props) {

    const [state, setstate] = useState({})

  
   useEffect(() => {
    axios.get('data.json')
        .then(rspnse=>{
            // console.log(rspnse.data)
            props.loadData(rspnse.data)
            setstate(rspnse.data.articles)
            console.log('articles',state)
        })

      
     
   },[])

  
    return (
       <Layout>
           <div className='bg-success p-5'>
                <div className='ps-5 text-center text-light'>
                    <h1 className=''>Vibes</h1>
                    <p>A place to share Knowledge</p>
                </div>
           </div>
            <div className='container my-4'>
            <div className='row'>
                <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='text-success border-bottom border-2 border-success p-2 fs-2'>Gloabal Feed</div>
                {props.articles ? 
                    <ul className='list-group list-group-flush'>
                    {props.articles.articles.map((article,index)=>{
                                
                            return <ListItem key={index} title={article.title} 
                                            image={article.author.image}
                                            tagList={article.tagList}
                                            username={article.author.username}
                                            count={article.favoritesCount}
                                            description={article.description}
                                            slug={article.slug}
                                            date={article.createdAt}
                                            />
                        })}
                    </ul>
                    
                    : <h1>Data loading</h1>}

     

     
             </div>
             <div className='col-md-2'>
                <div className='p-2 bg-light rounded'>Popular Tags</div>
             </div>

            </div>

            </div>
       </Layout>
    )
}

const mapStateToProps = state=>{
    return{
        user:state.reducer.user,
        articles:state.reducer.articles
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loadData:(data)=>dispatch(actionCreator.loadData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
