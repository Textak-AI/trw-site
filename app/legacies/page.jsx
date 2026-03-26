/* ══════ LEGACIES ══════ */
export function LegaciesContent(){return <>
  <Sec pad="48px 0 56px">
    <Bc items={PAGES.legacies.bc}/>
    <Eye>Honoring Rail Industry Leaders</Eye>
    <H1>{PAGES.legacies.h1}</H1>
    <P s={{maxWidth:600}}>The rail industry is built by people who give their careers — and sometimes their lives — to keeping freight and passengers moving safely. This page honors their contributions and tracks leadership changes across the industry.</P>
  </Sec>

  <Sec bg={C.cream}>
    <div style={{display:"flex",flexDirection:"column",gap:20}}>

      {/* ── MAR 19, 2026 — Hall of Fame ── */}
      <div style={{background:C.white,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}>
        <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>Industry Recognition — MAR 19, 2026</p>
        <H3>Goode, McClellan, Brosnan Inducted into National Railroad Hall of Fame</H3>
        <P s={{fontSize:14}}>Three iconic railroaders were inducted into the National Railroad Hall of Fame during a ceremony in Roanoke, Virginia. The inductees were recognized for decades of contributions to railroad strategy, operations, and industry leadership.</P>
        <a href="https://www.railwayage.com/freight/class-i/goode-mcclellan-brosnan-inducted-into-national-railroad-hall-of-fame/" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>Read on Railway Age →</a>
      </div>

      {/* ── MAR 11, 2026 — Jesse Chalich Memorial ── */}
      <div style={{background:C.white,borderRadius:10,padding:28,borderLeft:`4px solid ${C.rust}`}}>
        <p style={{fontFamily:F.b,fontSize:10,color:"#34495E",textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>In Memoriam — MAR 11, 2026</p>
        <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 4px"}}>Jesse James Chalich</h3>
        <p style={{fontFamily:F.b,fontSize:14,color:C.rust,margin:"0 0 4px",fontWeight:600}}>President & COO, Northern Plains Railroad & Northern Plains Rail Services</p>
        <p style={{fontFamily:F.b,fontSize:13,color:C.grayLt,margin:"0 0 16px"}}>September 21, 1976 — March 11, 2026</p>
        <P>Jesse James Chalich, 49, passed away unexpectedly on March 11, 2026. A 4th generation railroader, Jesse's connection to the industry wasn't just professional — it was in his blood. His grandfather, father, and uncle all worked in the Maintenance of Way department at the SOO Line. That heritage shaped a career defined by deep respect for the work and the people who do it.</P>
        <P>Jesse started as a conductor/engineer on Northern Plains Railroad in 1997, the year the company was founded in central North Dakota. His natural ability to connect with people was evident from the start. He moved through customer service, marketing, and executive leadership, helping guide the company as it grew from forty employees to more than two hundred. He rose to President and Chief Operating Officer of the Northern Plains Rail companies — a role he led with humility, pride, and dedication.</P>
        <P>Under Jesse's leadership, Northern Plains maintained exceptional employee morale and a culture that supported employees in putting safety and family first. He furthered his industry knowledge through the Railway Management Program at Michigan State University, and in 2014, Progressive Railroading named him one of the rail industry's "20 Rising Stars." He served on the board of the Lake Superior Railroad Museum and the American Association of Railroad Superintendents.</P>
        <P>Those who knew Jesse describe a consummate, natural leader — a best friend to many, including his children, with innate compassion and an uncanny ability to tell a story that made even the most ordinary moments hilarious. He was a true north compass with intuition and insights that always exceeded his years, and an absolute trusted advisor in both life and at work.</P>
        <P s={{margin:0,fontStyle:"italic",color:C.black}}>Jesse leaves behind a legacy that will continue far beyond the horizon. He is survived by his wife Julie, their four children — Jaden, Morgan, Ethan, and Maggie — and grandson Beckett.</P>
      </div>

      {/* ── FEB 03, 2026 — CSX Leadership ── */}
      <div style={{background:C.white,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}>
        <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>Leadership Change — FEB 03, 2026</p>
        <H3>CSX Announces Leadership Changes to Its Executive Team</H3>
        <P s={{fontSize:14}}>CSX Corporation announced changes to its executive leadership team as part of ongoing organizational evolution. These leadership transitions reflect the rail industry's continued focus on operational performance and strategic growth.</P>
        <a href="https://www.csx.com/index.cfm/about-us/media/press-releases/csx-announces-leadership-changes-to-its-executive-team/" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>Read on CSX.com →</a>
      </div>

    </div>
  </Sec>

  <section style={{position:"relative",overflow:"hidden",minHeight:200}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.railwayTraining} alt="Railroad operations" className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.25)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px",textAlign:"center"}}>
      <h2 style={{fontFamily:F.h,fontSize:24,color:C.white,margin:"0 0 10px"}}>Know Someone We Should Honor?</h2>
      <p style={{fontFamily:F.b,fontSize:16,color:"rgba(255,255,255,0.6)",margin:"0 0 20px"}}>Help us recognize the people who shaped the rail industry.</p>
      <Btn primary href="/contact">Submit a Legacy</Btn>
    </div>
  </section>
</>;}
