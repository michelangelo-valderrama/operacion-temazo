import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '404 - Página no encontrada',
};

export default function NotFound() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="flex flex-col gap-y-12">
        <div className="font-bold text-center">
          <p className="text-4xl mb-6 text-foreground/80">404</p>
          <h1 className="text-4xl mb-3">Página no encontrada</h1>
          <p className="font-medium text-muted-foreground">No se ha encontrado la página que buscabas.</p>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <Button className="font-semibold rounded-full" size="lg">Inicio</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
