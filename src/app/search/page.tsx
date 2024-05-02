"use client"

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePageColorStore } from "@/providers/page-color.provider";

export default function Page() {
  const { updatePageColor } = usePageColorStore((state) => state)

  useEffect(() => {
    updatePageColor()
  }, [])

  return (
    <div>
      <h1>Search</h1>
      <Button>Click me!</Button>
    </div>
  );
}