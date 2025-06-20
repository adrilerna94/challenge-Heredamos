'use client'

import { CheckCircle } from 'lucide-react';
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
} from '@/components/ui';


export default function SuccessModal({ isOpen, onClose, onRestart }) {
  return (
    <Dialog open={isOpen} handler={onClose} size="sm" className="rounded-xl p-0">
      <div className="p-6 text-center">
        <CheckCircle className="w-14 h-14 mx-auto text-green-500 mb-4" />
        <DialogHeader className="justify-center text-2xl text-gray-900">
          ¡Proceso completado!
        </DialogHeader>
        <DialogBody className="text-gray-600 text-sm">
          La gestión de tu herencia ha sido completada con éxito.
        </DialogBody>
        <DialogFooter className="flex justify-center gap-3 pt-4">
          <Button
            variant="outlined"
            color="blue"
            onClick={onRestart}
            className="capitalize"
          >
            Gestionar nueva herencia
          </Button>
          <Button
            color="green"
            onClick={onClose}
            className="capitalize"
          >
            Cerrar
          </Button>
        </DialogFooter>
      </div>
    </Dialog>
  )
}