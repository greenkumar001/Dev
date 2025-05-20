import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-dark-blue-900 text-white">
      <div className="container grid gap-8 px-4 py-10 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-sky-blue-200 mt-2">
            Manufacturers of specialized anti-fire and anti-bacterial doors for
            pharmaceutical labs and defense facilities.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-sky-blue-100">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-sky-blue-100">Products</h3>
          <nav className="flex flex-col gap-2">
            <Link
              href="/products?category=clean-room-doors"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              Clean Room Doors
            </Link>
            <Link
              href="/products?category=fire-doors"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              Fire Doors
            </Link>
            <Link
              href="/products?category=accessories"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              Accessories
            </Link>
            <Link
              href="/products?category=hvac-ducting"
              className="text-sm text-sky-blue-300 hover:text-sky-blue-100 hover:underline underline-offset-4"
            >
              HVAC Ducting
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-sky-blue-100">Contact Us</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-blue-400" />
              <span className="text-sm text-sky-blue-300">
                Hingna, Nagpur, Maharashtra, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-sky-blue-400" />
              <span className="text-sm text-sky-blue-300">
                +91 XXXX XXX XXX
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-blue-400" />
              <span className="text-sm text-sky-blue-300">
                info@devrathindustries.com
              </span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Link
              href="#"
              className="text-sky-blue-400 hover:text-sky-blue-200"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-sky-blue-400 hover:text-sky-blue-200"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-sky-blue-400 hover:text-sky-blue-200"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-sky-blue-400 hover:text-sky-blue-200"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-blue-800">
        <div className="container flex flex-col gap-2 px-4 py-6 text-center md:px-6 md:flex-row md:justify-between">
          <p className="text-sm text-sky-blue-400">
            © {new Date().getFullYear()} Devrath Industries Pvt Ltd. All rights
            reserved.
          </p>
          <nav className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-sky-blue-400 hover:text-sky-blue-200 hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-sky-blue-400 hover:text-sky-blue-200 hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
