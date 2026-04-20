"use client";
import { useState, useRef } from "react";
import { C, F, IMG, PAGES } from "./shared";
import { Img, Sec, Eye, H1, H2, H3, P, Btn, FAQ, Stat, Bc } from "./ui";

/* ══════ HOME ══════ */
export function HomeContent({ data }){
  const d = data;
  return <>
  <section style={{position:"relative",minHeight:480,overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.fieldLeadership} alt={d.hero.heroImageAlt} className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.3)",objectPosition:"85% 35%"}}/></div>
    <div style={{position:"absolute",left:0,top:0,bottom:0,width:6,background:`linear-gradient(180deg,${C.rust},transparent)`,zIndex:2}}/>
    <div className="r-hero-text" style={{position:"relative",zIndex:2,maxWidth:960,margin:"0 auto",padding:"60px 28px 72px"}}>
      <Eye>{d.hero.eyebrow}</Eye>
      <h1 className="r-h1" style={{fontFamily:F.h,fontSize:42,fontWeight:700,color:C.white,margin:"0 0 20px",lineHeight:1.15,maxWidth:420}}>{d.hero.headline} <span style={{color:C.rust}}>{d.hero.headlineAccent}</span></h1>
      <p style={{fontFamily:F.b,fontSize:18,color:"rgba(255,255,255,0.7)",margin:"0 0 12px",lineHeight:1.65,maxWidth:400}}>{d.hero.sub}</p>
      <p style={{fontFamily:F.b,fontSize:16,color:"rgba(255,255,255,0.55)",margin:"0 0 32px",lineHeight:1.65,maxWidth:400}}>{d.hero.body}</p>
      <div className="r-btn-row" style={{display:"flex",gap:14}}><Btn primary onClick={()=>document.getElementById('pulse-check')?.scrollIntoView({behavior:'smooth'})}>{d.hero.btnPrimaryLabel}</Btn><Btn href={d.hero.btnSecondaryHref}>{d.hero.btnSecondaryLabel}</Btn></div>
    </div>
  </section>

  <Sec bg={C.cream} pad="40px 0"><div className="r-stat-row" style={{display:"flex",gap:20}}>{d.stats.map((s,i)=><Stat key={i} v={s.v} l={s.l} src={s.src}/>)}</div></Sec>

  <Sec pad="48px 0">
    <div style={{textAlign:"center",marginBottom:28}}>
      <Eye>{d.recognition.eyebrow}</Eye>
      <H2>{d.recognition.heading}</H2>
    </div>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:28}}>
      {d.recognition.cards.map((c,i)=><div key={i} style={{background:C.cream,borderRadius:10,padding:28,borderTop:`3px solid ${C.rust}`,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>{c.award}</p>
          <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 8px",lineHeight:1.25}}>{c.name}</h3>
          <p style={{fontFamily:F.h,fontSize:16,color:C.rust,margin:"0 0 12px",fontStyle:"italic"}}>{c.title}</p>
          <P s={{fontSize:13}}>{c.desc}</P>
        </div>
        <p style={{fontFamily:F.m,fontSize:10,color:C.grayLt,margin:0}}>{c.source}</p>
      </div>)}
    </div>
    {/* Norfolk Southern callout - admin-only content, _adminOnly_ prefix flags it from editor UI */}
    <div style={{background:C.brown,borderRadius:10,padding:"24px 32px",textAlign:"center"}}>
      <p style={{fontFamily:F.h,fontSize:16,color:"rgba(255,255,255,0.9)",margin:"0 0 6px",lineHeight:1.5}}>{d.recognition._adminOnly_nsCallout.body}</p>
      <p style={{fontFamily:F.b,fontSize:14,color:"rgba(255,255,255,0.55)",margin:"0 0 16px"}}>{d.recognition._adminOnly_nsCallout.subtext}</p>
      <Btn primary href={d.recognition._adminOnly_nsCallout.btnHref}>{d.recognition._adminOnly_nsCallout.btnLabel}</Btn>
    </div>
  </Sec>

  <Sec>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"5fr 4fr",gap:40}}>
      <div>
        <Eye>{d.whatWeDo.eyebrow}</Eye>
        <H2>{d.whatWeDo.heading}</H2>
        <P>{d.whatWeDo.body1}</P>
        <P>{d.whatWeDo.body2}</P>
        <div className="r-btn-row" style={{display:"flex",gap:12,marginTop:8}}><Btn primary href={d.whatWeDo.btnPrimaryHref}>{d.whatWeDo.btnPrimaryLabel}</Btn><Btn href={d.whatWeDo.btnSecondaryHref}>{d.whatWeDo.btnSecondaryLabel}</Btn></div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        <div style={{borderRadius:8,overflow:"hidden",height:220}}><Img src={IMG.teamTraining} alt={d.whatWeDo.images.mainAlt}/></div>
        <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{borderRadius:8,overflow:"hidden",height:140}}><Img src={IMG.safetyCulture} alt={d.whatWeDo.images.leftAlt}/></div>
          <div style={{borderRadius:8,overflow:"hidden",height:140}}><Img src={IMG.yardTraining} alt={d.whatWeDo.images.rightAlt}/></div>
        </div>
      </div>
    </div>
  </Sec>

  <Sec bg={C.cream}>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:40,alignItems:"center"}}>
      <div style={{borderRadius:10,overflow:"hidden"}}><Img src={IMG.paulineHeadshot} alt={d.paulineFeature.imageAlt} style={{borderRadius:10}}/></div>
      <div>
        <Eye>{d.paulineFeature.eyebrow}</Eye>
        <H2>{d.paulineFeature.heading}</H2>
        <P s={{fontSize:17,fontStyle:"italic",color:C.black}}>{d.paulineFeature.quote}</P>
        <P>{d.paulineFeature.bio}</P>
        <div className="r-btn-row" style={{display:"flex",gap:12}}><Btn primary href={d.paulineFeature.btnPrimaryHref}>{d.paulineFeature.btnPrimaryLabel}</Btn><Btn href={d.paulineFeature.btnSecondaryHref} target="_blank">{d.paulineFeature.btnSecondaryLabel}</Btn></div>
      </div>
    </div>
  </Sec>

  <Sec>
    <Eye>{d.seriesGrid.eyebrow}</Eye>
    <H2>{d.seriesGrid.heading}</H2>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginTop:16}}>
      {d.seriesGrid.articles.map((a,i)=><a key={i} href={a.url} style={{textDecoration:"none",background:C.cream,borderRadius:8,overflow:"hidden",cursor:"pointer",display:"block"}}>
        <div style={{height:160,overflow:"hidden"}}><Img src={IMG[a.imgKey]} alt={a.title}/></div>
        <div style={{padding:"16px 18px"}}>
          <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1px",margin:"0 0 6px"}}>{a.part} • {a.date}</p>
          <h3 style={{fontFamily:F.h,fontSize:16,color:C.black,margin:0,lineHeight:1.3}}>{a.title}</h3>
        </div>
      </a>)}
    </div>
    <div style={{marginTop:20}}><Btn href={d.seriesGrid.viewAllHref}>{d.seriesGrid.viewAllLabel}</Btn></div>
  </Sec>

  <Sec bg={C.cream}>
    <Eye>{d.team.eyebrow}</Eye>
    <H2>{d.team.heading}</H2>
    <div className="r-grid-team" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginTop:16,maxWidth:720,marginLeft:"auto",marginRight:"auto"}}>
      {d.team.members.map((t,i)=><div key={i} style={{background:C.white,borderRadius:8,overflow:"hidden"}}>
        <div style={{height:280,overflow:"hidden"}}><Img src={IMG[t.imgKey]} alt={t.name} style={{objectPosition:t.objectPosition}}/></div>
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
      <Eye>{d.pulseCheck.eyebrow}</Eye>
      <H2>{d.pulseCheck.heading}</H2>
      <P s={{maxWidth:560,margin:"0 auto 8px",textAlign:"center"}}>{d.pulseCheck.description}</P>
      <P s={{fontSize:13,color:C.grayLt,textAlign:"center"}}>{d.pulseCheck.disclaimer}</P>
    </div>
    <div style={{maxWidth:720,margin:"0 auto",borderRadius:10,overflow:"hidden",border:`1px solid ${C.grayRule}`,background:C.cream}}>
      <iframe className="r-iframe" src={d.pulseCheck.iframeSrc} title={d.pulseCheck.iframeTitle} style={{width:"100%",height:700,border:"none",display:"block"}}/>
    </div>
    <div style={{textAlign:"center",marginTop:16}}>
      <P s={{fontSize:12,color:C.grayLt,textAlign:"center"}}>{d.pulseCheck.footerText} <a href={d.pulseCheck.footerLinkHref} style={{color:C.rust,fontWeight:600,textDecoration:"none"}}>{d.pulseCheck.footerLinkLabel}</a> instead.</P>
    </div>
  </Sec>

  <Sec>
    <Eye>{d.faq.eyebrow}</Eye>
    <H2 id="faq">{d.faq.heading}</H2>
    {d.faq.items.map((item,i)=><FAQ key={i} q={item.q} a={item.a}/>)}
  </Sec>

  <section style={{position:"relative",overflow:"hidden",minHeight:280}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.railwayTraining} alt={d.cta.bgImageAlt} className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.25)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"64px 28px",textAlign:"center"}}>
      <h2 style={{fontFamily:F.h,fontSize:28,color:C.white,margin:"0 0 12px"}}>{d.cta.heading}</h2>
      <p style={{fontFamily:F.b,fontSize:15,color:"rgba(255,255,255,0.6)",margin:"0 0 24px"}}>{d.cta.sub}</p>
      <Btn primary href={d.cta.btnHref}>{d.cta.btnLabel}</Btn>
    </div>
  </section>
