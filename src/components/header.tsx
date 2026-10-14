'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { EnquireButton } from './enquiry';
import { ArrowUp, Close } from './icons';
export function Brand() {
  return <Link href="/" className="brand" aria-label="Arogyam Wellness Hub home">
    <span className="brand-symbol"><Image src="/images/logo.webp" alt="" width={38} height={44} /></span>
    <span>AROGYAM<small>WELLNESS HUB</small></span>
  </Link>;
}
export function Header() {
  const menu = useRef<HTMLDialogElement>(null);
  const close = () => menu.current?.close();
  return <>
    <header className="site-header">
      <div className="container header-inner"><Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#programmes">Programmes</Link><Link href="/#studio">The studio</Link><Link href="/#media">Videos & photos</Link><Link href="/#visit">Visit us</Link>
        </nav>
        <div className="header-actions"><EnquireButton className="button button-dark header-cta">Free trial</EnquireButton>
          <button className="menu-toggle icon-button" onClick={() => menu.current?.showModal()} aria-label="Open navigation" aria-haspopup="dialog"><span/><span/></button>
        </div>
      </div>
    </header>
    <dialog ref={menu} className="mobile-menu" aria-labelledby="menu-title" onClick={e => { if(e.target === e.currentTarget) close(); }}>
      <div className="menu-top"><span id="menu-title" className="eyebrow">EXPLORE AROGYAM</span><button className="icon-button" onClick={close} aria-label="Close navigation"><Close /></button></div>
      <nav aria-label="Mobile navigation">{[['Programmes','/#programmes'],['The studio','/#studio'],['Videos & photos','/#media'],['Membership','/#membership'],['Visit us','/#visit']].map(([name,href]) => <Link href={href} key={href} onClick={close}>{name}<ArrowUp /></Link>)}</nav>
      <p>Move well. Feel more you.</p>
    </dialog>
  </>;
}
