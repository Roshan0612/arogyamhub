import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/content';
export const metadata: Metadata = {title:'Privacy information'};
export default function Privacy() {
  return <main id="main" className="container legal-page"><Link href="/" className="back-link">← Back to Arogyam</Link><span className="eyebrow">CLEAR AND SIMPLE</span><h1>Your privacy.</h1>
    <h2>Enquiry details</h2><p>The enquiry form prepares a WhatsApp message in your browser. This website does not save your name, programme preference, preferred day or message to a database. Selecting “Open WhatsApp” shares that prepared message with WhatsApp; you still need to press Send there for the studio to receive it.</p>
    <h2>External services</h2><p>WhatsApp, Instagram and Google Maps links open third-party services. Their own privacy policies apply when you visit them. A Google Maps frame is embedded in the location section and loads as you approach it. Google may receive technical data such as your IP address when that map loads. No social-media feeds are embedded.</p>
    <h2>Cookies and analytics</h2><p>This version does not install advertising, analytics or tracking cookies. The hosting provider may process technical request data such as IP addresses and access logs to deliver and protect the website.</p>
    <h2>Questions</h2><p>For questions about enquiries received by the studio, contact Arogyam on <a href={site.phoneHref}>{site.phone}</a>.</p>
  </main>;
}
