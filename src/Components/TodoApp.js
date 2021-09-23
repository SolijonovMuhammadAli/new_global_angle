import React,{useState} from 'react'
import TodoInput from './TodoInput'
import TodoProgress from './TodoProgress'
import AllTodo from './AllTodo'
import DoneTodo from './DoneTodo'
import './TodoApp.css'
import { Alert } from 'reactstrap';

function TodoApp() {
    const [bool,setBool] = useState(true)
    const [value,setValue] = useState('')
    const [todos,setTodos] = useState([])
    const [donetodos,setDonetodos] = useState([])
    const [add,setAdd] = useState('Add')

    const onChange=(e)=>{
        setValue(e.target.value)
    }
    const handeleValue =()=>{
        if(!todos.includes(value) && value !== ''){
            setTodos([...todos,value])
        }else{
            
            setBool(false)
                setTimeout(()=>{
                    setBool(true)
                },3000) 
        };
        setValue('')
        setAdd("Add")
    }
    const confirmTodo = (todo)=>{
     setDonetodos([...donetodos,todo])
     setTodos(todos.filter(item=>todo !== item))
    }
    const handeDel=(todo)=>{
        let does = donetodos.filter(item => todo !== item)
        setDonetodos(does)
    }
    const handleAdd=(todo)=>{
        setAdd("Save")
        let newTodos = todos.filter(item => todo !== item)
        let selectedTodo = todos.find(item=>todo === item)
        setTodos(newTodos)
        setValue(selectedTodo)

    }

    let progressTodo = donetodos.length/(todos.length + donetodos.length)*100
    return (
        <div className="container mt-5 ">
                { !bool ? <Alert color="warning"> Boshqalabdan kiriting </Alert> : ''} 
                <div className="m-4">
                    <TodoInput handeleClick={handeleValue} onChange={onChange} add={add} values={value}/>
                </div>
                <div className="m-4">
                    <TodoProgress progressTodo={Math.ceil(progressTodo)}/>
                </div>
                <div className="row m-4">
                    <div className="col-sm-5 ">
                        <AllTodo todos={todos} handleDone={confirmTodo} handleAdd={handleAdd}/>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-5">
                        <DoneTodo todos={donetodos} handleDel={handeDel}/>
                    </div>
                </div>
        </div>
    )
}

export default TodoApp
