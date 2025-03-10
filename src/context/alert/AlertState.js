import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'; 

const AlertState = props => {
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // SET ALERT
    const setAlert = (msg, type) => {
        // this.setState({ alert: { msg, type } });
        dispatch({
            type: SET_ALERT,
            payload: {msg, type }
        })
    
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
      };

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;

// const setAlert = (msg, type) => {
//     // this.setState({ alert: { msg, type } });
//     setAlert({ msg, type });

//     setTimeout(() => setAlert(null), 3000);
//   };