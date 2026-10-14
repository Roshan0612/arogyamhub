import Link from 'next/link';
import { site, programmes } from '@/lib/content';
import { Brand } from './header';
import { ArrowUp, Pin } from './icons';
import { MobileContact } from './mobile-contact';
export function Footer() {
  return <>
    <footer className="site-footer"><div className="container">
      <div className="footer-top"><div><Brand/><p>A little movement.<br/>A little more you.</p></div>
        <div><span className="eyebrow">FIND YOUR MOVEMENT</span><div className="footer-programmes">{programmes.map(p=><Link href={`/programmes/${p.slug}`} key={p.slug}>{p.name}</Link>)}</div></div>
        <div><span className="eyebrow">SAY HELLO</span><a href={site.phoneHref} className="footer-phone">{site.phone}</a><a className="inline-link" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUp/></a><Link href="/#visit" className="inline-link">Find the studio <ArrowUp/></Link></div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">AROGYAM<span>↗</span></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Arogyam Wellness Hub</span><span>Made for movement. Made for Virar.</span><Link href="/privacy">Privacy</Link></div>
    </div></footer>
    <MobileContact/>
  </>;
}
