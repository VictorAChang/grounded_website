"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LoginForm from "./login-form"
import SignupForm from "./signup-form"
import { ThemeToggle } from "./theme-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Yoga", path: "/yoga" },
    { name: "Coffee", path: "/coffee" },
    { name: "Events", path: "/events" },
    { name: "Join Us", path: "/join-us" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                {/* Lotus flower petals */}
                <path
                  d="M12 4C10 6 9 8 9 10C9 12 10 14 12 16C14 14 15 12 15 10C15 8 14 6 12 4Z"
                  fill="#a45a52"
                  stroke="#a45a52"
                  strokeWidth="0.5"
                />
                <path
                  d="M7 8C8 10 9 12 10 13C11 14 13 15 15 15C14 13 13 11 12 10C11 9 9 8 7 8Z"
                  fill="#a45a52"
                  stroke="#a45a52"
                  strokeWidth="0.5"
                />
                <path
                  d="M17 8C16 10 15 12 14 13C13 14 11 15 9 15C10 13 11 11 12 10C13 9 15 8 17 8Z"
                  fill="#a45a52"
                  stroke="#a45a52"
                  strokeWidth="0.5"
                />
                {/* Coffee cup */}
                <path
                  d="M6 14H18V17C18 19.2091 16.2091 21 14 21H10C7.79086 21 6 19.2091 6 17V14Z"
                  fill="#8b4513"
                  stroke="#8b4513"
                  strokeWidth="0.5"
                />
                {/* Coffee steam */}
                <path
                  d="M8 14C8 12 9 10 12 10C15 10 16 12 16 14"
                  stroke="#8b4513"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Cup handle */}
                <path
                  d="M18 16H20C20 14.3431 18.6569 13 17 13V15C17 15.5523 17.4477 16 18 16Z"
                  fill="#8b4513"
                  stroke="#8b4513"
                  strokeWidth="0.5"
                />
              </svg>
              <span className="text-xl font-bold text-amber-900 dark:text-amber-400 serif-font">Grounded</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-amber-700 dark:text-amber-500 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="bg-amber-700 hover:bg-amber-800 text-white"
                  onClick={() => setAuthMode("login")}
                >
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="serif-font">{authMode === "login" ? "Login" : "Sign Up"}</DialogTitle>
                  <DialogDescription>
                    {authMode === "login"
                      ? "Enter your credentials to access your account."
                      : "Create a new account to join The Mindful Mug community."}
                  </DialogDescription>
                </DialogHeader>
                {authMode === "login" ? (
                  <>
                    <LoginForm />
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Don&apos;t have an account?{" "}
                        <button
                          onClick={() => setAuthMode("signup")}
                          className="text-amber-700 dark:text-amber-500 hover:underline"
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <SignupForm />
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <button
                          onClick={() => setAuthMode("login")}
                          className="text-amber-700 dark:text-amber-500 hover:underline"
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-amber-700 dark:text-amber-500 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white mt-2"
                  onClick={() => setAuthMode("login")}
                >
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="serif-font">{authMode === "login" ? "Login" : "Sign Up"}</DialogTitle>
                  <DialogDescription>
                    {authMode === "login"
                      ? "Enter your credentials to access your account."
                      : "Create a new account to join The Mindful Mug community."}
                  </DialogDescription>
                </DialogHeader>
                {authMode === "login" ? (
                  <>
                    <LoginForm />
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Don&apos;t have an account?{" "}
                        <button
                          onClick={() => setAuthMode("signup")}
                          className="text-amber-700 dark:text-amber-500 hover:underline"
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <SignupForm />
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <button
                          onClick={() => setAuthMode("login")}
                          className="text-amber-700 dark:text-amber-500 hover:underline"
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
