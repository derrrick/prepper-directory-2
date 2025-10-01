import { Search, Menu, PocketKnife as Knife } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Knife className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">prepper.directory</span>
          </Link>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/gear" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Gear Reviews</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/tools" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Prep Calculators</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Guides & Articles</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 rounded-full px-3 py-2 w-64 bg-chart-5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
            />
          </div>
          <ThemeToggle />
          <Link href="/auth/login">
            <Button variant="outline" size="sm" className="bg-transparent rounded-full">
              Sign In
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
