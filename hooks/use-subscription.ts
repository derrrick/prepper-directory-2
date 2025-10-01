"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

interface SubscriptionStatus {
  isPremium: boolean
  isLoading: boolean
  user: User | null
  subscriptionEndsAt: string | null
}

export function useSubscription(): SubscriptionStatus {
  const [status, setStatus] = useState<SubscriptionStatus>({
    isPremium: false,
    isLoading: true,
    user: null,
    subscriptionEndsAt: null,
  })

  useEffect(() => {
    const supabase = createClient()

    async function checkSubscription() {
      try {
        // Get current user
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          setStatus({ isPremium: false, isLoading: false, user: null, subscriptionEndsAt: null })
          return
        }

        // Get user profile with subscription status
        const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

        setStatus({
          isPremium: profile?.subscription_status === "premium",
          isLoading: false,
          user,
          subscriptionEndsAt: profile?.subscription_ends_at || null,
        })
      } catch (error) {
        console.error("[v0] Error checking subscription:", error)
        setStatus({ isPremium: false, isLoading: false, user: null, subscriptionEndsAt: null })
      }
    }

    checkSubscription()

    // Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      checkSubscription()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return status
}
