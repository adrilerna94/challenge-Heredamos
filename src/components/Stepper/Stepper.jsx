'use client'

import SuccessModal from '../Modals/SucessModal'
import { useState } from 'react'
import { useStepper } from '@/context/StepperContext';
import StepButton from './StepButton';
import StepControls from './StepControls';
import { useRouter } from 'next/navigation';

export default function Stepper() {
    const { state, nextStep, prevStep, goToStep, reset} = useStepper();
    const { steps, current } = state;
    const [showModal , setShowModal] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const router = useRouter();

    const navigateToHome = () => router.push('/');

    const handleRestart = () => {
        reset();
        setIsFinished(false);
        setShowModal(false);
    }

    const handleNext = () => {
        if (current < steps.length - 1) {
            nextStep();
        } else {
            setIsFinished(true);
            setShowModal(true);
        }
    }

    return (
        <div className="flex flex-col items-start gap-6 w-64 mx-auto">
            {steps.map((label, index) => (
                <StepButton
                    key={label}
                    label= {label}
                    index = {index}
                    current = {isFinished ? steps.length : current}
                    onClick={goToStep}
                />
            ))}
            <StepControls 
                onNext= {handleNext}
                onPrev={prevStep}
                onlyBack={isFinished}
                isLastStep= {current === steps.length - 1}
                isFirstStep= {current === 0 }
            />

            <SuccessModal
                isOpen = {showModal}
                onClose = {navigateToHome}
                onRestart={handleRestart}
            /> 
        </div>
    )
}
