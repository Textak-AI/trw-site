"use client";
import { useState, useRef } from "react";
import { C, F, IMG, PAGES } from "./shared";
import { Img, Sec, Eye, H1, H2, H3, P, Btn, FAQ, Stat, Bc } from "./ui";

/* ══════ HOME ══════ */
export function HomeContent(){return <>
  <section style={{position:"relative",minHeight:480,overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.fieldLeadership} alt="Railroad tracks stretching to the horizon" className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.3)",objectPosition:"85% 35%"}}/></div>
    <div style={{position:"absolute",left:0,top:0,bottom:0,width:6,background:`linear-gradient(180deg,${C.rust},transparent)`,zIndex:2}}/>
    <div className="r-hero-text" style={{position:"relative",zIndex:2,maxWidth:960,margin:"0 auto",padding:"60px 28px 72px"}}>
      <Eye>The Rail Way™ — From the Boardroom to the Ballast Line</Eye>
      <h1 className="r-h1" style={{fontFamily:F.h,fontSize:42,fontWeight:700,color:C.white,margin:"0 0 20px",lineHeight:1.15,maxWidth:420}}>Railroad Safety Culture <span style={{color:C.rust}}>Transformation</span></h1>
      <p style={{fontFamily:F.b,fontSize:18,color:"rgba(255,255,255,0.7)",margin:"0 0 12px",lineHeight:1.65,maxWidth:400}}>70–90% of organizational transformations fail. Yours doesn't have to.</p>
      <p style={{fontFamily:F.b,fontSize:16,color:"rgba(255,255,255,0.55)",margin:"0 0 32px",lineHeight:1.65,maxWidth:400}}>Build a Speak Up Culture where safety concerns don't wait for an accident. Not just training. Not just consulting. A cultural residency that creates lasting change.</p>
      <div className="r-btn-row" style={{display:"flex",gap:14}}><Btn primary onClick={()=>document.getElementById('pulse-check')?.scrollIntoView({behavior:'smooth'})}>Take the Free Pulse Check</Btn><Btn href="/speak-up-culture">What Is Speak Up Culture?</Btn></div>
    </div>
  </section>

  <Sec bg={C.cream} pad="40px 0"><div className="r-stat-row" style={{display:"flex",gap:20}}><Stat v="214%" l="ROI from safety culture programs" src="BCG Research, 2023"/><Stat v="4x" l="Higher employee retention with psychological safety" src="BCG Study"/><Stat v="565/yr" l="Average roadway worker injuries (2018–2023)" src="FRA Safety Reports"/></div></Sec>

  <Sec pad="48px 0">
    <div style={{textAlign:"center",marginBottom:28}}>
      <Eye>Industry Recognition</Eye>
      <H2>Building Generational Railroaders — and Industry Leaders</H2>
    </div>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:28}}>
      <div style={{background:C.cream,borderRadius:10,padding:28,borderTop:`3px solid ${C.rust}`,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>Railway Age — 2026</p>
          <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 8px",lineHeight:1.25}}>John Orr</h3>
          <p style={{fontFamily:F.h,fontSize:16,color:C.rust,margin:"0 0 12px",fontStyle:"italic"}}>2026 Railroader of the Year</p>
          <P s={{fontSize:13}}>Railway Age's highest individual honor, recognizing John Orr of Norfolk Southern for exceptional leadership in rail operations and safety performance.</P>
        </div>
        <p style={{fontFamily:F.m,fontSize:10,color:C.grayLt,margin:0}}>Railway Age Magazine</p>
      </div>
      <div style={{background:C.cream,borderRadius:10,padding:28,borderTop:`3px solid ${C.rust}`,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>League of Railway Women — 2025</p>
          <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 8px",lineHeight:1.25}}>Diane Barnett</h3>
          <p style={{fontFamily:F.h,fontSize:16,color:C.rust,margin:"0 0 12px",fontStyle:"italic"}}>2025 Railway Woman of the Year</p>
          <P s={{fontSize:13}}>Recognized by the League of Railway Women as a people-first solutionist focused on nudging the progress needle — a generational railroader from Norfolk Southern.</P>
        </div>
        <p style={{fontFamily:F.m,fontSize:10,color:C.grayLt,margin:0}}>Progressive Railroading</p>
      </div>
    </div>
    <div style={{background:C.brown,borderRadius:10,padding:"24px 32px",textAlign:"center"}}>
      <p style={{fontFamily:F.h,fontSize:16,color:"rgba(255,255,255,0.9)",margin:"0 0 6px",lineHeight:1.5}}>We're proud of the work we've done with Norfolk Southern, helping elevate leadership capabilities and enhance safety performance.</p>
      <p style={{fontFamily:F.b,fontSize:14,color:"rgba(255,255,255,0.55)",margin:"0 0 16px"}}>Two industry award winners. One client. Generational railroaders.</p>
      <Btn primary href="/contact">Discuss How We Can Help Your Organization</Btn>
    </div>
  </Sec>

  <Sec>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"5fr 4fr",gap:40}}>
      <div>
        <Eye>What We Do</Eye>
        <H2>Safety Culture Transformation — Not Training</H2>
        <P>Railroad executives have seen too many generic safety consultants with polished slide decks and no operational empathy. The Rail Way is different — we've been on the ground at CN, KCS, and other Class I operators, transforming how crews communicate and how leaders behave.</P>
        <P>Our approach is a cultural residency: we embed with your team, transfer capability to internal faculty, and build systems that sustain transformation after we leave.</P>
        <div className="r-btn-row" style={{display:"flex",gap:12,marginTop:8}}><Btn primary href="/our-process">See Our Process</Btn><Btn href="/class-ii-iii">For Class II & III</Btn></div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        <div style={{borderRadius:8,overflow:"hidden",height:220}}><Img src={IMG.teamTraining} alt="Rail safety culture transformation workshop in progress"/></div>
        <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{borderRadius:8,overflow:"hidden",height:140}}><Img src={IMG.safetyCulture} alt="Railway safety culture training session"/></div>
          <div style={{borderRadius:8,overflow:"hidden",height:140}}><Img src={IMG.yardTraining} alt="Rail yard safety training exercise"/></div>
        </div>
      </div>
    </div>
  </Sec>

  <Sec bg={C.cream}>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:40,alignItems:"center"}}>
      <div style={{borderRadius:10,overflow:"hidden"}}><Img src={IMG.paulineHeadshot} alt="Pauline Lipkewich, founder of The Rail Way and Contributing Editor at Railway Age" style={{borderRadius:10}}/></div>
      <div>
        <Eye>Featured in Railway Age</Eye>
        <H2>Pauline Lipkewich — Contributing Editor</H2>
        <P s={{fontSize:17,fontStyle:"italic",color:C.black}}>"I am blessed to live in a region where heavy industry thrives. I have the gift of seeing firsthand the fruits of labor that come from calloused hands and dusty work boots."</P>
        <P>14+ years in North American rail operations. Grew Rocky Mountaineer group revenue 7x. Worked alongside CN, KCS, and other Class I operators on safety performance and operational effectiveness. Today, she's the rail industry's voice on leadership behavior and culture transformation.</P>
        <div className="r-btn-row" style={{display:"flex",gap:12}}><Btn primary href="/about">Full Bio</Btn><Btn href="https://www.railwayage.com/author/pauline-lipkewich/" target="_blank">Read Her Column</Btn></div>
      </div>
    </div>
  </Sec>

  <Sec>
    <Eye>Latest Insights</Eye>
    <H2>Leading Through Uncertainty — 4-Part Series</H2>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginTop:16}}>
      {[
        {img:IMG.roadAhead,title:"The Road Ahead: Putting It All Together",p:"Part 4 of 4",d:"Feb 2026",url:"/insights/the-road-ahead"},
        {img:IMG.fieldLeadership,title:"Lead Yourself First: The Trinity of Excellence",p:"Part 3 of 4",d:"Jan 2026",url:"/insights/lead-yourself-first"},
        {img:IMG.leaderTalking,title:"Leading Through Uncertainty: What's Your Style?",p:"Part 2 of 4",d:"Oct 2025",url:"/insights/leading-through-uncertainty-part-2"},
        {img:IMG.freightTrain,title:"How Leaders Navigate Uncertainty and Come Out Stronger",p:"Part 1 of 4",d:"Aug 2025",url:"/insights/leaders-navigate-uncertainty"},
      ].map((a,i)=><a key={i} href={a.url} style={{textDecoration:"none",background:C.cream,borderRadius:8,overflow:"hidden",cursor:"pointer",display:"block"}}>
        <div style={{height:160,overflow:"hidden"}}><Img src={a.img} alt={a.title}/></div>
        <div style={{padding:"16px 18px"}}>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1px",margin:"0 0 6px"}}>{a.p} • {a.d}</p>
          <h3 style={{fontFamily:F.h,fontSize:16,color:C.black,margin:0,lineHeight:1.3}}>{a.title}</h3>
        </div>
      </a>)}
    </div>
    <div style={{marginTop:20}}><Btn href="/insights">View All Insights</Btn></div>
  </Sec>

  <Sec bg={C.cream}>
    <Eye>The KBL Team</Eye>
    <H2>Meet the Team Behind The Rail Way™</H2>
    <div className="r-grid-3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:24,marginTop:16}}>
      {[
        {img:IMG.paulineAlt,name:"Pauline Lipkewich",role:"Founder & CEO",desc:"14+ years transforming cultures in heavy industry. Contributing Editor, Railway Age.",op:"center 28%"},
        {img:IMG.brenda,name:"Brenda Huizinga",role:"Performance Coaching",desc:"Enhancing mindsets, behaviors and competencies that drive organizational culture and results.",op:"center 32%"},
        {img:IMG.michael,name:"Michael Powell",role:"Business Optimization",desc:"Proven models driving profitable growth, operational effectiveness, and safety improvements.",op:"center 22%"},
      ].map((t,i)=><div key={i} style={{background:C.white,borderRadius:8,overflow:"hidden"}}>
        <div style={{height:280,overflow:"hidden"}}><Img src={t.img} alt={t.name} style={{objectPosition:t.op}}/></div>
        <div style={{padding:"16px 18px"}}>
          <h3 style={{fontFamily:F.h,fontSize:17,fontWeight:700,color:C.black,margin:"0 0 2px"}}>{t.name}</h3>
          <p style={{fontFamily:F.b,fontSize:11,color:C.rust,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px"}}>{t.role}</p>
          <p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:0,lineHeight:1.5}}>{t.desc}</p>
        </div>
      </div>)}
    </div>
  </Sec>

  <Sec id="pulse-check" bg={C.white} pad="56px 0">
    <div style={{textAlign:"center",marginBottom:28}}>
      <Eye>Free Assessment</Eye>
      <H2>Is Your Safety Culture a Competitive Advantage?</H2>
      <P s={{maxWidth:560,margin:"0 auto 8px",textAlign:"center"}}>Find out in about 7 minutes. This pulse check benchmarks your organization against industry best practices across leadership alignment, psychological safety, frontline engagement, and culture sustainability.</P>
      <P s={{fontSize:13,color:C.grayLt,textAlign:"center"}}>Your responses are confidential. Results are delivered upon completion.</P>
    </div>
    <div style={{maxWidth:720,margin:"0 auto",borderRadius:10,overflow:"hidden",border:`1px solid ${C.grayRule}`,background:C.cream}}>
      <iframe className="r-iframe" src="https://www.surveymonkey.com/r/RQTZW2W" title="Safety Culture Pulse Check" style={{width:"100%",height:700,border:"none",display:"block"}}/>
    </div>
    <div style={{textAlign:"center",marginTop:16}}>
      <P s={{fontSize:12,color:C.grayLt,textAlign:"center"}}>Prefer to talk first? <a href="/contact" style={{color:C.rust,fontWeight:600,textDecoration:"none"}}>Schedule a consultation</a> instead.</P>
    </div>
  </Sec>

  <Sec>
    <Eye>Frequently Asked Questions</Eye>
    <H2 id="faq">Railroad Safety Culture — Common Questions</H2>
    <FAQ q="What is railroad safety culture transformation?" a="Railroad safety culture transformation is the process of fundamentally changing how an organization's leaders and workers approach safety — moving from compliance-driven rule-following to a culture where every person feels empowered and responsible for safety outcomes. Unlike training, transformation changes the underlying behaviors and leadership habits that determine whether safety is lived or merely checked off."/>
    <FAQ q="What is Speak Up Culture in the rail industry?" a="Speak Up Culture is an organizational environment where railroad workers at every level feel safe raising safety concerns, reporting near-misses, and challenging unsafe conditions without fear of retaliation. Organizations with strong Speak Up Cultures see significantly fewer preventable incidents because hazards are identified before they become accidents."/>
    <FAQ q="How does safety culture transformation differ from safety training?" a="Safety training teaches what the rules are. Safety culture transformation changes whether people follow them — and whether they speak up when they see something wrong. Training fills a binder; transformation fills a culture. The Rail Way's approach is a cultural residency — we embed with your team, build internal capability, and transfer ownership so the transformation sustains itself."/>
    <FAQ q="What is the ROI of railroad safety culture programs?" a="Research from BCG shows organizations investing in safety culture transformation see up to 214% ROI through reduced incidents, lower turnover (4x higher retention with psychological safety), improved efficiency, and reduced compliance costs. For Class II and III railroads, the financial impact is proportionally even larger."/>
  </Sec>

  <section style={{position:"relative",overflow:"hidden",minHeight:280}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.railwayTraining} alt="Railroad leadership workshop" className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.25)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"64px 28px",textAlign:"center"}}>
      <h2 style={{fontFamily:F.h,fontSize:28,color:C.white,margin:"0 0 12px"}}>Ready to Transform Your Safety Culture?</h2>
      <p style={{fontFamily:F.b,fontSize:15,color:"rgba(255,255,255,0.6)",margin:"0 0 24px"}}>Every transformation begins with a conversation.</p>
      <Btn primary href="/contact">Start a Conversation</Btn>
    </div>
  </section>
