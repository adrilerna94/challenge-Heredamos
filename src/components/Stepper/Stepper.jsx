'use client'

import CompletionModal from '../Modals/CompletionModal'
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
}
