import axios from "axios"
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"

export const useGetAllTasks = () => {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    async function getAllTasks() {
        console.log("ui")
        try {
            let response = await axios.get("http://localhost:3000/tasks")
            if (response.status == 200) {
                dispatchTask({
                    type: "FETCH_TASKS", payload: response.data
                })
                return
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return { getAllTasks }
}