</>;}

/* ══════ SPEAK UP ══════ */
export function SpeakUpContent(){return <>
  <Sec pad="48px 0 56px"><Bc items={PAGES.speakup.bc}/><Eye>Speak Up Culture for Railroads</Eye><H1>{PAGES.speakup.h1}</H1>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:32}}>
      <div><P s={{fontSize:18}}>Speak Up Culture is an organizational environment where every railroader — from track crews to the C-suite — feels safe raising safety concerns, reporting near-misses, and challenging unsafe conditions without fear of retaliation.</P><P>It is the single most reliable predictor of whether a railroad prevents incidents or merely investigates them after the fact. 65% of rail accidents are attributed to human factors — and the majority involve failures of communication, not knowledge.</P></div>
      <div style={{borderRadius:8,overflow:"hidden"}}><Img src={IMG.paulineSpeaking} alt="Pauline Lipkewich discussing Speak Up Culture at a railway industry event"/></div>
    </div>
  </Sec>
  <Sec bg={C.cream}><H2>Why Speak Up Culture Matters</H2>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
      <div><H3>The Cost of Silence</H3><P>When a roadway worker sees an unsafe condition but doesn't report it — because they fear discipline, think it won't matter, or accept "that's how we've always done it" — the risk stays invisible until it becomes an incident. 96 roadway workers have been killed since 1997. Many fatalities were preceded by unreported concerns.</P></div>
      <div><H3>The Alternative</H3><P>Organizations with strong Speak Up Cultures catch hazards upstream. One FRA C3RS pilot site reported nearly a 70% reduction in certain accident types after implementing confidential close-call reporting. The difference isn't technology — it's whether people feel safe using it.</P></div>
    </div>
  </Sec>
  <Sec><H2>How We Build It</H2><P>Our approach isn't a training module. It's a cultural residency — we embed with your leadership team and frontline supervisors to transform the daily behaviors that determine whether people speak up or stay silent.</P>
    <div className="r-grid-3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,marginTop:24}}>
      {[{n:"1",t:"Assess the Real Culture",d:"Not the culture in your policy handbook — the one your crews experience every shift."},{n:"2",t:"Transform Leader Behaviors",d:"We work directly with supervisors to model communication patterns that make speaking up feel safe."},{n:"3",t:"Build Internal Faculty",d:"We train your people to sustain the transformation using our white-labeled materials."}].map(s=><div key={s.n} style={{background:C.cream,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><div style={{fontFamily:F.h,fontSize:28,color:C.rust,fontWeight:700,marginBottom:8,opacity:.3}}>{s.n}</div><H3>{s.t}</H3><P s={{fontSize:13}}>{s.d}</P></div>)}
    </div>
    <div style={{marginTop:28,display:"flex",gap:12}}><Btn primary href="/contact">Discuss Speak Up Culture</Btn><Btn href="/our-process">See Full Process</Btn></div>
  </Sec>
  <Sec bg={C.cream}><H2>Speak Up Culture FAQ</H2>
    <FAQ q="How is Speak Up Culture different from FRA's C3RS program?" a="C3RS is a specific confidential close-call reporting system. Speak Up Culture is the broader organizational environment that determines whether workers actually use reporting systems. You can implement C3RS and still have silence if leaders don't model openness."/>
    <FAQ q="How long does it take to build a Speak Up Culture?" a="Meaningful behavior change is typically visible within 90–180 days. Sustainable culture transformation generally requires 12–18 months of cultural residency, including transition to internal faculty."/>
    <FAQ q="Can smaller railroads afford this?" a="The Rail Way was built for Class II and III operators. Smaller railroads often see faster culture change because leadership is closer to the front lines."/>
  </Sec>
</>;}

/* ══════ PROCESS ══════ */
export function ProcessContent(){
  const stages=[{n:"Heighten Awareness",t:"Days 1–30",d:"Surface the real issues hiding behind compliance metrics. We uncover the gap between stated safety culture and lived reality."},{n:"Increase Clarity",t:"Days 30–90",d:"Define what 'good' looks like at every level. Actionable roadmaps tailored to your railroad's size and context."},{n:"Build Alignment",t:"Days 90–270",d:"Get leaders modeling the behaviors they expect. Internal faculty-in-training begin delivering content."},{n:"Drive Momentum",t:"Day 270+",d:"Internal academy operational. Faculty delivering independently. We transition to periodic auditing."}];
  return <>
  <section style={{position:"relative",minHeight:280,overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.leaderTalking} alt="Railroad leadership discussion" className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.3)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px"}}><Bc items={PAGES.process.bc}/><Eye>Our Proven Process</Eye><h1 className="r-h1" style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.white,margin:"0 0 16px",lineHeight:1.18}}>{PAGES.process.h1}</h1><p style={{fontFamily:F.b,fontSize:18,color:"rgba(255,255,255,0.7)",maxWidth:560,margin:0,lineHeight:1.6}}>Not training. Not consulting. A cultural residency that creates lasting change.</p></div>
  </section>
  <Sec bg={C.cream}><div style={{display:"flex",flexDirection:"column",gap:24}}>{stages.map((s,i)=><div key={i} className="r-timeline" style={{display:"grid",gridTemplateColumns:"160px 1fr",gap:24}}><div style={{textAlign:"right",paddingTop:4}}><div style={{fontFamily:F.h,fontSize:14,color:C.rust,fontWeight:700}}>Stage {i+1}</div><div style={{fontFamily:F.m,fontSize:11,color:C.grayLt}}>{s.t}</div></div><div style={{background:C.white,borderRadius:8,padding:24,borderLeft:`4px solid ${C.rust}`}}><H3>{s.n}</H3><P>{s.d}</P></div></div>)}</div></Sec>
  <Sec><H2>Training vs. Transformation</H2><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28}}><div style={{background:"#FFF5F5",borderRadius:8,padding:24,borderTop:"3px solid #CC4444"}}><h3 style={{fontFamily:F.h,fontSize:18,color:"#CC4444",margin:"0 0 12px"}}>Traditional Safety Training</h3><P s={{fontSize:13}}>External consultant delivers a program. Binders filled. Consultant leaves. Behaviors revert within 90 days.</P></div><div style={{background:C.tint,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><h3 style={{fontFamily:F.h,fontSize:18,color:C.rust,margin:"0 0 12px"}}>The Rail Way Cultural Residency</h3><P s={{fontSize:13}}>We embed with your team. Internal faculty developed. Materials white-labeled. Transformation happens with you, not to you.</P></div></div><div style={{marginTop:28,textAlign:"center"}}><Btn primary href="/contact">Discuss Your Transformation</Btn></div></Sec>
</>;}

/* ══════ ABOUT ══════ */
export function AboutContent(){return <>
  <Sec pad="48px 0 56px"><Bc items={PAGES.about.bc}/><Eye>About</Eye><H1>{PAGES.about.h1}</H1>
    <div style={{display:"flex",gap:32,alignItems:"flex-start",flexWrap:"wrap"}}>
      <div style={{width:220,flexShrink:0}}>
        <div style={{borderRadius:10,overflow:"hidden",marginBottom:16}}><Img src={IMG.paulineHeadshot} alt="Pauline Lipkewich" style={{borderRadius:10,height:300,objectPosition:"center 20%"}}/></div>
        <div style={{background:C.cream,borderRadius:8,padding:16,borderTop:`3px solid ${C.rust}`}}>
          <h3 style={{fontFamily:F.h,fontSize:14,fontWeight:700,margin:"0 0 8px"}}>Credentials</h3>
          <div style={{fontFamily:F.b,fontSize:12,color:C.gray,lineHeight:1.9}}>
            <div>MA (Leadership), U of Guelph</div><div>B.Comm, U of Guelph</div><div>Contributing Editor, Railway Age</div><div>14+ years North American rail</div><div>Rocky Mountaineer: 7x group revenue growth</div>
          </div>
        </div>
      </div>
      <div style={{flex:1,minWidth:300}}>
        <P s={{fontSize:17}}>Pauline has been railroading since 2011. She led the global group sales team for Rocky Mountaineer, growing revenues more than 7x in less than four years. She has worked alongside Class I operators at CN, KCS, and NS — targeting safety performance and operational effectiveness, seeing double and triple digit improvements within 2-3 years.</P>
        <P>She holds a Bachelor of Commerce and a Master of Arts in Leadership from the University of Guelph. As Contributing Editor at Railway Age, her column reaches rail decision-makers across North America.</P>
        <P>She founded KingdomBuilding Leadership with a core belief: when a leader gets better, everybody wins.</P>
        <div className="r-btn-row" style={{display:"flex",gap:12,marginTop:8}}><Btn primary href="/contact">Get in Touch</Btn><Btn href="https://www.railwayage.com/author/pauline-lipkewich/" target="_blank">Read Her Column</Btn></div>
      </div>
    </div>
  </Sec>
  <Sec bg={C.cream}><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,alignItems:"center"}}><div><H2>Pauline's Approach</H2><blockquote style={{fontFamily:F.h,fontSize:22,fontStyle:"italic",color:C.black,borderLeft:`4px solid ${C.rust}`,padding:"12px 0 12px 24px",margin:"0 0 20px"}}>"This isn't happening to you. It's happening with you."</blockquote><P>Transformation happens with the organization, not to it. Her approach is built on respect for the people doing the work — their expertise, challenges, and pride in the industry.</P></div><div style={{borderRadius:8,overflow:"hidden"}}><Img src={IMG.paulineSpeaking} alt="Pauline at a railway event"/></div></div></Sec>
