import React from 'react';
// import ReactDOM from 'react-dom';
// import { rerander } from '../../index'
import Input from './Input/Input';
import StatusBtns from './StatusBtns/StatusBtns';
import './SearchPanel.css'
const SearchPanel = ({addterm, filtersetstate}) => {
  
// debugger;
  return (
    <div className='style'>
     <Input addterm={addterm} />
     <StatusBtns  filtersetstate={filtersetstate}  />
    </div>
  )
};

export default SearchPanel;