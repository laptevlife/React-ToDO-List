import React, { Component } from 'react';

import './AddItem.css'
export default class Header extends Component {


    state = {
        label: ' '
    };
    onLabelChange =(e)=>{
       this.setState({
           label : e.target.value
       })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label :""
        })
    
    }

    render() {
      
        return (
       
            <form className='d-flex' 
                onSubmit = {this.onSubmit}>
            
                <input className='form-control shadow-sm'
                       type = 'text'
                       onChange={this.onLabelChange}
                       value = {this.state.label} />
                <button className='btn'
                    // onClick={() => this.props.addItem('lknkjbkjn')} 
                    >ADD</button>
            </form>
        )
    }


};
