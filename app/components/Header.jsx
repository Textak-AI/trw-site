"use client";
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

  return <>
    <style>{`
      .trw-dropdown{position:relative;display:flex;align-items:center;padding:14px 0}
      .trw-dropdown-menu{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:0;z-index:200}
      .trw-dropdown:hover .trw-dropdown-menu{display:block}
      .trw-dropdown-panel{background:#fff;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid #E0E0E0;padding:12px 0;min-width:260px}
      .trw-dropdown-panel .dd-head{display:block;padding:8px 20px;font-size:12px;font-weight:700;color:#C4622D;text-decoration:none;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #E0E0E0;margin-bottom:4px}
      .trw-dropdown-panel .dd-head:hover{background:#FAF7F4}
      .trw-dropdown-panel .dd-item{display:block;padding:7px 20px;font-size:13px;color:#2C2C2C;text-decoration:none;line-height:1.4}
      .trw-dropdown-panel .dd-item:hover{background:#FAF7F4;color:#C4622D}
      .trw-dropdown-panel .dd-cat{display:block;font-family:'SF Mono',Consolas,monospace;font-size:10px;color:#999}
    `}</style>
    <header style={{background:C.white,borderBottom:`1px solid ${C.grayRule}`,position:"sticky",top:0,zIndex:100}}>
      <div className="r-header" style={{maxWidth:960,margin:"0 auto",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56}}>
        <Link href="/"><img src={IMG.logo} alt="The Rail Way™" style={{height:44}}/></Link>
        <nav className="r-nav" style={{display:"flex",gap:16,alignItems:"center",height:"100%"}}>
          {NAV.map(n=>{
            const active = (n.href==="/" && pathname==="/") || (n.href!=="/" && pathname.startsWith(n.href));
            const linkStyle = {fontFamily:F.b,fontSize:12.5,fontWeight:600,color:active?C.rust:C.gray,textDecoration:"none",padding:"6px 0",borderBottom:active?`2px solid ${C.rust}`:"2px solid transparent"};

            if (n.id === "insights") {
              return <div key={n.id} className="trw-dropdown">
                <Link href={n.href} style={linkStyle}>
                  {n.l} <span style={{fontSize:10,opacity:0.5}}>&#9662;</span>
                </Link>
                <div className="trw-dropdown-menu">
                  <div className="trw-dropdown-panel" style={{fontFamily:F.b}}>
                    <Link href="/insights" className="dd-head">All Insights</Link>
                    {INSIGHT_LINKS.map(a=>
                      <a key={a.href} href={a.href} className="dd-item">
                        <span style={{display:"block"}}>{a.l}</span>
                        <span className="dd-cat">{a.cat}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>;
            }

            return <Link key={n.id} href={n.href} style={linkStyle}>{n.l}</Link>;
          })}
        </nav>
      </div>
    </header>
  </>;
}
