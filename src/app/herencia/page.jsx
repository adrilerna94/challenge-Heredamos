'use client';

import Stepper from '@/components/Stepper/Stepper';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from '@/components/ui';

import { useStepper } from '@/context/StepperContext';
import { useEffect } from 'react';

export default function HerenciaPage() {
    const { state, reset } = useStepper();
    const { current, steps } = state;

    // Al montar el componente se reinicia solo si no estamos en el primer paso del flujo.
    useEffect(() => {
        if (state.current !== 0) {
            reset();
        }
    }, []);

}