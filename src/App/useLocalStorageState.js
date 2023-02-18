import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
        const localStorageGetState = localStorage.getItem(keyName);
        if (localStorageGetState === null) {
            return initialValue;
        }
        return JSON.parse(localStorage.getItem(keyName));
    };
        
    const [state, setState] = useState(getInitialState)

useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state))
    }, [keyName, state])                                                 

    return [state, setState];                                   
};