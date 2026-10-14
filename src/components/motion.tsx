'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const image=entry.target.matches('.gallery-image, .community-photo');
        animations.push(entry.target.animate(image?[
          { clipPath:'inset(12% 0 12% 0)', transform:'translateY(24px)', opacity:.5 },
          { clipPath:'inset(0% 0 0% 0)', transform:'translateY(0)', opacity:1 },
        ]:[
          { opacity: .2, transform: 'translateY(28px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration:image?900:700, easing: 'cubic-bezier(.16,1,.3,1)' }));
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    document.querySelectorAll('[data-reveal], .gallery-image').forEach(el => observer.observe(el));
    const stop = () => { if (media.matches) { observer.disconnect(); animations.forEach(a => a.cancel()); } };
    media.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach(a => a.cancel()); media.removeEventListener('change', stop); };
  }, [pathname]);
  return null;
}