</>;}

/* ══════ INSIGHTS ══════ */
export function InsightsContent(){const articles=[{img:IMG.roadAhead,t:"The Road Ahead: Putting It All Together",c:"Leadership Series",d:"Feb 2026",s:"Part 4/4",url:"/insights/the-road-ahead"},{img:IMG.fieldLeadership,t:"Lead Yourself First: Trinity of Excellence",c:"Leadership Series",d:"Jan 2026",s:"Part 3/4",url:"/insights/lead-yourself-first"},{img:IMG.leaderTalking,t:"Leading Through Uncertainty: What's Your Style?",c:"Leadership Series",d:"Oct 2025",s:"Part 2/4",url:"/insights/leading-through-uncertainty-part-2"},{img:IMG.freightTrain,t:"How Leaders Navigate Uncertainty",c:"Leadership Series",d:"Aug 2025",s:"Part 1/4",url:"/insights/leaders-navigate-uncertainty"},{img:IMG.safetyCulture,t:"Rail Safety by the Numbers: What FRA Data Reveals",c:"Data & Analysis",d:"2025",s:"",url:"/insights/rail-safety-human-factors"},{img:IMG.yardTraining,t:"What Is Speak Up Culture — And Why Every Railroad Needs One",c:"Speak Up Culture",d:"Mar 2026",s:"",url:"/insights/speak-up-culture-rail-safety"},{img:IMG.teamTraining,t:"Why Transformation Beats Training Every Time",c:"Culture Change",d:"Mar 2026",s:"",url:"/insights/transformation-vs-training"},{img:IMG.railwayTraining,t:"The ROI of Safety Culture: Building the Business Case",c:"ROI & Data",d:"Mar 2026",s:"",url:"/insights/roi-safety-culture"}];
return <><Sec pad="48px 0 56px"><Bc items={PAGES.insights.bc}/><Eye>The Rail Way™ Column & Pillar Articles</Eye><H1>{PAGES.insights.h1}</H1><P s={{maxWidth:560}}>Expert perspectives on rail leadership, safety culture, and operational excellence — from Contributing Editor Pauline Lipkewich and The Rail Way™ team.</P></Sec><Sec bg={C.cream}><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>{articles.map((a,i)=><a key={i} href={a.url} style={{textDecoration:"none",background:C.white,borderRadius:8,overflow:"hidden",cursor:"pointer",display:"block"}}><div style={{height:140,overflow:"hidden"}}><Img src={a.img} alt={a.t}/></div><div style={{padding:"14px 18px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1px"}}>{a.c}</span><span style={{fontFamily:F.b,fontSize:10,color:C.grayLt}}>{a.d}</span></div><h3 style={{fontFamily:F.h,fontSize:16,color:C.black,margin:0,lineHeight:1.3}}>{a.t}</h3>{a.s&&<span style={{fontFamily:F.m,fontSize:10,color:C.grayLt}}>{a.s}</span>}</div></a>)}</div></Sec></>;}

