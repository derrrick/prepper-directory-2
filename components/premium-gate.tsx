"use client"

import { type ReactNode, useState } from "react"
import { useSubscription } from "@/hooks/use-subscription"
import { PremiumModal } from "./premium-modal"
import { Lock, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface PremiumGateProps {
  children: ReactNode
  fallback?: ReactNode
  blur?: boolean
  showLock?: boolean
  feature?: string
  className?: string
}

export function PremiumGate({
  children,
  fallback,
  blur = true,
  showLock = true,
  feature = "this feature",
  className,
}: PremiumGateProps) {
  const { isPremium, isLoading } = useSubscription()
  const [showModal, setShowModal] = useState(false)

  if (isLoading) {
    return (
      <div className={cn("flex items-center justify-center p-8", className)}>
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (isPremium) {
    return <>{children}</>
  }

  if (fallback) {
    return <>{fallback}</>
  }

  return (
    <>
      <div className={cn("relative", className)}>
        <div className={cn(blur && "blur-sm pointer-events-none select-none")}>{children}</div>
        {showLock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="flex flex-col items-center gap-2 rounded-lg bg-background/95 backdrop-blur-sm border-2 border-primary p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <Lock className="h-8 w-8 text-primary" />
              <div className="text-center">
                <p className="font-semibold">Premium Feature</p>
                <p className="text-sm text-muted-foreground">Upgrade to access {feature}</p>
              </div>
            </button>
          </div>
        )}
      </div>
      <PremiumModal open={showModal} onOpenChange={setShowModal} feature={feature} />
    </>
  )
}
