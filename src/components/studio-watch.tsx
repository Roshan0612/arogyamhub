'use client';
import { useEffect, useRef, useState } from 'react';
import { Close } from './icons';
import { site } from '@/lib/content';

export function StudioWatch() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const pause = () => { if (document.hidden) video.current?.pause(); };
    document.addEventListener('visibilitychange', pause);
    return () => document.removeEventListener('visibilitychange', pause);
  }, []);
  const open = () => {
    setFailed(false);
    dialog.current?.showModal();
    if (video.current && !video.current.src) video.current.src = site.heroVideo;
    video.current?.play().catch(() => {});
  };
  const close = () => { video.current?.pause(); dialog.current?.close(); };
  return <>
    <button className="watch-button" onClick={open}><span aria-hidden="true">▶</span> Watch the studio</button>
    <dialog ref={dialog} className="watch-dialog" aria-label="A glimpse inside Arogyam" onClose={() => video.current?.pause()} onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <button className="icon-button watch-close" onClick={close} aria-label="Close studio film"><Close/></button>
      <video ref={video} controls muted playsInline preload="none" poster="/images/video-hero.webp" aria-label="Silent studio montage" onError={()=>setFailed(true)}/>
      {failed&&<p role="alert">This film could not load. Please try again.</p>}
      <p>A glimpse inside Arogyam · Silent film</p>
    </dialog>
  </>;
}
