import { ADD_NOTE } from "../constants/constants";
import { UPDATE_NOTE } from "../constants/constants";

const initialState = {
    note: [],
}


const noteReducer = (state = initialState, action) => {
    const { type, note } = action;

    switch (type) {
        case ADD_NOTE:
            return {
                ...state,
                note: [
                    ...state.note,
                    note,
                ]
            }
        case UPDATE_NOTE:
            return {
                ...state,
                note: [
                    ...state.note,
                    note,
                ]
            }
        default:
            return state;
    }
}

export default noteReducer;