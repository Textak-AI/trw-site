// Shared constants for The Rail Way site
const U = "https://raw.githubusercontent.com/Textak-AI/trw-assets/main/";

export const IMG = {
  logo: U+"brand/rail-way-logo.png",
  logoWhite: U+"brand/rail-way-logo-white.png",
  paulineHeadshot: U+"team/pauline-headshot.jpg",
  paulineAlt: U+"team/pauline-alt.jpg",
  paulineSpeaking: U+"team/pauline-speaking.jpg",
  brenda: U+"team/brenda-huizinga.jpg",
  michael: U+"team/michael-powell.jpg",
  rachel: U+"team/rachel-bolton.jpg",
  safetyCulture: U+"operations/safety-culture.jpg",
  railwayTraining: U+"operations/railway-training.jpg",
  freightTrain: U+"articles/freight-train.jpg",
  teamTraining: U+"operations/team-training.jpg",
  railwayAge: U+"homepage/railway-age-sidebar.jpg",
  yardTraining: U+"operations/yard-training.jpg",
  fieldLeadership: U+"articles/field-leadership.jpg",
  roadAhead: U+"articles/road-ahead.jpg",
  leaderTalking: U+"articles/leader-talking.jpg",
  coachingCaboose: U+"articles/leading-from-the-caboose.jpg",
};

export const C = {rust:"#C4622D",brown:"#3D2B1F",black:"#2C2C2C",blackDeep:"#1A1A1A",gray:"#666",grayLt:"#999",grayRule:"#E0E0E0",cream:"#FAF7F4",white:"#FFF",navy:"#2C3E50",tint:"rgba(196,98,45,0.08)"};
export const F = {h:"Georgia,'Palatino Linotype',serif",b:"'Segoe UI',Arial,sans-serif",m:"'SF Mono',Consolas,monospace"};

export const NAV = [
  {id:"home",l:"Home",href:"/"},
  {id:"speakup",l:"Speak Up Culture",href:"/speak-up-culture"},
  {id:"process",l:"Our Process",href:"/our-process"},
  {id:"classii",l:"Class II & III",href:"/class-ii-iii"},
  {id:"insights",l:"Insights",href:"/insights"},
  {id:"about",l:"About",href:"/about"},
  {id:"legacies",l:"Legacies",href:"/legacies"},
  {id:"events",l:"Events",href:"/events"},{id:"contact",l:"Contact",href:"/contact"},
];

export const PAGES = {
  home:{title:"Railroad Safety Culture Transformation | The Rail Way™",desc:"The Rail Way™ transforms railroad safety culture from the boardroom to the ballast line. Speak Up Culture programs for Class II & III railroads.",h1:"Railroad Safety Culture Transformation for the Rail Industry",bc:[{l:"Home"}],schema:"Organization, ProfessionalService"},
  speakup:{title:"Speak Up Culture for Railroads | The Rail Way™",desc:"Build a Speak Up Culture where safety concerns don't wait for an accident. Proven approach for railroad crews.",h1:"What Is Speak Up Culture — and Why Railroads Need It Now",bc:[{l:"Home",href:"/"},{l:"Speak Up Culture"}],schema:"Service, FAQPage"},
  process:{title:"Our Proven Process — Safety Culture Transformation | The Rail Way™",desc:"Four-stage leadership cycle: Heighten Awareness → Increase Clarity → Build Alignment → Drive Momentum.",h1:"How Safety Culture Transformation Works",bc:[{l:"Home",href:"/"},{l:"Our Process"}],schema:"Service, HowTo"},
  about:{title:"About Pauline Lipkewich — Railroad Safety Leader | The Rail Way™",desc:"14+ years in North American rail, 7x revenue growth at Rocky Mountaineer, Contributing Editor at Railway Age.",h1:"About Pauline Lipkewich — Founder, The Rail Way™",bc:[{l:"Home",href:"/"},{l:"About"}],schema:"Person, ProfilePage"},
  insights:{title:"Rail Industry Insights | The Rail Way™",desc:"Expert perspectives on rail leadership, safety culture, and operational excellence.",h1:"Industry Insights — Rail Safety Culture & Leadership",bc:[{l:"Home",href:"/"},{l:"Insights"}],schema:"CollectionPage"},
  classii:{title:"Class II & III Railroad Safety Culture Optimization | The Rail Way™",desc:"Right-sized safety culture transformation for regional and short-line railroads.",h1:"Safety Culture Optimization for Class II & III Railroads",bc:[{l:"Home",href:"/"},{l:"Class II & III"}],schema:"Service"},
  events:{title:"Upcoming Events | The Rail Way\u2122",desc:"Where to see Pauline Lipkewich speak on safety culture, Speak Up Culture, and railroad leadership transformation.",h1:"Upcoming Events",bc:[{l:"Home",href:"/"},{l:"Events"}],schema:"CollectionPage"},
  contact:{title:"Schedule a Consultation | The Rail Way™",desc:"Confidential consultation about your railroad's safety culture transformation.",h1:"Start a Conversation About Your Safety Culture",bc:[{l:"Home",href:"/"},{l:"Contact"}],schema:"ContactPage"},
  legacies:{title:"Legacies — Honoring Rail Industry Leaders | The Rail Way™",desc:"Memorials, tributes, and leadership updates from across the North American rail industry.",h1:"Legacies — Honoring Those Who Built the Rail Industry",bc:[{l:"Home",href:"/"},{l:"Legacies"}],schema:"CollectionPage"},
};
