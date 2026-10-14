import Image from 'next/image';
import Link from 'next/link';
import { EnquireButton, TrialForm } from '@/components/enquiry';
import { LocationPanel } from '@/components/location-panel';
import { ProgrammeExplorer } from '@/components/programme-explorer';
import { HeroMedia } from '@/components/hero-media';
import { StudioWatch } from '@/components/studio-watch';
import { MediaHub } from '@/components/media-hub';
import { Arrow, ArrowUp, Plus, ProgrammeIcon } from '@/components/icons';
import { faqs, site } from '@/lib/content';

export default function Home() {
  return <main id="main" className="home-v2">
    <section id="home-intro" className="opening">
      <HeroMedia/>
      <div className="container opening-content"><span className="eyebrow">YOUR MOVEMENT. YOUR COMMUNITY. · VIRAR WEST</span><h1>Find your strong.<br/>Feel more <span>you.</span></h1><p>Strength, rhythm and a little balance.<br/>Discover your kind of movement at Arogyam.</p><div className="opening-actions"><EnquireButton/><StudioWatch/></div><div className="opening-caption"><span className="status-dot"/> AROGYAM WELLNESS HUB <span>MOVE WELL. FEEL GOOD.</span></div></div>
    </section>

    <section id="programmes" className="programmes-section section-pad rounded-entry"><div className="container">
      <div className="section-heading" data-reveal><div><span className="eyebrow">OUR PROGRAMMES</span><h2>What moves you<span className="accent-dot">?</span></h2></div><p>Lift, stretch, dance or find a new challenge.<br/>There’s more than one way to start.</p></div>
      <ProgrammeExplorer/>
      <div className="programme-footer"><span>FINDING YOUR FIRST SESSION?</span><EnquireButton className="text-link">Help me choose</EnquireButton></div>
    </div></section>

    <section id="studio" className="studio-story section-pad"><div className="container story-grid">
      <div className="story-image" data-reveal><Image src="/images/enhanced-strength.webp" alt="Strength training beside the Arogyam studio wall" fill sizes="(max-width:760px) 100vw, 45vw" className="object-cover"/><span className="image-label">YOUR SPACE TO GROW</span></div>
      <div className="story-copy" data-reveal><span className="eyebrow">OUR STUDIO</span><h2>A space for<br/>your progress<span className="accent-dot">.</span></h2><p>Make time for yourself in a studio that brings movement and community together. From your first stretch to a new challenge, find your place at Arogyam.</p>
        <div className="story-mini-grid"><Link href="/programmes/aerial-yoga"><Image src="/images/enhanced-aerial.webp" alt="Hammock-supported aerial yoga at Arogyam" fill sizes="(max-width:760px) 44vw, 22vw" className="object-cover"/><span>Find your balance <ArrowUp/></span></Link><Link href="/programmes/yoga"><Image src="/images/enhanced-yoga.webp" alt="Children practising seated yoga in the studio" fill sizes="(max-width:760px) 44vw, 22vw" className="object-cover"/><span>Room to grow <ArrowUp/></span></Link></div>
        <EnquireButton/>
      </div>
    </div></section>

    <MediaHub/>

    <section id="community" className="community-story section-pad"><div className="container community-story-grid"><div data-reveal><span className="eyebrow">THE PEOPLE MAKE THE PLACE</span><h2>Stronger.<br/>Together<span className="accent-dot">.</span></h2><p>A familiar face. A shared challenge. A reason to show up again. Find a little more energy in the company around you.</p><div className="founder-note"><span className="founder-monogram" aria-hidden="true">NC</span><div><strong>{site.founder}</strong><span>Founder, Arogyam Wellness Hub</span></div><a href={site.founderInstagram} target="_blank" rel="noopener noreferrer" aria-label="Visit Neeraj Churi on Instagram"><ArrowUp/></a></div><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-link">Meet the community on Instagram <ArrowUp/></a></div><div className="community-story-photo" data-reveal><Image src="/images/community.webp" alt="Arogyam members gathered together in the studio" fill sizes="(max-width:760px) 90vw, 45vw" className="object-cover"/></div></div></section>

    <section id="membership" className="membership-section section-pad"><div className="container"><div className="section-heading" data-reveal><div><span className="eyebrow">MAKE IT YOUR ROUTINE</span><h2>Find your fit<span className="accent-dot">.</span></h2></div><p>Tell us what you enjoy.<br/>The team will explain current plans and batches.</p></div>
      <div className="membership-grid">
        <article className="membership-card" data-reveal><div className="membership-photo"><Image src="/images/enhanced-strength.webp" alt="Barbell strength training at Arogyam" fill sizes="(max-width:760px) 90vw, 45vw" className="object-cover"/></div><div className="membership-copy"><ProgrammeIcon kind="crossfit"/><div><h3>Have a programme in mind?</h3><p>Go deeper into the movement you love. Ask about fees, batches and current membership options.</p><a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Arogyam! Please share current membership options, programme fees and batch timings.')}`} target="_blank" rel="noopener noreferrer" className="text-link">Ask about membership <Arrow/></a></div></div></article>
        <article className="membership-card" data-reveal><div className="membership-photo"><Image src="/images/enhanced-aerial.webp" alt="An aerial yoga session in the studio" fill sizes="(max-width:760px) 90vw, 45vw" className="object-cover"/></div><div className="membership-copy"><ProgrammeIcon kind="yoga"/><div><h3>Still finding your movement?</h3><p>Tell the team your goals and experience. Explore the programmes and request your first session.</p><EnquireButton className="text-link">Start with a free trial</EnquireButton></div></div></article>
      </div>
      <div className="faq-section"><div><span className="eyebrow">A FEW THINGS TO KNOW</span><h2>Good questions<span className="accent-dot">.</span></h2></div><div className="faq-list">{faqs.map(f=><details key={f.q}><summary>{f.q}<Plus/></summary><p>{f.a}</p></details>)}</div></div>
    </div></section>

    <section id="trial" className="trial-section"><div className="trial-image"><Image src="/images/enhanced-zumba.webp" alt="The energy of a group session at Arogyam" fill sizes="(max-width:760px) 100vw, 50vw" className="object-cover"/><div><span className="eyebrow">A LITTLE COURAGE. A NEW BEGINNING.</span><h2>See you<br/>at the studio<span className="accent-dot">.</span></h2></div></div><div className="trial-panel"><span className="eyebrow">FREE TRIAL</span><h2>Your first step<br/>starts here<span className="accent-dot">.</span></h2><p>Try a session, meet the team and experience the Arogyam community.</p><TrialForm/></div></section>
    <LocationPanel/>
  </main>;
}
