'use client'

import Link from 'next/link'
import {
  Card,
  CardBody,
  Typography,
  Button,
} from '@/components/ui'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-gray-900 px-4">
      <Card className="w-full max-w-md p-8 bg-blue-gray-800 shadow-2xl rounded-xl">
        <CardBody className="text-center">
          <Typography variant="h4" color="yellow" className="mb-2">
            👋 Bienvenido al portal
          </Typography>
          <Typography color="white" className="mb-6 opacity-80">
            Gestiona de forma clara y sencilla el proceso de tu herencia.
          </Typography>
          <Link href="/herencia">
            <Button color="blue" size="lg" className="w-full">
              Gestiona tu herencia
            </Button>
          </Link>
        </CardBody>
      </Card>
    </main>
  )
}
