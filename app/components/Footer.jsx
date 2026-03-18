"use client";
import Link from "next/link";
import { C, F, IMG, NAV } from "./shared";

export default function Footer(){
  return <footer style={{background:C.blackDeep,padding:"48px 0 24px"}}>
    <div style={{maxWidth:960,margin:"0 auto",padding:"0 28px"}}>
      <div className="r-footer-grid" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:28,marginBottom:28}}>
        <div>
          <img src={IMG.logoWhite} alt="The Rail Way™" style={{height:44,marginBottom:12,filter:"brightness(1.2)"}}/>
          <p style={{fontFamily:F.b,fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.6,maxWidth:260}}>A division of KingdomBuilding Leadership, Inc. Transforming how the rail sector develops generational railroaders.</p>
        </div>
        <div>
          <p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Services</p>
          {[{l:"Speak Up Culture",href:"/speak-up-culture"},{l:"Our Process",href:"/our-process"},{l:"Class II & III",href:"/class-ii-iii"},{l:"Legacies",href:"/legacies"}].map(s=>
            <p key={s.l} style={{margin:"0 0 6px"}}><Link href={s.href} style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",textDecoration:"none"}}>{s.l}</Link></p>
          )}
        </div>
        <div>
          <p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Insights</p>
          {[{t:"The Road Ahead",u:"/insights/the-road-ahead"},{t:"Lead Yourself First",u:"/insights/lead-yourself-first"},{t:"What's Your Style?",u:"/insights/leading-through-uncertainty-part-2"},{t:"Navigate Uncertainty",u:"/insights/leaders-navigate-uncertainty"}].map(a=>
            <p key={a.t} style={{margin:"0 0 6px"}}><a href={a.u} style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",textDecoration:"none"}}>{a.t}</a></p>
          )}
        </div>
        <div>
          <p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Connect</p>
          <p style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",margin:"0 0 6px"}}>pauline@therailway.us</p>
          <p style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",margin:"0 0 6px"}}>+1.780.991.9993</p>
          <p style={{margin:"0 0 6px"}}><Link href="/contact" style={{fontFamily:F.b,fontSize:13,color:"rgba(255,255,255,0.6)",textDecoration:"none"}}>Book a Consultation</Link></p>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:16,display:"flex",justifyContent:"space-between"}}>
        <p style={{fontFamily:F.b,fontSize:11,color:"rgba(255,255,255,0.3)",margin:0}}>© 2026 KingdomBuilding Leadership, Inc.</p>
        <p style={{fontFamily:F.b,fontSize:11,color:"rgba(255,255,255,0.3)",margin:0}}>Privacy Policy • Terms</p>
      </div>
    </div>
  </footer>;
}
