import React from "react";
import { useEffect, useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { SelectedProjectContext } from "../Context/SelectedProjectContext";
import { useDeleteProject } from "../Hooks/deleteProject";
import { Link } from "react-router-dom";
import { useGetProjects } from "../Hooks/getProjects";
import { TrashIcon } from '@heroicons/react/24/outline'
import { SelectedTaskContext } from '../Context/SelectedTaskContext';


export default function ProjectList() {
    const { state, dispatch } = useContext(ProjectContext)
    const { deleteProject, error } = useDeleteProject()
    const { stateSelected, dispatchSelected } = useContext(SelectedProjectContext)
    const { stateSelectedTask, initialState, dispatchSelectedTask } = useContext(SelectedTaskContext)
    const { getProjects } = useGetProjects()
    // const [selectedId, setSelectedId ] = useState()

    useEffect(() => {

        console.log(initialState)
        window.localStorage.clear()
        // dispatchSelected({
        //     type: "RESET_SELECTED_PROJECT",
        //     payload: {
        //         projectId: null,
        //         projectTitle: null
        //     }
        // })
        console.log(stateSelected)
        console.log("newn")

    }, [])

    const handleSelected = (id, title) => {
        try {
            console.log(id)
            dispatchSelected({
                type: "SELECTED_PROJECT",
                payload: {
                    projectId: id,
                    projectTitle: title
                }
            })
            console.log(stateSelected)
        } catch (error) {
            console.log(error.message)
        }

    }

    const handleDelete = (id) => {
        console.log(id)
        deleteProject(id)
    }

    console.log(state.projects)
    return (
        <div  >

            < ul >
                {
                    state.projects.map(project => {
                        return <div className="grid grid-cols-2   p-8   text-slate-50  border-black  hover:bg-slate-600 ">

                            <Link to={`${project.uuid}`} className="   active:bg-slate-900" >
                                <li key={project.uuid} className="inline-block text-2xl text-slate-50 "> {project.title}</li></Link>
                            <button onClick={() => handleDelete(project.uuid)} className="hover:text-slate-800 hover:bg-slate-50 hover:border  p-2 rounded-full"> <TrashIcon className="w-6 inline " /></button></div>
                    })
                }
            </ul >
        </div >
    )
}


