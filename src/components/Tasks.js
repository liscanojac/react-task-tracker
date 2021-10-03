// this array was for testing purposes and it prints a list with 3 h3 with text of each as innerHTML
// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         remainder: true
//     },
//     {
//         id: 2,
//         text: 'Meeting at School',
//         day: 'Feb 6th at 1:30pm',
//         remainder: true
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: 'Feb 5th at 2:30pm',
//         remainder: false
//     },
// ]

import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {/* here we are taking tasks and passing through the array with the map method */}
            {/* when you pass a map method you create a list and in react a list has to have a key unique property, thats why the task.id is passed as argument there */}
            {tasks.map((task) => (
                // <h3 key={task.id}>{task.text}</h3>)
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
