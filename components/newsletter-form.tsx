"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

interface NewsletterFormProps {
  variant?: "inline" | "card"
  source?: string
}

export default function NewsletterForm({ variant = "inline", source = "unknown" }: NewsletterFormProps) {
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
        setMessage("Thanks! Check your email to confirm your subscription.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
        <p className="text-sm text-foreground">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className={variant === "inline" ? "flex gap-2" : "space-y-2"}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 px-3 py-2 rounded-full bg-background text-sm disabled:opacity-50"
        />
        <Button type="submit" disabled={status === "loading"} size={variant === "inline" ? "default" : "sm"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      {status === "error" && <p className="text-sm text-destructive">{message}</p>}
    </form>
  )
}