/* ══════ CLASS II & III ══════ */
export function ClassIIContent(){return <>
  <section style={{position:"relative",minHeight:260,overflow:"hidden"}}><div style={{position:"absolute",inset:0}}><Img src={IMG.roadAhead} alt="Freight train on open track" className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.3)"}}/></div><div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px"}}><Bc items={PAGES.classii.bc}/><Eye>For Regional & Short-Line Operators</Eye><h1 className="r-h1" style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.white,margin:"0 0 16px",lineHeight:1.18}}>{PAGES.classii.h1}</h1><p style={{fontFamily:F.b,fontSize:18,color:"rgba(255,255,255,0.7)",maxWidth:560,margin:0}}>Proven blueprint with Class I's, right-sized to deliver exponential results for short line and regional carriers.</p></div></section>
  <Sec><H2>Why Smaller Railroads See Faster Results</H2><div className="r-grid-3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>{[{t:"Leadership Proximity",d:"Executives closer to frontline. Behavioral modeling has direct impact."},{t:"Operational Agility",d:"Decisions in days, not quarters. No enterprise bureaucracy."},{t:"Community Identity",d:"'Railroad family' isn't a metaphor — it's the operational reality."}].map((c,i)=><div key={i} style={{background:C.cream,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><H3>{c.t}</H3><P s={{fontSize:13}}>{c.d}</P></div>)}</div><div style={{marginTop:28,textAlign:"center"}}><Btn primary href="/contact">Discuss Your Railroad's Needs</Btn></div></Sec>
