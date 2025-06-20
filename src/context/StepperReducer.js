export const stepperInitialState =  {
    current: 0,
    steps: [
        'Subir documentos',
        'Revisión Legal',
        'Firma heredero',
        'Firma notario',
    ],
}

export function stepperReducer(state, action) {
    switch (action.type) {
        case 'NEXT' : {
            const nextIndex = state.current + 1;
            return {
                ...state,
                current: nextIndex < state.steps.length ?  nextIndex : state.current,
            };
        }
        case 'PREV': {
            const prevIndex = state.current - 1;
            return {
                ...state,
                current: prevIndex >= 0 ? prevIndex : state.current,
            }
        }

        case 'SET':
            return {
                ...state,
                current: action.payload.index <= state.current ? action.payload.index : state.current,
            };
        case 'RESET':
            return {
                ...state,
                current: 0
            }
        default:
            return state
    }
}