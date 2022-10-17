import React from "react";
import { useState, useEffect } from "react";
import { HashRouter } from 'react-router-dom'
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";



function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks') )|| []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks}/>
      </div>
    </HashRouter>
  );
}

export default App;