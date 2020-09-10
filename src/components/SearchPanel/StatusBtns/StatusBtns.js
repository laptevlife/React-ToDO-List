import React from 'react';
// import ReactDOM from 'react-dom';
import './StatusBtns.css'



export default class StatusBtns extends React.Component {
  searching = (type)=>{
    // console.log(type)
    this.props.filtersetstate(type)
  }
  render() {
    return (
      <div className="btn-group stbtns ">
        <button type='button'
          className='btn btn-info '
          onClick= {()=>{this.searching("all")} }>All</button>
        <button type='button'
          className='btn btn-online-secondary'
          onClick= {()=>{this.searching("active")} }>Active</button>
        <button type='button'
          className='btn btn-online-secondary'
          onClick= {()=>{this.searching("done")} }>Done</button>
      </div>
    )
  }
};

