"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C, F, IMG, NAV } from "./shared";

export default function Header(){
  const pathname = usePathname();
  return <header style={{background:C.white,borderBottom:`1px solid ${C.grayRule}`,position:"sticky",top:0,zIndex:100}}>
    <div className="r-header" style={{maxWidth:960,margin:"0 auto",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56}}>
      <Link href="/"><img src={IMG.logo} alt="The Rail Way™" style={{height:36}}/></Link>
      <nav className="r-nav" style={{display:"flex",gap:16}}>
        {NAV.map(n=>{
          const active = (n.href==="/" && pathname==="/") || (n.href!=="/" && pathname===n.href);
          return <Link key={n.id} href={n.href} style={{fontFamily:F.b,fontSize:12.5,fontWeight:600,color:active?C.rust:C.gray,textDecoration:"none",padding:"6px 0",borderBottom:active?`2px solid ${C.rust}`:"2px solid transparent"}}>{n.l}</Link>;
        })}
      </nav>
    </div>
  </header>;
}
