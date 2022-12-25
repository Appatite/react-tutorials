import "./App.css";
import { useState } from 'react';
import Todo from './Screens/Todo';
import Navbar from './Components/Navbar'
import{ Switch, Route } from 'react-router-dom';
import TodoDetails from './Screens/TodoDetails';
import { v4 as uuid } from 'uuid';


function App() {

  const [searchQuery, setSearchQuery ] = useState("");
  const [todos, setTodos ] = useState(
    [
      { title: "test todo", id: uuid(), done: false }
    ]
  );

  return (
    <div className="App">
      <Navbar onSearchQuery ={ (e) => setSearchQuery(e.target.value) }/>
      
      <div className="MainContainer">
        <Switch>
          <Route exact path="/" >
            <Todo searchQuery = {searchQuery} todos={todos} setTodos={setTodos}/>    
          </Route>
          <Route exact path="/todo/:id">
            <TodoDetails todos={todos} setTodos={setTodos}/>
          </Route>
          <Route path="*">
            <h1> 404 - not found</h1>        
          </Route>
        </Switch>
  
        </div>
    </div>
  );
}

export default App;