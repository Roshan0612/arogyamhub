# Arogyam Wellness Hub

A complete first implementation of the Arogyam marketing website, prepared for Roshan Gawade. It uses the supplied studio photographs and orange logo. This is an independent concept, not an owner-approved official website.

## Current design — version 2.3

The dark hero now blends the real studio montage into the page using a continuous alpha fade on mobile and an organic curved, feathered surface on desktop. The headline overlaps the darker part of the footage without a hard rectangular media boundary. A curved cream edge leads into programmes. The playback control stays outside the media mask and remains clickable; text containers do not block it.

Autoplay is attempted only while the hero is visible and the page is active. Reduced-motion and data-saving preferences disable automatic playback, and a real-video poster remains if playback is blocked. Manual play remains available. The montage uses the existing local studio.mp4 asset and can be replaced through NEXT_PUBLIC_HERO_VIDEO.

The enhanced studio photos remain in the supporting sections. The mobile trial bar still hides while the hero or inline trial form is visible. The development indicator remains disabled. No new hosting or backend is required.

### Enhanced photographs

Four AI-retouched studio photos are supplied as optimized WebP assets: strength, aerial yoga, children's yoga and Zumba. A separate ceiling-trimmed mobile hero crop keeps the people prominent. Their source and processing history are listed in ASSETS.json. They are AI retouches of supplied photographs, not untouched documentary originals; the owner should review people, details and reconstructed areas before launch.

### Interactions

- Programme tabs support keyboard navigation and show enhanced images first. Films play on request, with pause controls and offscreen/hidden-tab pausing.
- The gallery switches between videos and photos. Video cards scroll horizontally on phones; photographs support filtering and a lightbox.
- The opening studio-film button opens a native dialog with video controls.
- Free-trial buttons open the shared form; an inline copy is near the bottom. Name, programme and preferred day compose a WhatsApp message locally. The user must open WhatsApp and press Send. No booking is created and no data is saved on a server.
- Fixed phone and WhatsApp actions stay on the left. A bottom mobile trial CTA includes a directions shortcut.
- Reduced-motion preferences disable animation. There is no forced scroll hijacking or artificial loading screen.

### Verification

Production build and TypeScript checks passed, including six individual programme routes. Local asset references and generated-page anchors were checked. Browser/device visual and interaction QA was unavailable in this environment and remains necessary before public launch. In particular review 360px and 390px screens, iOS/Android video playback, keyboard dialogs, WhatsApp and phone links, and the map.

### Before publishing

Confirm the free-trial offer and its terms, opening hours, contact details, media permissions and membership information with the owner. No prices, access tiers, review counts or testimonials have been invented. Indexing remains disabled by default. Membership enquiries ask the studio for real current options.

### Main files

- src/app/page.tsx — new homepage composition.
- src/app/redesign.css — current mobile-first visual system.
- src/components/enquiry.tsx — shared inline/dialog trial form.
- src/components/media-hub.tsx — video/photo switcher.
- src/components/studio-watch.tsx — studio-film dialog.
- src/lib/content.ts — business details, programme content and asset mappings.

## Design update — version 1.3

- Replaced the opening with a dark cinematic hero, oversized staggered typography and a framed studio montage with accessible playback controls.
- Added three photo-led movement pathways with hover reveals and direct programme links. Retained the interactive service explorer, individual programme pages, real studio media and final location panel.
- Moved floating phone and WhatsApp controls to the left. Labels open toward the content; a gentle WhatsApp halo runs only three times and the phone nudge twice. Reduced-motion preferences disable these effects.
- Changed primary CTAs and the WhatsApp enquiry flow to free-trial requests. The studio still confirms availability; no booking is silently created or message automatically sent.
- Removed visitor-facing concept labels from the header, footer and privacy page. Search indexing remains disabled by default.
- Production build and TypeScript validation passed. Browser/device visual and interaction testing remains necessary before launch; it was not available in this environment.

Before publishing, the owner must confirm the free-trial offer and its terms, contact details, hours, and rights to the supplied media. Confirm the final phone, WhatsApp, map, enquiry and video behavior on actual mobile devices.

## Design update — version 1.2

- Rebuilt the services section around six accessible tabs and a large split media/details panel, following the supplied reference layout with Arogyam branding.
- Added relevant studio-film previews to four services; yoga and aerial yoga use supplied photographs. Videos are illustrative studio footage, not proof of a particular instructor or exact class format.
- Added masked media entrances, staggered service text, active-tab transitions, a subtle pointer highlight, next/previous controls and an optional programme tour. The tour starts only when selected and pauses outside the viewport, in a hidden tab, or while examining the panel. Keyboard arrow, Home and End keys work across the tabs.
- Added staged hero text/photo entrances and scroll-triggered gallery reveals. Reduced-motion preferences disable these effects.
- Added fixed phone and WhatsApp icon buttons on desktop and mobile, above the mobile navigation strip. They do not automatically call or send messages.
- Added a final location panel with the supplied Google Maps link, an embedded map at 19.4518099, 72.8067976, address, hours and storefront thumbnail. The map requires network access to Google. The exact supplied place link remains usable if the embed is blocked.

