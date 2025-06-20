'use client'
import { createContext, useContext, useReducer } from "react";
import { stepperReducer, stepperInitialState } from "./StepperReducer";

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stepperReducer, stepperInitialState);

    const nextStep = () => dispatch({ type: 'NEXT' });
    const prevStep = () => dispatch({ type: 'PREV'});
    const goToStep = (index) => dispatch({ type: 'SET' , payload: { index } });
    const reset = () => dispatch({ type: 'RESET' });

    return (
        <StepperContext.Provider value= {{ state, nextStep, prevStep, goToStep, reset }}>
            {children}
        </StepperContext.Provider>
    )
}

export const useStepper = () => useContext(StepperContext)