</>;
}

/* ══════ SPEAK UP ══════ */
export function SpeakUpContent({ data }){
  const d = data;
  return <>
  <Sec pad="48px 0 56px"><Bc items={PAGES.speakup.bc}/><Eye>{d.intro.eyebrow}</Eye><H1>{PAGES.speakup.h1}</H1>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:32}}>
      <div><P s={{fontSize:18}}>{d.intro.body1}</P><P>{d.intro.body2}</P></div>
      <div style={{borderRadius:8,overflow:"hidden"}}><Img src={IMG.paulineSpeaking} alt={d.intro.imageAlt}/></div>
    </div>
  </Sec>
  <Sec bg={C.cream}><H2>{d.whyItMatters.heading}</H2>
    <div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
      <div><H3>{d.whyItMatters.costOfSilence.heading}</H3><P>{d.whyItMatters.costOfSilence.body}</P></div>
      <div><H3>{d.whyItMatters.alternative.heading}</H3><P>{d.whyItMatters.alternative.body}</P></div>
    </div>
  </Sec>
  <Sec><H2>{d.howWeBuild.heading}</H2><P>{d.howWeBuild.intro}</P>
    <div className="r-grid-3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,marginTop:24}}>
      {d.howWeBuild.steps.map(s=><div key={s.n} style={{background:C.cream,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><div style={{fontFamily:F.h,fontSize:28,color:C.rust,fontWeight:700,marginBottom:8,opacity:.3}}>{s.n}</div><H3>{s.t}</H3><P s={{fontSize:13}}>{s.d}</P></div>)}
    </div>
    <div style={{marginTop:28,display:"flex",gap:12}}><Btn primary href={d.howWeBuild.btnPrimaryHref}>{d.howWeBuild.btnPrimaryLabel}</Btn><Btn href={d.howWeBuild.btnSecondaryHref}>{d.howWeBuild.btnSecondaryLabel}</Btn></div>
  </Sec>
  <Sec bg={C.cream}><H2>{d.faq.heading}</H2>
    {d.faq.items.map((item,i)=><FAQ key={i} q={item.q} a={item.a}/>)}
  </Sec>
</>;
}

/* ══════ PROCESS ══════ */
export function ProcessContent({ data }){
  const d = data;
  return <>
  <section style={{position:"relative",minHeight:280,overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.leaderTalking} alt={d.hero.heroImageAlt} className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.3)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px"}}><Bc items={PAGES.process.bc}/><Eye>{d.hero.eyebrow}</Eye><h1 className="r-h1" style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.white,margin:"0 0 16px",lineHeight:1.18}}>{PAGES.process.h1}</h1><p style={{fontFamily:F.b,fontSize:18,color:"rgba(255,255,255,0.7)",maxWidth:560,margin:0,lineHeight:1.6}}>{d.hero.sub}</p></div>
  </section>
  <Sec bg={C.cream}><div style={{display:"flex",flexDirection:"column",gap:24}}>{d.stages.map((s,i)=><div key={i} className="r-timeline" style={{display:"grid",gridTemplateColumns:"160px 1fr",gap:24}}><div style={{textAlign:"right",paddingTop:4}}><div style={{fontFamily:F.h,fontSize:14,color:C.rust,fontWeight:700}}>Stage {i+1}</div><div style={{fontFamily:F.m,fontSize:11,color:C.grayLt}}>{s.t}</div></div><div style={{background:C.white,borderRadius:8,padding:24,borderLeft:`4px solid ${C.rust}`}}><H3>{s.n}</H3><P>{s.d}</P></div></div>)}</div></Sec>
  <Sec><H2>{d.comparison.heading}</H2><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28}}><div style={{background:"#FFF5F5",borderRadius:8,padding:24,borderTop:"3px solid #CC4444"}}><h3 style={{fontFamily:F.h,fontSize:18,color:"#CC4444",margin:"0 0 12px"}}>{d.comparison.traditional.heading}</h3><P s={{fontSize:13}}>{d.comparison.traditional.body}</P></div><div style={{background:C.tint,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><h3 style={{fontFamily:F.h,fontSize:18,color:C.rust,margin:"0 0 12px"}}>{d.comparison.residency.heading}</h3><P s={{fontSize:13}}>{d.comparison.residency.body}</P></div></div><div style={{marginTop:28,textAlign:"center"}}><Btn primary href={d.comparison.btnHref}>{d.comparison.btnLabel}</Btn></div></Sec>
</>;
}

/* ══════ ABOUT ══════ */
export function AboutContent({ data }){
  const d = data;
  return <>
  <Sec pad="48px 0 56px"><Bc items={PAGES.about.bc}/><Eye>{d.hero.eyebrow}</Eye><H1>{PAGES.about.h1}</H1>
    <div style={{display:"flex",gap:32,alignItems:"flex-start",flexWrap:"wrap"}}>
      <div style={{width:220,flexShrink:0}}>
        <div style={{borderRadius:10,overflow:"hidden",marginBottom:16}}><Img src={IMG.paulineHeadshot} alt={d.hero.imageAlt} style={{borderRadius:10,height:300,objectPosition:"center 20%"}}/></div>
        <div style={{background:C.cream,borderRadius:8,padding:16,borderTop:`3px solid ${C.rust}`}}>
          <h3 style={{fontFamily:F.h,fontSize:14,fontWeight:700,margin:"0 0 8px"}}>{d.credentials.heading}</h3>
          <div style={{fontFamily:F.b,fontSize:12,color:C.gray,lineHeight:1.9}}>
            {d.credentials.items.map((item,i)=><div key={i}>{item}</div>)}
          </div>
        </div>
      </div>
      <div style={{flex:1,minWidth:300}}>
        <P s={{fontSize:17}}>{d.bio.p1}</P>
        <P>{d.bio.p2}</P>
        <P>{d.bio.p3}</P>
        <div className="r-btn-row" style={{display:"flex",gap:12,marginTop:8}}><Btn primary href={d.bio.btnPrimaryHref}>{d.bio.btnPrimaryLabel}</Btn><Btn href={d.bio.btnSecondaryHref} target="_blank">{d.bio.btnSecondaryLabel}</Btn></div>
      </div>
    </div>
  </Sec>
  <Sec bg={C.cream}><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:32,alignItems:"center"}}><div><H2>{d.approach.heading}</H2><blockquote style={{fontFamily:F.h,fontSize:22,fontStyle:"italic",color:C.black,borderLeft:`4px solid ${C.rust}`,padding:"12px 0 12px 24px",margin:"0 0 20px"}}>{d.approach.quote}</blockquote><P>{d.approach.body}</P></div><div style={{borderRadius:8,overflow:"hidden"}}><Img src={IMG.paulineSpeaking} alt={d.approach.imageAlt}/></div></div></Sec>
