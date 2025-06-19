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
        
    }
}