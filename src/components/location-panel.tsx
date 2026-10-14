import Image from 'next/image';
import { site } from '@/lib/content';
import { ArrowUp, Pin, Phone, WhatsApp } from './icons';
export function LocationPanel(){return <section id="visit" className="location-section section-pad">
  <div className="container"><div className="section-heading" data-reveal><div><span className="eyebrow">FIND YOUR WAY TO AROGYAM</span><h2>Your studio.<br/><em>Right here in Virar.</em></h2></div><a href={site.maps} target="_blank" rel="noopener noreferrer" className="inline-link">Open Google Maps <ArrowUp/></a></div>
    <div className="location-layout" data-reveal>
      <div className="location-map"><iframe title="Arogyam Wellness Hub location in Virar West" src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a className="map-directions" href={site.maps} target="_blank" rel="noopener noreferrer"><Pin/><span>Meet us at Arogyam<small>Open the exact studio location</small></span><ArrowUp/></a></div>
      <div className="location-details"><span className="eyebrow">AROGYAM WELLNESS HUB</span><h3>A little closer<br/>to a better routine.</h3><div className="location-address"><Pin/><address>{site.address}</address></div>
        <div className="location-hours"><span className="eyebrow">{site.listedHours.confirmed?'OPENING HOURS':'LISTED OPENING HOURS'}</span><dl><div><dt>Monday – Saturday</dt><dd>{site.listedHours.weekdays}</dd></div><div><dt>Sunday</dt><dd>{site.listedHours.sunday}</dd></div></dl>{!site.listedHours.confirmed&&<p>Hours may vary. Please call to confirm before visiting.</p>}</div>
        <div className="location-contact"><a href={site.phoneHref}><Phone/><span>{site.phone}</span><ArrowUp/></a><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"><WhatsApp/><span>Message on WhatsApp</span><ArrowUp/></a></div>
        <div className="location-landmark"><Image src="/images/exterior.webp" alt="Arogyam’s illuminated storefront entrance" width={60} height={72}/><p>Look for the Arogyam sign.<span>Behind Virar Maternity & Nursing Home.</span></p></div>
      </div>
    </div>
  </div>
</section>}