</>;
}

/* ══════ INSIGHTS ══════ */
export function InsightsContent({ data }){
  const d = data;
  return <><Sec pad="48px 0 56px"><Bc items={PAGES.insights.bc}/><Eye>{d.hero.eyebrow}</Eye><H1>{PAGES.insights.h1}</H1><P s={{maxWidth:560}}>{d.hero.body}</P></Sec><Sec bg={C.cream}><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>{d.articles.map((a,i)=><a key={i} href={a.url} style={{textDecoration:"none",background:C.white,borderRadius:8,overflow:"hidden",cursor:"pointer",display:"block"}}><div style={{height:140,overflow:"hidden"}}><Img src={IMG[a.imgKey]} alt={a.t}/></div><div style={{padding:"14px 18px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1px"}}>{a.c}</span><span style={{fontFamily:F.b,fontSize:10,color:C.grayLt}}>{a.d}</span></div><h3 style={{fontFamily:F.h,fontSize:16,color:C.black,margin:0,lineHeight:1.3}}>{a.t}</h3>{a.s&&<span style={{fontFamily:F.m,fontSize:10,color:C.grayLt}}>{a.s}</span>}</div></a>)}</div></Sec></>;
}

/* ══════ CLASS II & III ══════ */
export function ClassIIContent({ data }){
  const d = data;
  return <>
  <section style={{position:"relative",minHeight:260,overflow:"hidden"}}><div style={{position:"absolute",inset:0}}><Img src={IMG.roadAhead} alt={d.hero.heroImageAlt} className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.3)"}}/></div><div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px"}}><Bc items={PAGES.classii.bc}/><Eye>{d.hero.eyebrow}</Eye><h1 className="r-h1" style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.white,margin:"0 0 16px",lineHeight:1.18}}>{PAGES.classii.h1}</h1><p style={{fontFamily:F.b,fontSize:18,color:"rgba(255,255,255,0.7)",maxWidth:560,margin:0}}>{d.hero.sub}</p></div></section>
  <Sec><H2>{d.why.heading}</H2><div className="r-grid-3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>{d.why.cards.map((c,i)=><div key={i} style={{background:C.cream,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}><H3>{c.t}</H3><P s={{fontSize:13}}>{c.d}</P></div>)}</div><div style={{marginTop:28,textAlign:"center"}}><Btn primary href={d.why.btnHref}>{d.why.btnLabel}</Btn></div></Sec>
