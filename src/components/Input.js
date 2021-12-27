import React from 'react'


function Input(props) {

    return (
        <input type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                class="form-control" />

    )
}

export default Input
