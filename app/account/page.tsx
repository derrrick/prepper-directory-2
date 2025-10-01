import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Mail, User, Calendar, LogOut, Settings } from "lucide-react"
import Link from "next/link"
import { createCustomerPortalSession } from "@/app/actions/stripe"

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>
}) {
  const supabase = await createClient()
  const params = await searchParams

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect("/auth/login")
  }

  // Fetch user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const isPremium = profile?.subscription_status === "premium"

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Success Message */}
          {params.success === "true" && (
            <div className="rounded-lg bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
              <p className="text-green-800 dark:text-green-200 font-medium">
                Welcome to Premium! Your subscription is now active.
              </p>
            </div>
          )}

          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Account</h1>
              <p className="text-muted-foreground">Manage your profile and subscription</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>

          {/* Profile Card */}
          <Card className="border-0 bg-muted">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Profile Information</CardTitle>
                {isPremium && (
                  <Badge className="rounded-md bg-black text-white dark:bg-black dark:text-white">
                    <Crown className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                )}
              </div>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">{profile?.full_name || "Not set"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-medium">{new Date(profile?.created_at || "").toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Card */}
          <Card className="border-0 bg-muted">
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Manage your premium membership</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isPremium ? (
                <>
                  <div className="rounded-lg bg-primary/5 p-4 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Premium Member</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You have access to all premium features and exclusive content.
                    </p>
                    {profile?.subscription_ends_at && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Renews on {new Date(profile.subscription_ends_at).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <form action={createCustomerPortalSession}>
                    <Button type="submit" variant="outline" className="w-full bg-transparent">
                      <Settings className="h-4 w-4 mr-2" />
                      Manage Subscription
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <div className="rounded-lg bg-muted-foreground/5 p-4 border">
                    <h3 className="font-semibold mb-2">Free Plan</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upgrade to premium for exclusive guides, advanced tools, and priority support.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Access to premium survival guides
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Advanced prepper tools and calculators
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Priority customer support
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Exclusive community access
                      </li>
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/premium">Upgrade to Premium</Link>
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="border-0 bg-muted">
            <CardHeader>
              <CardTitle>Account Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <form action="/auth/signout" method="post">
                <Button type="submit" variant="outline" className="w-full justify-start bg-transparent" size="lg">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
