"use client";
import { useState } from "react";
import Link from "next/link";
import { C, F, IMG } from "./shared";

export function Img({src,alt,style={},className}){return <img src={src} alt={alt} loading="lazy" className={className} style={{display:"block",width:"100%",height:"100%",objectFit:"cover",borderRadius:8,...style}}/>;}

export function Bc({items}){return <nav style={{padding:"12px 0",fontFamily:F.b,fontSize:12,color:C.grayLt}}>{items.map((i,n)=><span key={n}>{n>0&&<span style={{margin:"0 6px",opacity:.5}}>/</span>}{i.href?<Link href={i.href} style={{color:C.rust,textDecoration:"none"}}>{i.l}</Link>:<span style={{color:C.gray}}>{i.l}</span>}</span>)}</nav>;}

export function Sec({children,bg=C.white,pad="64px 0",id}){return <section id={id} style={{background:bg,padding:pad}}><div className="r-section-inner" style={{maxWidth:960,margin:"0 auto",padding:"0 28px"}}>{children}</div></section>;}

export function Eye({children}){return <p style={{fontFamily:F.b,fontSize:11,fontWeight:700,color:C.rust,textTransform:"uppercase",letterSpacing:"1.8px",margin:"0 0 10px"}}>{children}</p>;}

export function H1({children}){return <h1 className="r-h1" style={{fontFamily:F.h,fontSize:38,fontWeight:700,color:C.black,margin:"0 0 20px",lineHeight:1.18}}>{children}</h1>;}
export function H2({children,id}){return <h2 className="r-h2" id={id} style={{fontFamily:F.h,fontSize:28,fontWeight:700,color:C.black,margin:"0 0 16px",lineHeight:1.25}}>{children}</h2>;}
export function H3({children}){return <h3 style={{fontFamily:F.h,fontSize:20,fontWeight:700,color:C.black,margin:"0 0 10px",lineHeight:1.3}}>{children}</h3>;}

export function P({children,s={}}){return <p style={{fontFamily:F.b,fontSize:16,color:C.gray,lineHeight:1.75,margin:"0 0 16px",...s}}>{children}</p>;}

export function Btn({children,primary,onClick,href,target}){
  const style={padding:"12px 28px",borderRadius:5,border:"none",cursor:"pointer",fontFamily:F.b,fontSize:14,fontWeight:600,textDecoration:"none",display:"inline-block",textAlign:"center",...(primary?{background:C.rust,color:C.white}:{background:"transparent",color:C.rust,border:`1.5px solid ${C.rust}`})};
  if(href && (href.startsWith('http') || target)) return <a href={href} target={target} rel={target==="_blank"?"noopener noreferrer":undefined} style={style}>{children}</a>;
  if(href) return <Link href={href} style={style}>{children}</Link>;
  return <button onClick={onClick} style={style}>{children}</button>;
}

export function FAQ({q,a}){const[o,setO]=useState(false);return <div style={{borderBottom:`1px solid ${C.grayRule}`,padding:"16px 0"}}><div onClick={()=>setO(!o)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"}}><h3 style={{fontFamily:F.h,fontSize:18,fontWeight:700,color:C.black,margin:0,flex:1,lineHeight:1.35}}>{q}</h3><span style={{fontFamily:F.b,fontSize:18,color:C.rust,marginLeft:16,transition:"transform 0.2s",transform:o?"rotate(45deg)":"none"}}>+</span></div>{o&&<div style={{marginTop:12}}><P>{a}</P></div>}</div>;}

export function Stat({v,l,src}){return <div style={{background:C.white,borderRadius:8,padding:24,borderLeft:`4px solid ${C.rust}`,flex:1}}><div style={{fontFamily:F.h,fontSize:32,fontWeight:700,color:C.rust,marginBottom:6}}>{v}</div><div style={{fontFamily:F.b,fontSize:15,color:C.black,marginBottom:8,lineHeight:1.4}}>{l}</div><div style={{fontFamily:F.m,fontSize:10,color:C.grayLt}}>Source: {src}</div></div>;}
