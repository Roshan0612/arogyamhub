'use client';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { programmes, type Programme } from '@/lib/content';
import { Arrow, ArrowUp, ProgrammeIcon } from './icons';
import { EnquireButton } from './enquiry';

function ProgrammeMedia({programme}:{programme:Programme}) {
  const video=useRef<HTMLVideoElement>(null);
  const frame=useRef<HTMLDivElement>(null);
  const pausedByUser=useRef(true);
  const visible=useRef(false);
  const [loaded,setLoaded]=useState(false);
  const [playing,setPlaying]=useState(false);
  const [failed,setFailed]=useState(false);
  useEffect(()=>{
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;
    const sync=()=>{
      if(!visible.current||document.hidden||motion.matches){video.current?.pause();return;}
      if(programme.video&&!connection?.saveData&&!pausedByUser.current){setLoaded(true);video.current?.play().catch(()=>setPlaying(false));}
    };
    const observer=new IntersectionObserver(([entry])=>{visible.current=entry.isIntersecting;sync();},{threshold:.2});
    if(frame.current)observer.observe(frame.current);
    document.addEventListener('visibilitychange',sync);motion.addEventListener('change',sync);
    return()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync);motion.removeEventListener('change',sync);};
  },[programme.video]);
  useEffect(()=>{
    if(loaded&&visible.current&&!document.hidden&&!pausedByUser.current)video.current?.play().catch(()=>setPlaying(false));
  },[loaded]);
  const poster=programme.image;
  return <div className="service-media" ref={frame}>
    <Image src={poster} alt="" fill sizes="(max-width:760px) 90vw, 48vw" className="service-media-backdrop"/>
    <Image src={poster} alt={programme.video?'A moment of training or group movement inside Arogyam':programme.alt} fill sizes="(max-width:760px) 90vw, 48vw" className={`service-media-photo ${'contain'}`}/>
    {loaded&&programme.video&&!failed&&<video ref={video} src={programme.video} poster={poster} muted loop playsInline preload="none" className="service-media-video" aria-label={`${programme.name}: silent studio footage`} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>{setFailed(true);setPlaying(false);}}/>}
    <span className="service-media-tag"><span/>{programme.video?'IN THE STUDIO':'A CLOSER LOOK'}</span>
    {programme.video&&!failed&&<button className="service-video-control" onClick={()=>{
      if(playing){pausedByUser.current=true;video.current?.pause();}
      else{pausedByUser.current=false;setLoaded(true);video.current?.play().catch(()=>setPlaying(false));}
    }} aria-label={playing?'Pause service video':'Play service video'}>{playing?'Ⅱ':'▷'} <span>{playing?'Pause film':'Play film'}</span></button>}
    <span className="service-media-caption">{programme.video?'A MOMENT FROM AROGYAM · SILENT FILM':'AROGYAM WELLNESS HUB · VIRAR WEST'}</span>
  </div>;
}

export function ProgrammeExplorer() {
  const [active,setActive]=useState(0);
  const [tour,setTour]=useState(false);
  const [hovered,setHovered]=useState(false);
  const root=useRef<HTMLDivElement>(null);
  const tabs=useRef<(HTMLButtonElement|null)[]>([]);
  const inView=useRef(false);
  const selected=programmes[active];
  useEffect(()=>{
    const observer=new IntersectionObserver(([entry])=>{inView.current=entry.isIntersecting;},{threshold:.2});
    if(root.current)observer.observe(root.current);return()=>observer.disconnect();
  },[]);
  useEffect(()=>{
    if(!tour||hovered)return;
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    if(motion.matches){setTour(false);return;}
    const stop=()=>{if(motion.matches)setTour(false);};motion.addEventListener('change',stop);
    const interval=setInterval(()=>{if(inView.current&&!document.hidden&&!root.current?.querySelector('.service-stage')?.contains(document.activeElement)&&!root.current?.querySelector('.service-tabs')?.contains(document.activeElement))setActive(i=>(i+1)%programmes.length);},8500);
    return()=>{clearInterval(interval);motion.removeEventListener('change',stop);};
  },[tour,hovered]);
  function choose(index:number){setActive((index+programmes.length)%programmes.length);setTour(false);}
  function keyDown(e:KeyboardEvent<HTMLButtonElement>,index:number){
    let next=index;
    if(e.key==='ArrowRight')next=(index+1)%programmes.length;
    else if(e.key==='ArrowLeft')next=(index-1+programmes.length)%programmes.length;
    else if(e.key==='Home')next=0;
    else if(e.key==='End')next=programmes.length-1;
    else return;
    e.preventDefault();choose(next);tabs.current[next]?.focus();
  }
  return <div className="service-showcase" ref={root}>
    <div role="tablist" aria-label="Explore Arogyam programmes" className="service-tabs">{programmes.map((p,i)=><button key={p.slug} ref={el=>{tabs.current[i]=el;}} role="tab" id={`tab-${p.slug}`} aria-selected={active===i} aria-controls="service-panel" tabIndex={active===i?0:-1} onClick={()=>choose(i)} onKeyDown={e=>keyDown(e,i)} className={active===i?'active':''}><ProgrammeIcon kind={p.slug}/><span>{p.name}</span></button>)}</div>
    <div id="service-panel" role="tabpanel" aria-labelledby={`tab-${selected.slug}`} tabIndex={0} className="service-stage" onPointerMove={e=>{
      if(e.pointerType!=='mouse')return;
      const rect=e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--pointer-x',`${e.clientX-rect.left}px`);
      e.currentTarget.style.setProperty('--pointer-y',`${e.clientY-rect.top}px`);
    }} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      <div key={selected.slug} className="service-scene">
        <ProgrammeMedia programme={selected}/>
        <div className="service-copy">
          <span className="service-counter"><i/>0{active+1} / 0{programmes.length}</span>
          <h3>{selected.name}</h3><span className="service-mood">{selected.mood}</span>
          <p>{selected.description}</p>
          <ul className="service-focus">{selected.focus.map(item=><li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul>
          <div className="service-actions"><EnquireButton programme={selected.name}>Book a free trial</EnquireButton><Link href={`/programmes/${selected.slug}`} className="text-link light">Explore details <ArrowUp/></Link></div>
          <span className="service-ghost" aria-hidden="true">0{active+1}</span>
        </div>
      </div>
    </div>
    <div className="service-controls"><button className="service-arrow" aria-label="Previous programme" onClick={()=>choose(active-1)}><Arrow className="reverse"/></button><div className="service-dots" role="group" aria-label="Choose programme">{programmes.map((p,i)=><button aria-label={`Show ${p.name}`} aria-pressed={active===i} key={p.slug} onClick={()=>choose(i)} className={active===i?'active':''}/>)}</div><button className="service-arrow" aria-label="Next programme" onClick={()=>choose(active+1)}><Arrow/></button><button className="service-tour" aria-pressed={tour} onClick={()=>setTour(t=>!t)}>{tour?'Ⅱ Pause tour':'▷ Play tour'}</button></div>
  </div>;
}
