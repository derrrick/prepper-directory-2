"use client"

import type React from "react"

import { useState } from "react"
import { X, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

interface LeadMagnetModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  downloadUrl?: string
  source: string
}

export default function LeadMagnetModal({
  isOpen,
  onClose,
  title,
  description,
  downloadUrl,
  source,
}: LeadMagnetModalProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const result = await subscribeToNewsletter(email, source)

      if (result.success) {
        setStatus("success")
        setMessage("Check your email for the download link!")

        // In production, you would:
        // 1. Send email with download link
        // 2. Track conversion
        // 3. Optionally auto-download here

        setTimeout(() => {
          onClose()
          setStatus("idle")
          setEmail("")
        }, 3000)
      } else {
        setStatus("error")
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-balance">{title}</h2>
            <p className="text-sm text-muted-foreground text-pretty">{description}</p>
          </div>
        </div>

        {status === "success" ? (
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-start gap-3">
            <Download className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Success!</p>
              <p className="text-sm text-muted-foreground">{message}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === "loading"}
                className="w-full px-3 py-2 rounded-lg bg-background border border-border disabled:opacity-50"
              />
            </div>

            {status === "error" && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive">{message}</p>
              </div>
            )}

            <Button type="submit" disabled={status === "loading"} className="w-full">
              {status === "loading" ? "Sending..." : "Get Free Download"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We'll send you the download link and occasional preparedness tips. Unsubscribe anytime.
            </p>
          </form>
        )}
      </Card>
    </div>
  )
}
