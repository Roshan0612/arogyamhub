'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { gallery } from '@/lib/content';
import { ArrowUp, Close } from './icons';
export function StudioGallery() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <div className="gallery-filters" role="group" aria-label="Filter studio photographs">{['All','Studio','Sessions','Community'].map(value => <button key={value} className={filter===value?'active':''} aria-pressed={filter===value} onClick={() => setFilter(value)}>{value}</button>)}</div>
    <div className="gallery-grid">{gallery.map((p,i) => filter==='All'||filter===p.category ? <button className="gallery-card" key={p.src} onClick={() => {setSelected(i);dialog.current?.showModal();}} aria-label={`View photograph: ${p.label}`}>
      <div className="gallery-image"><Image src={p.src} alt={p.alt} fill sizes="(max-width: 600px) 82vw, (max-width: 1000px) 44vw, 28vw" className="object-cover"/><span className="gallery-expand"><ArrowUp /></span></div><span className="gallery-caption">{p.label}<small>{p.category}</small></span>
    </button> : null)}</div>
    <dialog ref={dialog} className="gallery-dialog" aria-label={gallery[selected].label} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}}>
      <button className="icon-button gallery-close" onClick={()=>dialog.current?.close()} aria-label="Close photograph"><Close /></button>
      <div className="lightbox-image"><Image src={gallery[selected].src} alt={gallery[selected].alt} fill sizes="90vw" className="object-contain" /></div>
      <div className="lightbox-nav"><button onClick={()=>setSelected((selected+gallery.length-1)%gallery.length)} aria-label="Previous photograph">←</button><span>{gallery[selected].label} <small>{selected+1} / {gallery.length}</small></span><button onClick={()=>setSelected((selected+1)%gallery.length)} aria-label="Next photograph">→</button></div>
    </dialog>
  </>;
}
