import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList'
import Header from '../Header/Header'
import SearchPanel from '../SearchPanel/SearchPanel'
import AddItem from '../AdddItem/AddItem'




class App extends Component {

    maxId = 1;
    state = {
        // done: false,
        // important : false,
        todoData: [
            this.createTodoItem('first'),
            this.createTodoItem('second'),
            this.createTodoItem('333333333333'),
    
            
        ],
        term: '',
        filter: 'all'

    }
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    delItem = (id) => {
        console.log(this.state)
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            console.log(idx);

            const newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];

            return {
                todoData: newArr
            }
        })
    };

    addItem = (text) => {

        const newTodo = this.createTodoItem(text)

        this.setState(({ todoData }) => {

            let newArr = [
                ...todoData,
                newTodo
            ]


            return {
                todoData: newArr
            }
        })


    }


    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            console.log(idx)
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, important: !oldItem.important }
            const newArr = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)];

            return {
                todoData: newArr
            }
        })


    }

    onToggleDone = (id) => {
        // console.log('done',id)
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = { ...oldItem, done: !oldItem.done }
            const newArr = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)];

            return {
                todoData: newArr
            }
        });
    }
    addTerm = (input) => {
        this.setState({ term: input })
    }


    search(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            // console.log(item.label.indexOf(term));
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;

        })
    }
    filterSetstate = (val)=>{
        // let val = 'done'
        this.setState({filter:val})
        console.log(val)
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=>!item.done );
            case 'done':
                return items.filter((item)=>item.done );
        }
    }
    render() {
       
        console.log(this.state)
        const { todoData, term, filter } = this.state;
        const visible = this.filter((this.search(todoData, term)), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        // this.filterSetstate();
        // this.a()
        
        return (
            <div className='container'>
                <Header todo={todoCount} done={doneCount} />
                <SearchPanel addterm={this.addTerm} filtersetstate={this.filterSetstate}/>
                <TodoList todo={visible}
                    onDeleted={this.delItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant} />
                <AddItem addItem={this.addItem} />

            </div>
        );
    }
}


export default App;