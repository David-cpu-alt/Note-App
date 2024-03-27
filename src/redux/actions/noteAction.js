import { ADD_NOTE } from "../constants/constants"

import { UPDATE_NOTE } from "../constants/constants"

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        note,
    }
}

export const updateNote = (note) => {
    return {
        type: "UPDATE_NOTE",
        note,
    }
}