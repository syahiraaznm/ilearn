import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const taskState = {
    tasks : [
        {id: 1, name: "Festival One"},
        {id: 2, name: "Festival Two"},
        {id: 3, name: "Festival Three"},
    ]
};

// Create Const
export const GlobalContext= createContext(taskState);

// Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, taskState);

    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks
        }}>
            {}
        </GlobalContext.Provider>
    )
}