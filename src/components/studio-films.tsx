'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { studioClips } from '@/lib/content';
export function StudioFilms({embedded = false}: {embedded?: boolean}) {
  const [active, setActive] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) element.pause(); }, {threshold:0.1});
    const pauseHidden = () => { if(document.hidden) element.pause(); };
    observer.observe(element); document.addEventListener('visibilitychange',pauseHidden);
    element.play().catch(() => { /* Native controls remain available when autoplay is blocked. */ });
    return () => { observer.disconnect();document.removeEventListener('visibilitychange',pauseHidden);element.pause(); };
  }, [active]);
  return <section className={embedded ? "films-embedded" : "films-section section-pad"} aria-label="Studio videos"><div className={embedded ? "" : "container"}>
    {!embedded && <div className="section-heading" data-reveal><div><span className="eyebrow">THE STUDIO, IN MOTION</span><h2>Feel the energy.<br/><em>Find your moment.</em></h2></div><p>A few moments from real sessions.<br/>Tap a film for a closer look.</p></div>}
    <div className="films-grid">{studioClips.map(clip => <article className="film-card" key={clip.id}>
      <div className="film-frame">
        {active===clip.id ? <video ref={video} key={clip.id} src={clip.src} poster={clip.poster} controls muted playsInline preload="none" aria-label={`${clip.label}: ${clip.description} Silent video.`} onError={() => {setError(clip.id);setActive(null);}} /> :
          <button className="film-poster" onClick={() => {setError(null);setActive(clip.id);}} aria-label={`Play ${clip.label.toLowerCase()} — ${clip.duration.toLowerCase()}, silent`}>
            <Image src={clip.poster} alt={clip.description} fill sizes="(max-width: 480px) 78vw, (max-width: 900px) 44vw, 22vw" className="object-cover"/>
            <span className="film-play" aria-hidden="true">▷</span><span className="film-length">{clip.duration} · SILENT FILM</span>
          </button>}
      </div>
      <div className="film-caption"><span className="eyebrow">{clip.label}</span><h3>{clip.title}</h3></div>
      {error===clip.id && <p className="film-error" role="alert">This clip couldn’t load. Tap to try again.</p>}
    </article>)}</div>
  </div></section>;
}
