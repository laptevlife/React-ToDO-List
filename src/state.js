import {rerander} from './index'
const state = ['1','2','3','4','1','2','3','4'];

export let newDeal = (text) => {
    state.push(text);
    console.log(state)
    rerander()
  }



export default state;