</>;
}

/* ══════ CONTACT ══════ */
export function ContactContent({ data }){
  const d = data;
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
    const formData = new FormData();
    formData.append('First Name', firstName);
    formData.append('Last Name', lastName);
    formData.append('email', email);
    formData.append('Phone', form.querySelector('#trw_phone').value);
    formData.append('Company', form.querySelector('#trw_company').value);
    formData.append('Job Title', form.querySelector('#trw_jobtitle').value);
    formData.append('Railroad Type', form.querySelector('#trw_rrtype').value);
    formData.append('Message', form.querySelector('#trw_message').value);
    formData.append('_cc', 'pauline@therailway.us');
    formData.append('_subject', 'CONSULTATION REQUEST — ' + firstName + ' ' + lastName + ' | ' + (form.querySelector('#trw_company').value || 'Unknown Company'));

    fetch('https://formspree.io/f/manlnepr', {
      method: 'POST',
      body: formData,
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

  return <><Sec pad="48px 0 56px"><Bc items={PAGES.contact.bc}/><Eye>{d.hero.eyebrow}</Eye><H1>{PAGES.contact.h1}</H1></Sec><Sec bg={C.cream}><div className="r-grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
  <div>
    <H2>{d.form.heading}</H2>
    {submitted ? (
      <div style={{background:C.white,borderRadius:8,padding:32,borderLeft:`4px solid ${C.rust}`,textAlign:"center"}}>
        <h3 style={{fontFamily:F.h,fontSize:20,color:C.rust,margin:"0 0 12px"}}>{d.form.thankYou.heading}</h3>
        <P>{d.form.thankYou.body}</P>
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
        <Btn primary onClick={handleSubmit}>{sending ? d.form.sendingLabel : d.form.submitLabel}</Btn>
      </div>
    )}
  </div>
  <div><H2>{d.audience.heading}</H2>{d.audience.roles.map((r,i)=><div key={i} style={{background:C.white,borderRadius:8,padding:16,borderLeft:`3px solid ${C.rust}`,marginBottom:10}}><h3 style={{fontFamily:F.h,fontSize:15,fontWeight:700,color:C.black,margin:"0 0 3px"}}>{r.r}</h3><p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:0}}>{r.d}</p></div>)}<div style={{marginTop:20,padding:18,background:C.white,borderRadius:8}}><p style={{fontFamily:F.b,fontSize:13,color:C.gray,margin:"0 0 4px"}}>{d.audience.directContact.label}</p><p style={{fontFamily:F.b,fontSize:14,color:C.black,margin:"0 0 2px",fontWeight:600}}>{d.audience.directContact.email}</p><p style={{fontFamily:F.b,fontSize:14,color:C.black,margin:0}}>{d.audience.directContact.phone}</p></div></div></div></Sec></>;
}


