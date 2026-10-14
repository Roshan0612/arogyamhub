import type { MetadataRoute } from 'next';
import { site, programmes } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap { if(!site.isLive) return []; return [{url:site.url,changeFrequency:'monthly',priority:1},...programmes.map(p=>({url:`${site.url}/programmes/${p.slug}`,changeFrequency:'monthly' as const,priority:0.8})),{url:`${site.url}/privacy`,priority:0.2}]; }
