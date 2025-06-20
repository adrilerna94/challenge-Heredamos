import { Button } from '@/components/ui';
import { CheckCircle, Circle, PlayCircle } from 'lucide-react';

export default function StepButton({ label, index, current, onClick }) {
    // variables para manejar los iconos que representan los estados (hecho, activo, pendiente)
    let status;
    if (index < current) {
        status = 'done';
    } else if (index == current) {
        status = 'active';
    } else {
        status = 'pending';
    }

    // utilizamos formato objeto para evitar hadoken pattern (if elseif anidados)
    const iconMap = {
        done: <CheckCircle className="w-5 h-5 text-green-500"/>,
        active: <PlayCircle className="w-5 h-5 text-blue-500" />,
        pending: <Circle className='w-5 h-5 text-gray-400' />,
    };

    const stateStylesMap = {
        done: 'bg-green-50 text-green-800',
        active: 'bg-blue-50 text-blue-800 font-semibold ring-2 ring-blue-200',
        pending: 'bg-gray-100 text-gray-400 cursor-not-allowed',
    };

    const textColorMap = {
        done: 'text-green-600',
        active: 'text-blue-600',
        pending: 'text-gray-500',
    };

    const baseStyles = 'flex justify-between items-center px-5 py-3 rounded-xl w-full text-left shadow-sm transition hover:shadow-md';

    return (
        <Button
            disabled= {status === 'pending'}
            onClick={() => status !== 'pending' && onClick(index)}
            className={`${baseStyles} ${stateStylesMap[status]}`}
        
        >
            <div className='flex items-center gap-3'>
                {iconMap[status]}
                <span className="text-base">{label}</span>
            </div>
            <span className={`text-sm font-medium ${textColorMap[status]}`} />
        </Button>
    );
}