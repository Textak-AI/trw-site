#!/usr/bin/env python3
"""Swap Jesse memorial card to collapsed accordion using <details>/<summary>"""

path = 'app/components/pages.jsx'
with open(path, 'r') as f:
    content = f.read()

old = """      {/* ── MAR 11, 2026 — Jesse Chalich Memorial ── */}
      <div style={{background:C.white,borderRadius:10,padding:28,borderLeft:`4px solid ${C.rust}`}}>
        <p style={{fontFamily:F.b,fontSize:10,color:"#34495E",textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>In Memoriam — MAR 11, 2026</p>
        <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 4px"}}>Jesse James Chalich</h3>
        <p style={{fontFamily:F.b,fontSize:14,color:C.rust,margin:"0 0 4px",fontWeight:600}}>President & COO, Northern Plains Railroad & Northern Plains Rail Services</p>
        <p style={{fontFamily:F.b,fontSize:13,color:C.grayLt,margin:"0 0 16px"}}>September 21, 1976 — March 11, 2026</p>
        <P>Jesse James Chalich, 49, passed away unexpectedly on March 11, 2026. A 4th generation railroader, Jesse"""

new = """      {/* ── MAR 11, 2026 — Jesse Chalich Memorial ── */}
      <details style={{background:C.white,borderRadius:10,borderLeft:`4px solid ${C.rust}`}}>
        <summary style={{padding:"24px 28px",cursor:"pointer",listStyle:"none"}}>
          <p style={{fontFamily:F.b,fontSize:10,color:"#34495E",textTransform:"uppercase",letterSpacing:"1.2px",margin:"0 0 8px"}}>In Memoriam — MAR 11, 2026</p>
          <h3 style={{fontFamily:F.h,fontSize:22,color:C.black,margin:"0 0 4px"}}>Jesse James Chalich</h3>
          <p style={{fontFamily:F.b,fontSize:14,color:C.rust,margin:"0 0 4px",fontWeight:600}}>President & COO, Northern Plains Railroad & Northern Plains Rail Services</p>
          <p style={{fontFamily:F.b,fontSize:13,color:C.grayLt,margin:"0 0 4px"}}>September 21, 1976 — March 11, 2026</p>
          <p style={{fontFamily:F.b,fontSize:13,color:C.rust,margin:0}}>Read tribute ▾</p>
        </summary>
        <div style={{padding:"0 28px 28px"}}>
        <P>Jesse James Chalich, 49, passed away unexpectedly on March 11, 2026. A 4th generation railroader, Jesse"""

if old in content:
    content = content.replace(old, new)
else:
    print("ERROR: Could not find the old Jesse card opening. No changes made.")
    exit(1)

old_close = """        <P s={{margin:0,fontStyle:"italic",color:C.black}}>Jesse leaves behind a legacy that will continue far beyond the horizon. He is survived by his wife Julie, their four children — Jaden, Morgan, Ethan, and Maggie — and grandson Beckett.</P>
      </div>"""

new_close = """        <P s={{margin:0,fontStyle:"italic",color:C.black}}>Jesse leaves behind a legacy that will continue far beyond the horizon. He is survived by his wife Julie, their four children — Jaden, Morgan, Ethan, and Maggie — and grandson Beckett.</P>
        </div>
      </details>"""

if old_close in content:
    content = content.replace(old_close, new_close)
else:
    print("ERROR: Could not find the Jesse card closing. No changes made.")
    exit(1)

with open(path, 'w') as f:
    f.write(content)

print("SUCCESS: Jesse card converted to accordion.")
