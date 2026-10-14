import { site } from '@/lib/content';
import { Phone, WhatsApp } from './icons';
export function ContactDock(){return <aside className="contact-dock" aria-label="Contact Arogyam directly">
  <a className="dock-button dock-call" href={site.phoneHref} aria-label="Call Arogyam Wellness Hub"><Phone/><span className="dock-label">Call the studio</span></a>
  <a className="dock-button dock-whatsapp" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Arogyam! I would like to book a free trial. Please share available sessions and trial terms.')}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Arogyam on WhatsApp"><WhatsApp/><span className="dock-label">Chat on WhatsApp</span></a>
</aside>}
