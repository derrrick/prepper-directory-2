"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Crown, Check } from "lucide-react"
import Link from "next/link"

interface PremiumModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  feature?: string
}

export function PremiumModal({ open, onOpenChange, feature = "this feature" }: PremiumModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Crown className="h-5 w-5 text-primary" />
            </div>
            <DialogTitle>Upgrade to Premium</DialogTitle>
          </div>
          <DialogDescription>Unlock {feature} and get access to all premium features</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Advanced Tools & Calculators</p>
                <p className="text-sm text-muted-foreground">
                  Multi-scenario planning, inventory management, and budget optimization
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Expert Content & Analysis</p>
                <p className="text-sm text-muted-foreground">
                  In-depth threat reports, downloadable guides, and monthly webinars
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Private Community Access</p>
                <p className="text-sm text-muted-foreground">Connect with serious preppers and get expert support</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-bold">$9</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">or $79/year (save $29)</p>
          </div>

          <div className="flex flex-col gap-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/premium">View Premium Plans</Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
