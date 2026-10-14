'use client';
import { useRef, useState, type KeyboardEvent } from 'react';
import { StudioFilms } from './studio-films';
import { StudioGallery } from './gallery';

export function MediaHub() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(e: KeyboardEvent<HTMLButtonElement>) {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? 1 : 1 - active;
    setActive(next); tabs.current[next]?.focus();
  }
  return <section id="media" className="media-section section-pad"><div className="container">
    <div className="section-heading" data-reveal><div><span className="eyebrow">LIFE AT AROGYAM</span><h2>Feel the energy<span className="accent-dot">.</span></h2></div><p>Real sessions. Familiar faces.<br/>A closer look at your next routine.</p></div>
    <div className="media-tabs" role="tablist" aria-label="Browse studio media">{['Videos','Photos'].map((name,i)=><button ref={el=>{tabs.current[i]=el;}} id={`media-tab-${i}`} aria-controls="media-panel" role="tab" aria-selected={active===i} tabIndex={active===i?0:-1} key={name} onClick={()=>setActive(i)} onKeyDown={navigate}><span aria-hidden="true">{i===0?'▷':'▧'}</span>{name}</button>)}</div>
    <div id="media-panel" role="tabpanel" aria-labelledby={`media-tab-${active}`} tabIndex={0}>{active===0?<StudioFilms embedded/>:<StudioGallery/>}</div>
    <p className="media-hint">{active===0?'Swipe to explore · Tap a film to play':'Tap a photo for a closer look'}</p>
  </div></section>;
}
