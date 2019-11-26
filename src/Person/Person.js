import React from 'react';
import './Person.css'


const person = (props) => {
    const style = {
        backgroundColor: "red",
        border: '1px solid blue',
        padding: '10px',
        margin: '15px',
        textAlign: 'center'
    }
    return (
        <div className = "Person">
            <p onClick= {props.click} >I am  {props.name} and i am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} style={style}/>
        </div>
    )
}
export default person;