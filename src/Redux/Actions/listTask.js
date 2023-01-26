
import { ADD_TASK, DELETE_TASK } from "../ActionType/listTask"






export const addTask = (newTask) => {
    return {
        type: ADD_TASK
        payload: newTask
    }
}


export const deleteTask = (id) =>{
    type: DELETE_TASK
    payload: id
}