</>;}

/* ══════ CONTACT ══════ */
export function ContactContent(){
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = () => {
    const form = formRef.current;
    if (!form) return;
    const firstName = form.querySelector('#trw_firstname').value;
    const lastName = form.querySelector('#trw_lastname').value;
    const email = form.querySelector('#trw_email').value;
    if (!firstName || !lastName || !email) { alert('Please fill in your name and email.'); return; }

    setSending(true);
    const data = new FormData();
    data.append('First Name', firstName);
    data.append('Last Name', lastName);
    data.append('email', email);
    data.append('Phone', form.querySelector('#trw_phone').value);
    data.append('Company', form.querySelector('#trw_company').value);
    data.append('Job Title', form.querySelector('#trw_jobtitle').value);
    data.append('Railroad Type', form.querySelector('#trw_rrtype').value);
    data.append('Message', form.querySelector('#trw_message').value);
    data.append('_cc', 'pauline@therailway.us');
    data.append('_subject', 'CONSULTATION REQUEST — ' + firstName + ' ' + lastName + ' | ' + (form.querySelector('#trw_company').value || 'Unknown Company'));

    fetch('https://formspree.io/f/manlnepr', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function(r) {
      setSending(false);
      if (r.ok) setSubmitted(true);
      else alert('Something went wrong. Please email pauline@therailway.us directly.');
    }).catch(function() {
      setSending(false);
      alert('Something went wrong. Please email pauline@therailway.us directly.');
    });
  };

  return <><Sec pad="48px 0 56px"><Bc items={PAGES.contact.bc}/><Eye>Let's Talk</Eye><H1>{PAGES.contact.h1}</H1></Sec><Sec bg={C.cream}><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
  <div>
    <H2>Schedule a Consultation</H2>
    {submitted ? (
      <div style={{background:C.white,borderRadius:8,padding:32,borderLeft:`4px solid ${C.rust}`,textAlign:"center"}}>
        <h3 style={{fontFamily:F.h,fontSize:20,color:C.rust,margin:"0 0 12px"}}>Thank You</h3>
        <P>Your consultation request has been received. Pauline or a member of the team will be in touch within one business day.</P>
      </div>
    ) : (
      <div ref={formRef} style={{display:"flex",flexDirection:"column",gap:12}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>First Name *</label><input id="trw_firstname" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,boxSizing:"border-box"}}/></div>
          <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>Last Name *</label><input id="trw_lastname" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,boxSizing:"border-box"}}/></div>
        </div>
        <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>Email *</label><input id="trw_email" type="email" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,boxSizing:"border-box"}}/></div>
        <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>Phone</label><input id="trw_phone" type="tel" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,boxSizing:"border-box"}}/></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>Company</label><input id="trw_company" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,boxSizing:"border-box"}}/></div>
          <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>Job Title</label><input id="trw_jobtitle" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,boxSizing:"border-box"}}/></div>
        </div>
        <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>Railroad Type</label><select id="trw_rrtype" style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,background:C.white}}><option value="">Railroad Type...</option><option>Class I</option><option>Regional (II)</option><option>Short Line (III)</option><option>Industrial</option><option>Passenger</option></select></div>
        <div><label style={{fontFamily:F.b,fontSize:12,color:C.gray,display:"block",marginBottom:4}}>What would you like to discuss?</label><textarea id="trw_message" rows={3} style={{width:"100%",padding:"10px 12px",borderRadius:5,border:`1px solid ${C.grayRule}`,fontFamily:F.b,fontSize:14,resize:"vertical",boxSizing:"border-box"}}/></div>
        <Btn primary onClick={handleSubmit}>{sending ? "Sending..." : "Submit Request"}</Btn>
      </div>
    )}
  </div>
  <div><H2>Who This Is For</H2>{[{r:"C-Suite Executives",d:"Strategic culture transformation aligned with business objectives"},{r:"VPs of Safety",d:"Building sustainable safety cultures that deliver results"},{r:"VPs of Operations",d:"Creating conditions for operational excellence"},{r:"HR Leaders",d:"Engaging and retaining workforce through culture"}].map((r,i)=><div key={i} style={{background:C.white,borderRadius:8,padding:16,borderLeft:`3px solid ${C.rust}`,marginBottom:10}}><h3 style={{fontFamily:F.h,fontSize:15,fontWeight:700,color:C.black,margin:"0 0 3px"}}>{r.r}</h3><p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:0}}>{r.d}</p></div>)}<div style={{marginTop:20,padding:18,background:C.white,borderRadius:8}}><p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:"0 0 4px"}}>Reach out directly:</p><p style={{fontFamily:F.b,fontSize:14,color:C.black,margin:"0 0 2px",fontWeight:600}}>pauline@therailway.us</p><p style={{fontFamily:F.b,fontSize:14,color:C.black,margin:0}}>+1.780.991.9993</p></div></div></div></Sec></>;
}


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
      <details style={{background:C.white,borderRadius:10,borderLeft:`4px solid ${C.rust}`}}>
        <summary style={{padding:"24px 28px",cursor:"pointer",listStyle:"none"}}>
          <p style={{fontFamily:F.b,fontSize:10,color:"#34495E",textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>In Memoriam — MAR 11, 2026</p>
          <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 4px"}}>Jesse James Chalich</h3>
          <p style={{fontFamily:F.b,fontSize:14,color:C.rust,margin:"0 0 4px",fontWeight:600}}>President & COO, Northern Plains Railroad & Northern Plains Rail Services</p>
          <p style={{fontFamily:F.b,fontSize:13,color:C.grayLt,margin:"0 0 4px"}}>September 21, 1976 — March 11, 2026</p>
          <p style={{fontFamily:F.b,fontSize:13,color:C.rust,margin:0}}>Read tribute ▾</p>
        </summary>
        <div style={{padding:"0 28px 28px"}}>
        <P>Jesse James Chalich, 49, passed away unexpectedly on March 11, 2026. A 4th generation railroader, Jesse's connection to the industry wasn't just professional — it was in his blood. His grandfather, father, and uncle all worked in the Maintenance of Way department at the SOO Line. That heritage shaped a career defined by deep respect for the work and the people who do it.</P>
        <P>Jesse started as a conductor/engineer on Northern Plains Railroad in 1997, the year the company was founded in central North Dakota. His natural ability to connect with people was evident from the start. He moved through customer service, marketing, and executive leadership, helping guide the company as it grew from forty employees to more than two hundred. He rose to President and Chief Operating Officer of the Northern Plains Rail companies — a role he led with humility, pride, and dedication.</P>
        <P>Under Jesse's leadership, Northern Plains maintained exceptional employee morale and a culture that supported employees in putting safety and family first. He furthered his industry knowledge through the Railway Management Program at Michigan State University, and in 2014, Progressive Railroading named him one of the rail industry's "20 Rising Stars." He served on the board of the Lake Superior Railroad Museum and the American Association of Railroad Superintendents.</P>
        <P>Those who knew Jesse describe a consummate, natural leader — a best friend to many, including his children, with innate compassion and an uncanny ability to tell a story that made even the most ordinary moments hilarious. He was a true north compass with intuition and insights that always exceeded his years, and an absolute trusted advisor in both life and at work.</P>
        <P s={{margin:0,fontStyle:"italic",color:C.black}}>Jesse leaves behind a legacy that will continue far beyond the horizon. He is survived by his wife Julie, their four children — Jaden, Morgan, Ethan, and Maggie — and grandson Beckett.</P>
        </div>
      </details>

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
          <a href="https://www.railwayage.com/railway-age-young-professionals-2026/" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>Register (Free) \u2192</a>
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
          <a href="https://www.aiesec.ca/y2b" target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>Learn More \u2192</a>
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
</>;}