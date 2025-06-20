'use client'
import { createContext, useContext, useReducer } from "react";
import { stepperReducer, stepperInitialState } from "./StepperReducer";

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stepperReducer, stepperInitialState);
    
}