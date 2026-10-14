'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { EnquireButton } from './enquiry';
import { Pin } from './icons';
import { site } from '@/lib/content';

export function MobileContact() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('home-intro');
    const trial = document.getElementById('trial');
    if (!hero) {setShow(true); return;}
    const visibility = new Map<Element, boolean>([[hero,true]]);
    if (trial) visibility.set(trial,false);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => visibility.set(entry.target,entry.isIntersecting));
      setShow(![...visibility.values()].some(Boolean));
    }, {threshold:0});
    visibility.forEach((_,element)=>observer.observe(element));
    return ()=>observer.disconnect();
  }, [pathname]);
  return <div className={`mobile-contact ${show?'is-visible':'is-hidden'}`} inert={!show} aria-hidden={!show}><EnquireButton className="mobile-enquire">Book a free trial</EnquireButton><a href={site.maps} target="_blank" rel="noopener noreferrer"><Pin/>Directions</a></div>;
}
