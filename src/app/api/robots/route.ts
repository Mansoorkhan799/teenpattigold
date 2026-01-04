import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://teenpattigoldgame.com.pk';
  
  const robotsTxt = `# Teen Patti Gold Robots.txt
User-agent: *
Allow: /

# Priority pages
Allow: /download-teen-patti-gold
Allow: /deposit-money-in-teen-patti-gold
Allow: /withdraw-money-from-teen-patti-gold
Allow: /teen-patti-gold-for-pc
Allow: /teen-patti-gold-for-ios
Allow: /about-us
Allow: /blog
Allow: /blog/is-teen-patti-gold-real-or-fake
Allow: /blog/create-teen-patti-gold-account-and-login
Allow: /blog/tips-to-win-big-in-teen-patti-gold

# Standard pages
Allow: /contact-us
Allow: /privacy
Allow: /disclaimer
Allow: /terms

# Mobile-specific directives
User-agent: Googlebot-Mobile
Allow: /

# Image-specific directives
User-agent: Googlebot-Image
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/image-sitemap.xml

# Crawl delay to prevent server overload
Crawl-delay: 1
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
