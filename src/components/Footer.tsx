'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DOWNLOAD_URL } from '@/lib/site-images';

export default function Footer() {
  const isDownloadPage = usePathname() === '/download-teen-patti-gold-apk';
  const downloadHref = isDownloadPage ? '/' : DOWNLOAD_URL;

  return (
    <footer className="bg-primary text-white py-8 px-4 md:px-8 border-t border-gray-800 relative z-20 shrink-0 min-h-[420px] flex flex-col">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Teen Patti Gold</h3>
            <p className="text-sm text-gray-300 mb-4">
              Teen Patti Gold is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and many other exciting games. Earn real cash with JazzCash & EasyPaisa payments.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Ff9hMv5m2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download-teen-patti-gold-apk" className="text-gray-300 hover:text-accent transition-colors">
                  Download APK Latest Version
                </Link>
              </li>
              <li>
                <Link href="/download-teen-patti-gold-apk" className="text-gray-300 hover:text-accent transition-colors">
                  Download Guide
                </Link>
              </li>
              <li>
                <Link href="/teen-patti-gold-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href="/teen-patti-gold-for-ios" className="text-gray-300 hover:text-accent transition-colors">
                  iOS Version
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/deposit-money-in-teen-patti-gold" className="text-gray-300 hover:text-accent transition-colors">
                  How to Deposit Money
                </Link>
              </li>
              <li>
                <Link href="/withdraw-money-from-teen-patti-gold" className="text-gray-300 hover:text-accent transition-colors">
                  How to Withdraw Money
                </Link>
              </li>
              <li>
                <Link href="/blog/create-teen-patti-gold-account-and-login" className="text-gray-300 hover:text-accent transition-colors">
                  Account &amp; Login
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-play-teen-patti-gold" className="text-gray-300 hover:text-accent transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-earn-money-from-teen-patti-gold" className="text-gray-300 hover:text-accent transition-colors">
                  How to Earn Money
                </Link>
              </li>
              <li>
                <Link href="/blog/teen-patti-gold-referral-code-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Referral Code Pakistan
                </Link>
              </li>
              <li>
                <Link href="/blog/is-teen-patti-gold-real-or-fake" className="text-gray-300 hover:text-accent transition-colors">
                  Is Teen Patti Gold Real?
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Download */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Download App</h3>
            <p className="text-sm text-gray-300 mb-4">
              Download Teen Patti Gold to enjoy the best card gaming experience and earn real cash rewards on your mobile device.
            </p>
            <a 
              href={downloadHref}
              {...(!isDownloadPage ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
            >
              <span>DOWNLOAD NOW</span>
              <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2026 Teen Patti Gold. All rights reserved. | <Link href="/" className="hover:text-accent">teenpattigoldgame.com.pk</Link></p>
        </div>
      </div>
    </footer>
  );
} 