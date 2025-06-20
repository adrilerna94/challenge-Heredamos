import { Button } from "@/components/ui";

export default function StepControls({ onNext, onPrev, onlyBack = false, isLastStep = false }) {
    return (
        <div className="flex gap-2 mt-4">
            <Button
                onClick = {onPrev}
                className = "bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
            >
                Atrás
            </Button>
            {/* Solo mostramos botón siguiente si estamos como mínimo un paso anterior al final del proceso */}
            {!onlyBack && (
                <Button
                    onClick={onNext}
                    className={`px-4 py-2 rounded-md ${isLastStep ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                    {isLastStep ? 'Finalizar' : 'Siguiente'}
                </Button>
            )}

        </div>
    )
}