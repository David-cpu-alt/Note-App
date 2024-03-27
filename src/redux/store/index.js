import { createStore, compose, applyMiddleware } from "redux";

import noteReducer from "../reducers/noteReducer";


const reduxStore = createStore(
    noteReducer,
)

const handleNote = (store) => {
    const note = store.getState()?.note;
    console.log('note data', note)
}

reduxStore.subscribe(() => handleNote(reduxStore))

export default reduxStore;