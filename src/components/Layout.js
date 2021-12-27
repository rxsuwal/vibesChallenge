import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actionCreator from '../store/actionCreators'

export const Layout = (props) => {
    return (
       <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to='/' className=" link-success fs-1 fw-bold" >Vibes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                       
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link"  to='/signIn'>Sign In</Link>
                        </li> */}
                        <li className="nav-item">
                            {props.user ? 
                            <button className='btn btn-outline-success border-0' onClick={()=>props.logout()}>Logout</button> :
                            <Link className="nav-link"  to='/register'>Register</Link>
                            }
                        </li>
                    
                        
                    </ul>
            
                </div>
            </div>
            </nav>

            {props.children}
       </section>
    )
}

const mapStateToProps = (state) => {
    return{
        user:state.reducer.user
    }
}

const mapDispatchToProps = dispatch =>{
        return{
            logout:()=>dispatch(actionCreator.logout())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
