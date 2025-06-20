import { checkCircle, Circle, PlayCircle } from 'lucide-react';

export default function StepButton({ label, index, current, onClick }) {
    // variables para manejar los iconos que representan los estados (hecho, activo, pendiente)
    const done = index < current;
    const active = omdex === current;
    const pending = index > current;
}