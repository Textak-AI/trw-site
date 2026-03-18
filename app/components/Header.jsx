"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C, F, IMG, NAV } from "./shared";

const INSIGHT_LINKS = [
  {l:"The Road Ahead",href:"/insights/the-road-ahead",cat:"Series Part 4"},
  {l:"Lead Yourself First",href:"/insights/lead-yourself-first",cat:"Series Part 3"},
  {l:"What's Your Style?",href:"/insights/leading-through-uncertainty-part-2",cat:"Series Part 2"},
  {l:"Navigate Uncertainty",href:"/insights/leaders-navigate-uncertainty",cat:"Series Part 1"},
  {l:"Rail Safety by the Numbers",href:"/insights/rail-safety-human-factors",cat:"Data & Analysis"},
  {l:"Speak Up Culture",href:"/insights/speak-up-culture-rail-safety",cat:"Speak Up Culture"},
  {l:"Transformation vs. Training",href:"/insights/transformation-vs-training",cat:"Culture Change"},
  {l:"The ROI of Safety Culture",href:"/insights/roi-safety-culture",cat:"ROI & Data"},
];

export default function Header(){
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return <header style={{background:C.white,borderBottom:`1px solid ${C.grayRule}`,position:"sticky",top:0,zIndex:100}}>
    <div className="r-header" style={{maxWidth:960,margin:"0 auto",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56}}>
      <Link href="/"><img src={IMG.logo} alt="The Rail Way™" style={{height:36}}/></Link>
      <nav className="r-nav" style={{display:"flex",gap:16}}>
        {NAV.map(n=>{
          const active = (n.href==="/" && pathname==="/") || (n.href!=="/" && pathname.startsWith(n.href));
          
          if (n.id === "insights") {
            return <div key={n.id}
              style={{position:"relative"}}
              onMouseEnter={()=>setOpen(true)}
              onMouseLeave={()=>setOpen(false)}
            >
              <Link href={n.href} style={{fontFamily:F.b,fontSize:12.5,fontWeight:600,color:active?C.rust:C.gray,textDecoration:"none",padding:"6px 0",borderBottom:active?`2px solid ${C.rust}`:"2px solid transparent",display:"inline-block"}}>
                {n.l} <span style={{fontSize:10,opacity:0.5}}>▾</span>
              </Link>
              {open && <div style={{
                position:"absolute",
                top:"100%",
                left:"50%",
                transform:"translateX(-50%)",
                paddingTop:8,
                zIndex:200,
              }}>
                <div style={{
                  background:C.white,
                  borderRadius:8,
                  boxShadow:"0 8px 30px rgba(0,0,0,0.12)",
                  border:`1px solid ${C.grayRule}`,
                  padding:"12px 0",
                  minWidth:260,
                }}>
                  <Link href="/insights" style={{
                    display:"block",
                    padding:"8px 20px",
                    fontFamily:F.b,fontSize:12,fontWeight:700,
                    color:C.rust,textDecoration:"none",
                    textTransform:"uppercase",letterSpacing:"1px",
                    borderBottom:`1px solid ${C.grayRule}`,
                    marginBottom:4,
                  }}>All Insights</Link>
                  {INSIGHT_LINKS.map(a=>
                    <a key={a.href} href={a.href} style={{
                      display:"block",
                      padding:"7px 20px",
                      fontFamily:F.b,fontSize:13,
                      color:C.black,textDecoration:"none",
                      lineHeight:1.4,
                    }}
                    onMouseOver={(e)=>{e.currentTarget.style.background=C.cream;e.currentTarget.style.color=C.rust}}
                    onMouseOut={(e)=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=C.black}}
                    >
                      <span style={{display:"block"}}>{a.l}</span>
                      <span style={{fontFamily:F.m,fontSize:10,color:C.grayLt}}>{a.cat}</span>
                    </a>
                  )}
                </div>
              </div>}
            </div>;
          }
          
          return <Link key={n.id} href={n.href} style={{fontFamily:F.b,fontSize:12.5,fontWeight:600,color:active?C.rust:C.gray,textDecoration:"none",padding:"6px 0",borderBottom:active?`2px solid ${C.rust}`:"2px solid transparent"}}>{n.l}</Link>;
        })}
      </nav>
    </div>
  </header>;
}
