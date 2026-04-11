'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import { LOGO_PATH_VERSIONED } from '@/lib/site-images';

export default function Header() {
  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <div className="relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 mr-2 md:mr-3">
            <Image
              src={LOGO_PATH_VERSIONED}
              alt="Teen Patti Gold - Pakistan's #1 card game app logo"
              width={56}
              height={56}
              className="object-contain rounded-lg w-full h-full"
              loading="eager"
              fetchPriority="high"
              quality={75}
            />
          </div>
          <span className="text-accent text-xl md:text-2xl lg:text-3xl font-bold">
            Teen Patti Gold
          </span>
        </Link>

        {/* Desktop Navigation — only shown at lg (1024px+) to avoid overflow on tablets */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/download-teen-patti-gold-apk" className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href="/deposit-money-in-teen-patti-gold" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-teen-patti-gold" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/teen-patti-gold-for-pc" className="text-white hover:text-accent font-medium transition-colors">
            PC Version
          </Link>
          <Link href="/teen-patti-gold-for-ios" className="text-white hover:text-accent font-medium transition-colors">
            iOS Version
          </Link>
          <Link href="/about-us" className="text-white hover:text-accent font-medium transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-white hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact-us" className="text-white hover:text-accent font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
} 