/* ══════ LEGACIES ══════ */
export function LegaciesContent({ data }){
  const d = data;
  return <>
  <Sec pad="48px 0 56px">
    <Bc items={PAGES.legacies.bc}/>
    <Eye>{d.hero.eyebrow}</Eye>
    <H1>{PAGES.legacies.h1}</H1>
    <P s={{maxWidth:600}}>{d.hero.intro}</P>
  </Sec>

  <Sec bg={C.cream}>
    <div style={{display:"flex",flexDirection:"column",gap:20}}>

      {d.entries.map((entry,i) => {
        if (entry.type === "memorial") {
          return (
            <details key={i} style={{background:C.white,borderRadius:10,borderLeft:`4px solid ${C.rust}`}}>
              <summary style={{padding:"24px 28px",cursor:"pointer",listStyle:"none"}}>
                <p style={{fontFamily:F.b,fontSize:10,color:"#34495E",textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>{entry.category} — {entry.dateLabel}</p>
                <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 4px"}}>{entry.heading}</h3>
                <p style={{fontFamily:F.b,fontSize:14,color:C.rust,margin:"0 0 4px",fontWeight:600}}>{entry.role}</p>
                <p style={{fontFamily:F.b,fontSize:13,color:C.grayLt,margin:"0 0 4px"}}>{entry.lifespan}</p>
                <p style={{fontFamily:F.b,fontSize:13,color:C.rust,margin:0}}>{entry.expandLabel}</p>
              </summary>
              <div style={{padding:"0 28px 28px"}}>
                {entry.tribute.map((p,pi)=><P key={pi}>{p}</P>)}
                <P s={{margin:0,fontStyle:"italic",color:C.black}}>{entry.tributeItalic}</P>
              </div>
            </details>
          );
        }
        // Default: news/leadership change card
        return (
          <div key={i} style={{background:C.white,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`}}>
            <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>{entry.category} — {entry.dateLabel}</p>
            <H3>{entry.heading}</H3>
            <P s={{fontSize:14}}>{entry.body}</P>
            {entry.linkHref && <a href={entry.linkHref} target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>{entry.linkLabel}</a>}
          </div>
        );
      })}

    </div>
  </Sec>

  <section style={{position:"relative",overflow:"hidden",minHeight:200}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.railwayTraining} alt={d.submit.bgImageAlt} className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.25)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px",textAlign:"center"}}>
      <h2 style={{fontFamily:F.h,fontSize:24,color:C.white,margin:"0 0 10px"}}>{d.submit.heading}</h2>
      <p style={{fontFamily:F.b,fontSize:16,color:"rgba(255,255,255,0.6)",margin:"0 0 20px"}}>{d.submit.sub}</p>
      <Btn primary href={d.submit.btnHref}>{d.submit.btnLabel}</Btn>
    </div>
  </section>
</>;
}


/* ══════ EVENTS ══════ */
export function EventsContent({ data }){
  const d = data;
  return <>
  <Sec pad="48px 0 56px">
    <Bc items={PAGES.events.bc}/>
    <Eye>{d.hero.eyebrow}</Eye>
    <H1>{PAGES.events.h1}</H1>
    <P s={{maxWidth:600}}>{d.hero.body}</P>
  </Sec>

  <Sec bg={C.cream}>
    <div style={{display:"flex",flexDirection:"column",gap:20}}>

      {d.events.map((ev,i) => (
        <div key={i} style={{background:C.white,borderRadius:8,padding:24,borderTop:`3px solid ${C.rust}`,display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"}}>
          <div style={{minWidth:80,textAlign:"center",padding:"12px 16px",background:C.cream,borderRadius:6}}>
            <p style={{fontFamily:F.h,fontSize:24,color:C.rust,margin:0,fontWeight:700}}>{ev.dateBadgeDay}</p>
            <p style={{fontFamily:F.b,fontSize:12,color:C.gray,margin:0,textTransform:"uppercase"}}>{ev.dateBadgeMonth}</p>
          </div>
          <div style={{flex:1,minWidth:240}}>
            <p style={{fontFamily:F.b,fontSize:10,color:C.rust,textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 6px"}}>{ev.meta}</p>
            <H3>{ev.heading}</H3>
            <P s={{fontSize:14}}>{ev.body}</P>
            <p style={{fontFamily:F.b,fontSize:12,color:C.grayLt,margin:"0 0 12px"}}>{ev.host}</p>
            <a href={ev.linkHref} target="_blank" rel="noopener noreferrer" style={{fontFamily:F.b,fontSize:13,color:C.rust,textDecoration:"none",fontWeight:600}}>{ev.linkLabel}</a>
          </div>
        </div>
      ))}

    </div>
  </Sec>

  <section style={{position:"relative",overflow:"hidden",minHeight:200}}>
    <div style={{position:"absolute",inset:0}}><Img src={IMG.railwayTraining} alt={d.cta.bgImageAlt} className="r-img-hero" style={{borderRadius:0,filter:"brightness(0.25)"}}/></div>
    <div style={{position:"relative",zIndex:1,maxWidth:960,margin:"0 auto",padding:"48px 28px",textAlign:"center"}}>
      <h2 style={{fontFamily:F.h,fontSize:24,color:C.white,margin:"0 0 10px"}}>{d.cta.heading}</h2>
      <p style={{fontFamily:F.b,fontSize:16,color:"rgba(255,255,255,0.6)",margin:"0 0 20px"}}>{d.cta.sub}</p>
      <Btn primary href={d.cta.btnHref}>{d.cta.btnLabel}</Btn>
    </div>
  </section>
</>;
}
