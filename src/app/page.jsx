'use client'
import Link from 'next/link';
import {
  Card,
  CardBody,
  Typography,
  Button,
} from '@/components/ui';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <Card className="w-full max-w-md p-6 shadow-xl rounded-xl">
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            👋 Bienvenido al portal
          </Typography>
          <Typography color="gray" className="mb-6 font-normal">
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
