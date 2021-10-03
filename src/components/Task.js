// this is the X icon
// import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // and here we are adding the function toggleReminder to the whole div on a doubleClick event
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {/* in the app.js we created the deleteTAsk function */}
                {task.text}<p style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}>x</p>          
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
