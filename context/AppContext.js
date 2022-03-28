import {createContext, useMemo, useReducer, useContext} from "react";
import { initialValue, numberReducer } from "./AppReducer";

const AppContext = createContext();

export const AppContextWrapper = ({children}) => {
    const [state, dispatch] = useReducer(numberReducer, initialValue);

    const contextValue = useMemo(() => {
        return {state, dispatch}
    }, [state, dispatch])

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}