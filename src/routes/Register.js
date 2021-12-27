import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


import Input from '../components/Input'
import * as actionCreator from '../store/actionCreators'


function Register(props) {
 
    const [details, setdetails] = useState({})

    const inputOnChange = (e)=>{
        setdetails(prevValues=>{
          return{
            ...prevValues,
            [e.target.name]:e.target.value
          }
        })
      }

  

    return (
        <div className='container'>
            {props.user ? <Redirect to='/'/>:null}
            <Link to='/' className='link-success text-decoration-none fs-1 fw-bold'>Vibes</Link>
            <div className='col-md-6 mx-auto mt-5'>
              <div>
              <h1>Register</h1>
              <Link className='link-success' to='#!'>Have an Account ?</Link>
              </div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <Input type='text' name='username' value={details.username} onChange={inputOnChange}/>
                <small></small>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <Input type='email' name='email' value={details.email} onChange={inputOnChange}/>                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <Input type='password' name='password' value={details.password} onChange={inputOnChange}/>                </div>
              
              <button type="button" onClick={()=>props.register(details)} class="btn btn-success">Register</button>
            </form>
            </div>
            
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        user:state.reducer.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        register:(payload)=>dispatch(actionCreator.register(payload))
    }}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
