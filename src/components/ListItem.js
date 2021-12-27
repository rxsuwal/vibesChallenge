import React from 'react'
import { Link } from 'react-router-dom'

function ListItem(props) {
    return (
        <li className="list-group-item  py-4" >
                  <Link to={props.slug}>
                  <div className='d-flex align-items-center justify-content-between'>
                       <div className='d-flex align-items-center justify-content-around'>
                           <figure className='size-50 m-0'>
                               <img src={props.image}className='rounded-circle' alt=''/>
                           </figure>
                           <div className='ps-2'>
                               <h6 className='text-success m-0'>{props.username}</h6>
                               <span className='text-secondary'>{props.date.slice(0,10)}</span>
                           </div>
                       </div>
                       <div > 
                           <button className='btn btn-outline-success'>
                               <span className='px-2'><i className="bi bi-heart-fill"></i></span>
                               {props.count}
                           </button>
                       </div>
                   </div>
                   <div className='py-2'>
                       <h4 className='text-dark'>{props.title}</h4>
                       <p className='text-secondary '>{props.description}</p>
                   </div>

                   <div className='d-flex align-items-center justify-content-between'>
                       <Link to={props.slug} className='text-secondary'>Read More..</Link>
                       <div>
                           {props.tagList.map((tag)=>{
                               return  <span className='py-1 px-3 mx-2 border border-secondary text-secondary rounded-pill'>{tag}</span>
                           })}

                       </div>
                   </div>
                  </Link>
               </li>
    )
}

export default ListItem
