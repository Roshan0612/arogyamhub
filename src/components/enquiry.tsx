'use client';
import { createContext, useContext, useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { programmes, site } from '@/lib/content';
import { ArrowUp, Close } from './icons';

const EnquiryContext = createContext<(programme?: string) => void>(() => {});

export function TrialForm({ initialProgramme = 'Help me choose' }: { initialProgramme?: string }) {
  const id = useId();
  const [ready, setReady] = useState('');
  const [error, setError] = useState('');
  const result = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ready) result.current?.focus(); }, [ready]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    if (name.length < 2 || name.length > 60 || /[\x00-\x1F<>]/.test(name)) {
      setError('Please enter a name between 2 and 60 characters.'); return;
    }
    const programme = String(data.get('programme') || 'Help me choose');
    const day = String(data.get('day') || 'Flexible');
    const message = `Hi Arogyam! I’m ${name}. I would like to book a free trial. Programme: ${programme}. Preferred day: ${day}. Please confirm an available session and any trial terms.`;
    setReady(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`);
    setError('');
  }
  return <div className="trial-form">
    <form onSubmit={submit} hidden={Boolean(ready)}>
      <label htmlFor={`${id}-name`}>Your name</label>
      <input id={`${id}-name`} name="name" autoComplete="name" minLength={2} maxLength={60} required placeholder="Full name"/>
      <label htmlFor={`${id}-programme`}>Choose a programme</label>
      <select id={`${id}-programme`} name="programme" defaultValue={initialProgramme}><option>Help me choose</option>{programmes.map(p=><option key={p.slug}>{p.name}</option>)}</select>
      <label htmlFor={`${id}-day`}>Preferred day <span>(optional)</span></label>
      <select id={`${id}-day`} name="day" defaultValue="Flexible">{['Flexible','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(day=><option key={day}>{day}</option>)}</select>
      {error&&<p role="alert" className="form-error">{error}</p>}
      <button className="button button-orange form-submit" type="submit">Request free trial <ArrowUp/></button>
      <p className="trial-note">Continue to WhatsApp to send your request.<br/>The studio will confirm your session.</p>
      <p className="fine-print">Your details stay in this browser until you open WhatsApp. <a href="/privacy">Privacy</a></p>
    </form>
    {ready&&<div className="enquiry-ready" ref={result} tabIndex={-1} role="status"><span className="ready-symbol" aria-hidden="true">↗</span><h3>Ready for your first step?</h3><p>Your message is prepared. Open WhatsApp, review it and press Send. Your session is confirmed only when the studio replies.</p><a className="button button-orange" href={ready} target="_blank" rel="noopener noreferrer">Open WhatsApp <ArrowUp/></a><button className="text-button" onClick={()=>setReady('')}>Edit my details</button></div>}
  </div>;
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [programme, setProgramme] = useState('Help me choose');
  const [instance, setInstance] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function show(value = 'Help me choose') {
    setProgramme(value); setInstance(i=>i+1); setOpen(true); dialog.current?.showModal();
  }
  function close() { dialog.current?.close(); setOpen(false); }
  return <EnquiryContext.Provider value={show}>{children}
    <dialog ref={dialog} className="enquiry-dialog" aria-labelledby="enquiry-title" onClose={()=>setOpen(false)} onClick={e=>{if(e.target===e.currentTarget)close();}}>
      <div className="dialog-content"><button className="icon-button dialog-close" onClick={close} aria-label="Close trial enquiry"><Close/></button><span className="eyebrow">YOUR FREE TRIAL</span><h2 id="enquiry-title">Your first step<br/>starts here<span className="accent-dot">.</span></h2><p className="form-intro">Choose your movement. Let’s find a session for you.</p><TrialForm key={instance} initialProgramme={programme}/></div>
    </dialog>
  </EnquiryContext.Provider>;
}
export function EnquireButton({children = 'Book a free trial', programme, className = 'button button-orange'}: {children?:ReactNode; programme?:string; className?:string}) {
  const open = useContext(EnquiryContext);
  return <button className={className} onClick={()=>open(programme)}>{children}<ArrowUp/></button>;
}