### Opening hours need owner confirmation

A third-party directory lists Monday–Saturday 7 AM–9 PM and Sunday closed. Google Maps hours could not be retrieved in this environment. The site labels these as listed hours and asks visitors to call before visiting. Source: https://gym-india.nears.me/listings/india/maharashtra/virar/arogyam-wellness-hub-virar-mh/ . Set accurate values and `listedHours.confirmed` in `src/lib/content.ts` after confirmation. Do not infer that individual programmes run throughout opening hours.

### New component files

- `src/components/programme-explorer.tsx`: services tabs, films and tour.
- `src/components/location-panel.tsx`: map, address and hours.
- `src/components/contact-dock.tsx`: floating call and WhatsApp controls.
- `src/components/motion.tsx`: one-time scroll reveals.

The reference gym’s additional services, colours, claims and imagery have not been copied into Arogyam’s offering.


## Run it locally

Install Node.js 22 LTS or newer. Extract this archive, open the `arogyam-website` folder in VS Code, then open its terminal:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. If port 3000 is already occupied, use the address printed in your terminal.

No database, API key or environment file is required to run this version.

For a production build:

```bash
npm run build
npm start
```

## Stack and rationale

- Next.js App Router and TypeScript: statically rendered content, individual programme routes and strict type checks.
- React: interactive programme explorer, gallery and enquiry dialog.
- Tailwind CSS 4 plus custom CSS: responsive layouts and a consistent visual system.
- Native smooth anchor scrolling, CSS transitions and IntersectionObserver/Web Animations: lightweight motion without scroll hijacking or a heavy animation library.
- Self-hosted Manrope and Barlow Condensed: no Google Fonts request at runtime.
- Local WebP images with Next Image: responsive sizes, fixed image containers to limit layout shifts and lazy loading below the fold.

Versions are pinned in package-lock.json. Use npm ci for a repeatable installation. The original dependency check reported zero known production vulnerabilities; this is a point-in-time check, not a security guarantee.

## Included pages and interactions

- Home: editorial hero, six-programme explorer, video-led programme tabs, filterable gallery with modal image viewer, aerial yoga feature, community, first-visit steps, FAQs and contact.
- `/programmes/crossfit`
- `/programmes/yoga`
- `/programmes/zumba`
- `/programmes/aerobics`
- `/programmes/sports-fitness`
- `/programmes/aerial-yoga`
- `/privacy`
- Custom 404 page, generated robots and sitemap routes.
- Responsive navigation, mobile contact bar, native dialog focus handling, labelled inputs, visible keyboard focus, skip link and reduced-motion support.

No invented review scores, testimonials, pricing, class schedules, qualifications or membership numbers are included. The programme descriptions explain the offering without promising outcomes. Photos are labelled by what they show rather than pretending every image depicts the exact programme.

## Where to edit

| Change | File |
| --- | --- |
| Studio phone, WhatsApp number, address, Instagram, founder | `src/lib/content.ts` |
| Programme names, descriptions, photographs and FAQs | `src/lib/content.ts` |
| Homepage section structure and copy | `src/app/page.tsx` |
| Colours, typography, layout, breakpoints and transitions | `src/app/globals.css` |
| Desktop/mobile navigation | `src/components/header.tsx` |
| WhatsApp enquiry form | `src/components/enquiry.tsx` |
| Photo filters and lightbox | `src/components/gallery.tsx` |
| Opening photos and optional video | `src/components/hero-media.tsx` |
| Programme-page layout | `src/app/programmes/[slug]/page.tsx` |
| Page metadata and fonts | `src/app/layout.tsx` |
| Response security headers | `next.config.ts` |
| Asset provenance | `ASSETS.json` |

## Included video update

Four user-supplied reels have been converted into short silent previews. Original uploads are unchanged.

| Website file | Excerpt | Use |
| --- | --- | --- |
| `public/videos/circuit-training.mp4` | 12 seconds | Circuit training film |
| `public/videos/strength-agility.mp4` | 12 seconds | Strength and agility film |
| `public/videos/zumba.mp4` | 16 seconds | Zumba film |
| `public/videos/mat-movement.mp4` | 9 seconds | Mat movement film |
| `public/videos/studio.mp4` | 12 seconds | Opening montage, three seconds from each film |

The complete set totals about 8.7 MB, including the montage (about 1.2 MB). It is not all downloaded on page load. Preview video elements are mounted only when selected; only one preview is active at a time. Poster images are lazy-loaded. The silent hero loop loads when enabled and visible. Playback pauses off-screen or when the tab is hidden. The opening respects reduced-motion and detected data-saver preferences, and includes a play/pause button. Posters remain visible when autoplay is unavailable. Browser and device behaviour still needs real-browser testing.

Reel audio is removed from the website copies to keep these previews lightweight and silent. Existing captions within the source footage are retained. No narration needs transcription. The preview cards carry descriptive text and duration labels.

