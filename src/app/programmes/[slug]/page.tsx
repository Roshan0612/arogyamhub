import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { programmes, site } from '@/lib/content';
import { EnquireButton } from '@/components/enquiry';
import { Arrow, ArrowUp } from '@/components/icons';
export const dynamicParams = false;
export function generateStaticParams() { return programmes.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug}=await params; const p=programmes.find(item=>item.slug===slug);
  return p ? {title:`${p.name} in Virar West`, description:p.description, alternates:{canonical:`/programmes/${p.slug}`}} : {title:'Programme not found'};
}
export default async function ProgrammePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const p=programmes.find(item=>item.slug===slug); if(!p) notFound();
  return <main id="main"><section className="container programme-page"><Link href="/#programmes" className="back-link">← All programmes</Link><div className="programme-page-grid"><div className="programme-page-copy"><span className="eyebrow">{p.mood} · VIRAR WEST</span><h1>{p.name}<span>{p.headline}</span></h1><p>{p.description}</p><div className="focus-tags">{p.focus.map(f=><span key={f}>{f}</span>)}</div><EnquireButton programme={p.name}>Book a free trial</EnquireButton><p className="fine-print">Ask for current timings, fees and trial availability.</p></div><div className="programme-page-image"><Image src={p.image} alt={p.alt} fill preload sizes="(max-width: 760px) 90vw, 45vw" className="object-cover"/></div></div></section>
  <section className="programme-about section-pad"><div className="container programme-about-grid"><h2>A little curiosity.<br/><em>A fresh start.</em></h2><div><p>{p.intro}</p><p>Before attending, share any relevant experience, preferences or limitations with the instructor and confirm what you need to bring.</p><a href={site.phoneHref} className="inline-link">Speak with the studio <ArrowUp/></a></div></div></section>
  <section className="container section-pad"><span className="eyebrow">KEEP EXPLORING</span><h2>Find another<br/><em>way to move.</em></h2><div className="related-programmes">{programmes.filter(item=>item.slug!==p.slug).slice(0,3).map(item=><Link href={`/programmes/${item.slug}`} key={item.slug}><span>{item.name}</span><Arrow/></Link>)}</div></section></main>;
}
