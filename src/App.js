import React, {useState} from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewToDoForm from './components/NewToDoForm';

function App() {

  const [showAddToDoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Presentation', rowAssigned: 'User1'},
    {rowNumber: 2, rowDescription: 'Code change', rowAssigned: 'User2'},
    {rowNumber: 3, rowDescription: 'Client meeting', rowAssigned: 'User3'},
  ]
  )

  const addTodo = (description, assigned) => { 
    let rowNumber = 0;
    if (todos.length > 0){
      rowNumber = todos[todos.length-1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo] )
  }


  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value){
    return value.rowNumber !== deleteTodoRowNumber;
    });
      setTodos(filtered);
    }
  

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <ToDoTable todos = {todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddToDoForm)}className='btn btn-primary'>
            {showAddToDoForm ? 'close new Todo' : 'New Todo'}
          </button>
          {showAddToDoForm &&
            <NewToDoForm addTodo = {addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
