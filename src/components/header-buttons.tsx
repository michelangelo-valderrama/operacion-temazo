"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

function HeaderButton({ children, disabled, onClick }: HeaderButtonProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      disabled={disabled}
      onClick={onClick}
      className="bg-background/60 hover:bg-background"
    >
      {children}
    </Button>
  )
}

export function HeaderButtons() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    console.log("pathname", pathname)
  }, [pathname])

  const handlePrevious = () => {
    router.back()
  };

  const handleNext = () => {
    router.forward()
  };

  return (
    <>
      <HeaderButton onClick={handlePrevious}>
        <ChevronLeft />
      </HeaderButton>
      <HeaderButton onClick={handleNext}>
        <ChevronRight />
      </HeaderButton>
    </>
  )
}