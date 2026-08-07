import { SITE_ORIGIN } from '@/lib/schema-image-licensing';

/**
 * Schema.org ImageObject licensing fields as HTML microdata.
 * Google Rich Results / Search Console Image Metadata reads these from
 * visible page markup (in addition to JSON-LD). Required optional fields:
 * creator, license, acquireLicensePage, copyrightNotice, creditText.
 */
export default function ImageLicensingMicrodata() {
  return (
    <>
      <meta itemProp="license" content={SITE_ORIGIN} />
      <meta itemProp="acquireLicensePage" content={`${SITE_ORIGIN}/contact-us`} />
      <meta itemProp="copyrightNotice" content="© Teen Patti Gold. All rights reserved." />
      <meta itemProp="creditText" content="Teen Patti Gold" />
      <span itemProp="creator" itemScope itemType="https://schema.org/Organization" className="sr-only">
        <meta itemProp="name" content="Teen Patti Gold" />
        <link itemProp="url" href={SITE_ORIGIN} />
      </span>
    </>
  );
}
