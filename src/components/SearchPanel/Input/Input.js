import React from 'react';
// import ReactDOM from 'react-dom';

const Input = ({addterm}) => {
 
  let search =(e)=>{
    let int =e.target.value;
    console.log(int);
    addterm(int)
  }
    
    return (
        <input onChange={search}
        className="form-control shadow-sm search-input"
        // style={style}
      />
    )

};

export default Input;