'use client'

import { CheckCircle } from 'lucide-react';
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
} from '@/components/ui';


export default function CompletionModal({ isOpen, onClose, onRestart }) {
    return (
        <Dialog open = {isOpen} handler={onclose}>
            <div>
                <CheckCircle></CheckCircle>
                <DialogHeader>
                    ¡Proceso completado!
                </DialogHeader>
                <DialogBody>
                    La gestión de tu herencia ha sido completada con éxito.
                </DialogBody>
                <DialogFooter>
                    <Button onClick={onRestart}>
                        Gestionar nueva herencia
                    </Button>
                    <Button
                        onClick = {onClose}
                    >
                      Cerrar
                    </Button>
                </DialogFooter>
            </div>
        </Dialog>
    )
}