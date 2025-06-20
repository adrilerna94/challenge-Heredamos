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
        <main className="min-h-screen bg-blue-gray-900 flex items-center justify-center px-4 py-10">
        <Card className="w-full max-w-4xl bg-blue-gray-800 shadow-2xl rounded-xl border border-blue-gray-700">
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-t-xl bg-blue-gray-900 text-center pt-4 pb-3"
                >
                <Typography variant="h4" color="yellow" className="mb-1">
                    🧾 Gestión de Herencia
                </Typography>
                <Typography
                    variant="paragraph"
                    color="white"
                    className="text-sm opacity-80"
                >
                    Sigue los pasos para completar el proceso legal de forma segura.
                </Typography>
            </CardHeader>
            <CardBody className="px-5 py-5">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4">
                {/* Indice Que indica el paso actual - izquierda */}
                <div className="col-span-1 md:col-span-2 border-r border-blue-gray-700 pr-3">
                <div className="flex flex-col gap-3">
                    {steps.map((label, index) => (
                    <Typography
                        key={label}
                        variant="small"
                        className={`transition-all text-base ${
                        index === current
                            ? 'text-yellow-400 font-semibold'
                            : 'text-blue-gray-200 opacity-70'
                        }`}
                    >
                        {index === current ? '→ ' : ''}
                        {label}
                    </Typography>
                    ))}
                </div>
                </div>
                {/* flujo de pasos a realizar - derecha */}
                <div className="col-span-1 md:col-span-3">
                    <Stepper />
                </div>
                </div>
            </CardBody>
      </Card>
    </main>
  )

}