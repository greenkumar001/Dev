"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "./logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white dark:bg-dark-blue-900 sticky top-0 z-50 shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto md:hidden border-sky-blue-200 text-sky-blue-700 hover:bg-sky-blue-50 dark:border-dark-blue-700 dark:text-sky-blue-400 dark:hover:bg-dark-blue-800"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white dark:bg-dark-blue-900">
            <div className="mt-4 mb-8">
              <Logo />
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-lg font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-dark-blue-700 hover:text-sky-blue-600 dark:text-sky-blue-200 dark:hover:text-sky-blue-400 hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

