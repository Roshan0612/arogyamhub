'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/content';

export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const visible = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const sync = () => {
      if (!visible.current || document.hidden || motion.matches || connection?.saveData || userPaused.current) {
        video.current?.pause(); return;
      }
      setLoaded(true);
      video.current?.play().catch(() => setPlaying(false));
    };
    const observer = new IntersectionObserver(([entry]) => { visible.current = entry.isIntersecting; sync(); }, {threshold:.15});
    if (frame.current) observer.observe(frame.current);
    motion.addEventListener('change',sync); document.addEventListener('visibilitychange',sync);
    return () => { observer.disconnect(); motion.removeEventListener('change',sync); document.removeEventListener('visibilitychange',sync); };
  }, []);
  useEffect(() => {
    if (loaded && visible.current && !document.hidden && !userPaused.current) video.current?.play().catch(() => setPlaying(false));
  }, [loaded]);
  function toggle() {
    if (playing) {userPaused.current = true; video.current?.pause();}
    else {userPaused.current = false; setLoaded(true); video.current?.play().catch(() => setPlaying(false));}
  }
  return <div className="opening-image" ref={frame}>
    <div className="opening-video-surface">
    <Image src="/images/video-hero.webp" alt="A glimpse of training at Arogyam" fill preload sizes="(max-width:760px) 100vw, 60vw" className="opening-video-poster"/>
    {loaded && !failed && <video ref={video} src={site.heroVideo} poster="/images/video-hero.webp" muted loop playsInline preload="none" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>{setFailed(true);setPlaying(false);}} aria-label="Silent montage of real training and group sessions at Arogyam"/>}
    </div>
    {!failed && <button className="opening-video-control" onClick={toggle} aria-label={playing?'Pause background studio video':'Play background studio video'}><span aria-hidden="true">{playing?'Ⅱ':'▷'}</span>{playing?'Pause video':'Play video'}</button>}
  </div>;
}
