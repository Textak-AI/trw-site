#!/usr/bin/env python3
"""Add /events page to The Rail Way site."""

# ═══ 1. Update shared.js — add Events to NAV and PAGES ═══
path_shared = 'app/components/shared.js'
with open(path_shared, 'r') as f:
    shared = f.read()

# Add to NAV array — before Contact
if '"Events"' not in shared:
    shared = shared.replace(
        '{id:"contact",l:"Contact"',
        '{id:"events",l:"Events",href:"/events"},{id:"contact",l:"Contact"'
    )
    print("NAV: Added Events link before Contact")
else:
    print("NAV: Events already exists, skipping")

# Add to PAGES object — before contact
if 'events:{' not in shared:
    shared = shared.replace(
        'contact:{title:',
        'events:{title:"Upcoming Events | The Rail Way\\u2122",desc:"Where to see Pauline Lipkewich speak on safety culture, Speak Up Culture, and railroad leadership transformation.",h1:"Upcoming Events",bc:[{l:"Home",href:"/"},{l:"Events"}],schema:"CollectionPage"},\n  contact:{title:'
    )
    print("PAGES: Added Events metadata")
else:
    print("PAGES: Events already exists, skipping")

with open(path_shared, 'w') as f:
    f.write(shared)

# ═══ 2. Create app/events/page.jsx ═══
import os
os.makedirs('app/events', exist_ok=True)

page_route = '''import { PAGES } from "../components/shared";
import { EventsContent } from "../components/pages";

export const metadata = {
  title: PAGES.events.title,
  description: PAGES.events.desc,
};

export default function EventsPage() {
  return <EventsContent />;
}
'''

with open('app/events/page.jsx', 'w') as f:
    f.write(page_route)
print("ROUTE: Created app/events/page.jsx")

# ═══ 3. Add EventsContent to pages.jsx ═══
path_pages = 'app/components/pages.jsx'
with open(path_pages, 'r') as f:
    pages = f.read()

events_component = '''

/* ══════ EVENTS ══════ */
export function EventsContent(){return <>
  <Sec pad="48px 0 56px">
    <Bc items={PAGES.events.bc}/>
    <Eye>Speaking & Appearances</Eye>
    <H1>{PAGES.events.h1}</H1>
    <P s={{maxWidth:600}}>Pauline Lipkewich speaks on safety culture transformation, Speak Up Culture, and adaptive leadership across the rail industry and beyond.</P>
  </Sec>

  <Sec bg={C.cream}>
    <div style={{display:"flex",flexDirection:"column",gap:20}}>

      {/* ── APR 23, 2026 — Railway Age Young Professionals ── */}
      <div style={{background:C.white,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`,display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"}}>
        <div style={{minWidth:80,textAlign:"center",padding:"12px 16px",background:C.cream,borderRadius:6}}>
          <p style={{fontFamily:F.h,fontSize:24,color:C.rust,margin:0,fontWeight:700}}>23</p>
          <p style={{fontFamily:F.b,fontSize:12,color:C.gray,margin:0,textTransform:"uppercase"}}>Apr 2026</p>
        </div>
        <div style={{flex:1,minWidth:240}}>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 6px"}}>Virtual Conference — 2:00 PM EDT</p>
          <H3>Railway Age Young Professionals 2026</H3>
          <P s={{fontSize:14}}>Railway Age's fourth annual virtual conference for early- and mid-career rail professionals. Sessions cover career advancement, leadership style, and how new technologies are transforming the industry. Free to attend.</P>
          <p style={{fontFamily:F.b,fontSize:12,color:C.grayLt,margin:"0 0 12px"}}>Hosted by Railway Age</p>
          <a href="https://www.railwayage.com/railway-age-young-professionals-2026/" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>Register (Free) \\u2192</a>
        </div>
      </div>

      {/* ── MAY 1-2, 2026 — AIESEC Youth to Business ── */}
      <div style={{background:C.white,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`,display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"}}>
        <div style={{minWidth:80,textAlign:"center",padding:"12px 16px",background:C.cream,borderRadius:6}}>
          <p style={{fontFamily:F.h,fontSize:24,color:C.rust,margin:0,fontWeight:700}}>1-2</p>
          <p style={{fontFamily:F.b,fontSize:12,color:C.gray,margin:0,textTransform:"uppercase"}}>May 2026</p>
        </div>
        <div style={{flex:1,minWidth:240}}>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 6px"}}>In-Person Conference — Edmonton, AB, Canada</p>
          <H3>AIESEC Canada — Youth to Business Forum 2026</H3>
          <P s={{fontSize:14}}>A two-day forum connecting business leaders with emerging young professionals. This year's theme is "Future of Work & Adaptive Leadership" - bringing together keynote speakers, interactive workshops, and networking with 150+ university students from across Canada.</P>
          <p style={{fontFamily:F.b,fontSize:12,color:C.grayLt,margin:"0 0 12px"}}>Hosted by AIESEC in Canada</p>
          <a href="https://www.aiesec.ca/y2b" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>Learn More \\u2192</a>
        </div>
      </div>

    </div>
  </Sec>

  <section style={{position:"relative",overflow:"hidden",minHeight:200}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.railwayTraining} alt="Railroad operations" className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.25)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px",textAlign:"center"}}>
      <h2 style={{fontFamily:F.h,fontSize:24,color:C.white,margin:"0 0 10px"}}>Interested in Having Pauline Speak?</h2>
      <p style={{fontFamily:F.b,fontSize:16,color:"rgba(255,255,255,0.6)",margin:"0 0 20px"}}>Keynotes, panels, and workshops on safety culture transformation and Speak Up Culture.</p>
      <Btn primary href="/contact">Get in Touch</Btn>
    </div>
  </section>
</>;}'''

if 'EventsContent' not in pages:
    pages += events_component
    print("COMPONENT: Added EventsContent to pages.jsx")
else:
    print("COMPONENT: EventsContent already exists, skipping")

with open(path_pages, 'w') as f:
    f.write(pages)

print("\nDONE. Run: git add . && git commit -m 'Add /events page' && git push")
