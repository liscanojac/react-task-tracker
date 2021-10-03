// import { FaTimes } from 'react-icons/fa'

import Header from "./components/Header";
// here I'm importing the header element 

import Tasks from "./components/Tasks";
// importing the tasks component

import { useState, useEffect } from "react"
// importing the tasks object

import AddTask from "./components/AddTask";

function App() {

  // here we are making that Add button to show/hide the AddTask form

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([])


  // here we are gettin the data from db.json
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data;
  }

  // const [tasks, setTasks] = useState([
  //   {
  //       id: 1,
  //       text: 'Doctors Appointment',
  //       day: 'Feb 5th at 2:30pm',
  //       reminder: true
  //   },
  //   {
  //       id: 2,
  //       text: 'Meeting at School',
  //       day: 'Feb 6th at 1:30pm',
  //       reminder: true
  //   },
  //   {
  //       id: 3,
  //       text: 'Food Shopping',
  //       day: 'Feb 5th at 2:30pm',
  //       reminder: false
  //   },
  // ]);

  // Add Task function 
  const addTask = async (task) => {

    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 1000) + 1;
    // here we create a new object with that id
    // const newTask = {id, ...task}
    // and here we add it to the setTasks array
    // setTasks([...tasks, newTask])
  }

  // DeleteTask Function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder - this changes the task style depending if the remainder property is true or false
// the map changes the remainder property to tru/false depending on the case

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()
    
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* we wrap addTask in curly braces to be dependant of the Add button */}
      {/* that is a way to make an if, if showAddTask its true then show the AddTask component */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* this is how you get imported element in your app */}
      {/* here you have to pass the delete function to how in tasks and subsequientally in task */}
      {/* we wrap tasks in curly braces to make a message where no tasks are left */}
      {/* and then we add an if tasks.length > 0 then show those Tasks elements otherwise show a message */}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