Video entries: `src/lib/content.ts` (`studioClips`). Video section: `src/components/studio-films.tsx`. The source-to-excerpt mapping is in `ASSETS.json`.

### Replace or disable the opening montage

To replace the montage, overwrite `public/videos/studio.mp4` with an approved portrait MP4. Update `public/images/video-hero.webp` with a matching poster.

Alternatively, copy `.env.example` to `.env.local` and set a different local video path:

```dotenv
NEXT_PUBLIC_HERO_VIDEO=/videos/your-video.mp4
```

An explicitly empty `NEXT_PUBLIC_HERO_VIDEO=` disables the opening video. Restart the dev server after environment changes, or rebuild for production. The default included montage works without an environment file.

Use H.264 MP4 with yuv420p, a fast-start header and suitable compression. Preserve a 9:16 portrait composition. Check framing on mobile. Do not put an Instagram or Facebook page URL in the video path. Confirm owner approval for all footage before a public launch.

## What the enquiry form actually does

1. The visitor enters a name, programme preference and optional goal.
2. The form validates the name and constructs a URL-encoded WhatsApp message locally.
3. A second step explicitly offers “Open WhatsApp”.
4. The visitor reviews the message and presses Send in WhatsApp.

Nothing is sent automatically, no request is posted to a backend, and no enquiry details are stored by this site. This is not a booking or availability confirmation. The WhatsApp destination currently uses the studio number visible in the supplied storefront material: +91 90849 08496. Confirm that it is the intended WhatsApp recipient before sharing the concept with real customers. The aerial-yoga poster has a different contact number; ask the owner whether enquiries for that programme should use a separate number.

If email capture, a lead inbox, booking, payments, accounts or a CMS are added later, they need their own backend validation, rate limits, access controls and privacy review. They are not implemented here.

## Security and deployment

- No secrets, API credentials, arbitrary HTML rendering, file upload endpoint or database are included.
- User text is treated as text and URL-encoded for WhatsApp.
- External links use `noopener noreferrer`.
- Content-Security-Policy limits most resources to this origin and permits Google Maps frames from maps.google.com and www.google.com. Objects are disabled and other sites cannot frame this website. The current static-rendering-compatible policy permits inline Next.js bootstrap scripts and inline styling. It is not a nonce-based strict CSP and should not be described as one. Development permits eval and WebSockets; production does not.
- `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy` are configured.
- Next.js branding headers are disabled.
- Next.js header configuration works when the application is served by a compatible Next.js runtime. An exported/static hosting configuration would need equivalent hosting headers.
- Use HTTPS in production and configure its transport policy at the hosting provider. Do not expose your development server to the public internet.

Default concept mode renders an independent-concept banner and sets noindex in metadata and response headers. robots.txt disallows crawling and the sitemap is empty. These controls discourage indexing; they do not make a publicly deployed site private. Use hosting access protection for a genuinely private staging link.

There is no deployment in this delivery. Deploy to a host with a supported Next.js Node runtime or adapter after reviewing hosting costs and configuration. Do not upload the source folder to PHP-only shared hosting and expect it to run.

Official framework reference: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers

## Owner approval and launch

Before the official launch:

- Confirm logo, brand name, address, phone, WhatsApp recipient and founder details.
- Confirm the complete service list, including aerial yoga, wording and current availability. Confirm any use of programme trademarks and affiliation language with the owner.
- Obtain permission for photographs, videos and identifiable people. Confirm music rights separately. User-supplied screenshots are included as concept assets, not as a claim of ownership.
- Replace screenshots with clean original media, update `ASSETS.json`, and remove any obsolete assets. The aerial-yoga poster is displayed as a poster, not disguised as an unedited photograph.
- Confirm class timings and prices before adding them. No trial is advertised as free.
- Confirm the owner’s privacy notice and actual data-handling practices.
- Test keyboard navigation, dialog closing/focus return, mobile menu, photo filters, programme links, telephone links and the full enquiry flow on real browsers. Do not send test enquiries to the business without deciding to contact them.
- Test the layout on 360px, 390px, 768px and desktop widths; measure actual performance after adding the final media.
- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain and `NEXT_PUBLIC_SITE_LIVE=true`, then rebuild. This removes the concept banner, enables indexing and generates the live sitemap.
- Protect hosting accounts and domain ownership, and retain a source backup.

## Verification performed for this delivery

- Production build completed successfully after the services/location redesign, including static generation of all six programme routes.
- All five video files passed full FFmpeg decode checks; confirmed H.264 video, no audio track, and fast-start MP4 layout. Asset manifest paths exist.
- TypeScript check passed.
- Production dependency audit returned zero known vulnerabilities at the time of checking.
- Generated HTML checked for main landmarks, concept/noindex metadata and referenced local assets.
- Generated route manifest checked for security/indexing headers.

Browser automation was unavailable in the build environment. Visual layout, keyboard/touch interactions and runtime performance have not been verified in a real browser. Run locally and review before treating this as launch-ready. No Lighthouse score, penetration-test result or conversion guarantee is claimed.
