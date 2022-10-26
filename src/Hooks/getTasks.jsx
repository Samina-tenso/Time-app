import axios from "axios"
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"
import { ProjectContext } from "../Context/ProjectContext"
import { SelectedProjectContext } from "../Context/SelectedProjectContext";

export const useGetTasks = () => {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { state, dispatch } = useContext(ProjectContext)
    const { stateSelected, dispatchSelected } = useContext(SelectedProjectContext)




    async function getTasks(id) {
        console.log(id)

        try {
            let response = await axios.get(`http://localhost:3000/tasks?projectId_like=${id}`)
            if (response.status == 200) {
                dispatchTask({
                    type: "FETCH_TASKS", payload: response.data
                })
                dispatchSelected({
                    type: "SELECTED_PROJECT",
                    payload: id
                })
                return

            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return { getTasks }
}

