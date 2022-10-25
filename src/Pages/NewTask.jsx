import React from 'react'
import { Form } from 'react-router-dom'
import { useState, useContext } from 'react'
import { SelectedProjectContext } from '../Context/SelectedProjectContext'
import { useAddTask } from '../Hooks/addTask'

function NewTask() {
    const { stateSelected, dispatchSelected } = useContext(SelectedProjectContext)

    const { addTask, error } = useAddTask()
    const [task, setTask] = useState({
        title: '',
        uuid: '',
        projectId: stateSelected.selected.projectId,
        projectTitle: stateSelected.selected.projectTitle,
        time: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        task.title = e.target.value
        setTask({ ...task })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await addTask(task)
    }
    return (
        <Form className=''>
            <input type='text' placeholder='task name' className="text-black" value={task.title} onChange={(e) => handleChange(e)} required />
            <button type="submit" onClick={handleSubmit}>Add Task</button>
        </Form>
    )
}

export default NewTask