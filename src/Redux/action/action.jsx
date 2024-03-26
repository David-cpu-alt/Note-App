
const ADD_NOTE = "ADD_NOTE"

{

}

// action creator 

function addNote() {
    return {
        type: ADD_NOTE
    }
}

const initialState = {

}
// reducer 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
            }
        default:
            return state
    }
}