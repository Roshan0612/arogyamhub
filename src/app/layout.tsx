import type { Metadata, Viewport } from 'next';
import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-500.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/barlow-condensed/latin-600-italic.css';
import './globals.css';
import './redesign.css';
import { Header } from '@/components/header';
import { ContactDock } from '@/components/contact-dock';
import { Footer } from '@/components/footer';
import { EnquiryProvider } from '@/components/enquiry';
import { PageMotion } from '@/components/motion';
import { site } from '@/lib/content';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Arogyam Wellness Hub | Move well. Feel more you. | Virar West', template: '%s | Arogyam Wellness Hub' },
  description: 'Find your movement at Arogyam Wellness Hub, Virar West. Explore CrossFit, yoga, Zumba, aerobics, sports fitness and aerial yoga. Enquire about current sessions.',
  robots: { index: site.isLive, follow: site.isLive },
  openGraph: { title:'Arogyam Wellness Hub — Move well. Feel more you.', description:'Explore a world of movement in Virar West.', type:'website', locale:'en_IN', images:[{url:'/images/community.webp',width:616,height:812,alt:'The Arogyam studio community'}] },
};
export const viewport: Viewport = { themeColor: '#f4f1e9', width:'device-width',initialScale:1 };
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><EnquiryProvider><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><ContactDock/><PageMotion/></EnquiryProvider></body></html>;
}
