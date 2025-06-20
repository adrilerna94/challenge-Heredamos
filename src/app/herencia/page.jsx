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

    return (
        <main>
            <Card>
                <CardHeader>
                    <Typography>
                        Gestión de Herencia
                    </Typography>
                    <Typography>
                        Sigue los pasos para completar el proceso legal de forma segura.
                    </Typography>
                </CardHeader>
                <CardBody>
                    <div>
                        {/* Índice visual de Pasos Realizados- izquierda */}
                        <div>
                            {steps.map((label, index) => (
                                <Typography
                                    key= {label}
                                    variant= 'small'
                                
                                >
                                    {index === current ? '→ ' : ''}
                                    {label}
                                </Typography>
                            ))}
                        </div>
                        {/* Flujo de Pasos- Derecha*/}
                        <div className="col-span-1 md:col-span-3">
                        <Stepper />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </main>
    )

}