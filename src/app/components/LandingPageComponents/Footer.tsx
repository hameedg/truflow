'use client';
import Link from 'next/link'
import { Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-[#bd9dfe] to-[#723ef2] flex justify-center items-center text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          {/* Logo placeholder */}
          <Image
          src="/assets/truflow_just_logo.png"
          alt="Truflow Logo"
          width={50}
          height={50}
          className="mx-auto md:mx-0 mb-4"
        />
          <div className="flex items-center mb-2">
            <Mail className="w-4 h-4 mr-2" />
            <a href="mailto:helpdesk@truflow.ai" className="hover:underline">helpdesk@truflow.ai</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>California, USA</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="border-t border-[#aa94d6] w-full"></div>
            <h2 className="mx-4 text-lg font-semibold">Resources</h2>
            <div className="border-t border-[#aa94d6] w-full"></div>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li><Link href="/company" className="hover:underline">Company</Link></li>
            <li><Link href="/features" className="hover:underline">Features</Link></li>
            <li><Link href="/book-demo" className="hover:underline">Book Demo</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-[#aa94d6] pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TruFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}