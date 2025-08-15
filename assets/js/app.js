
// Router & active nav
const views=["home","influencer","business","guidelines"];
function show(v){
  views.forEach(x=>{
    const el=document.getElementById(`view-${x}`);
    if(el) el.hidden=(x!==v);
    const link=document.getElementById(`link-${x}`);
    if(link) link.classList.toggle("active", x===v);
  });
}
function router(){
  const hash=(location.hash||"#home").replace("#","");
  if(hash==="business-faq"){ show("business"); setTimeout(()=>document.getElementById("business-faq")?.scrollIntoView({behavior:"smooth"}),30); return; }
  show(views.includes(hash)?hash:"home");
}
addEventListener("hashchange",router); addEventListener("DOMContentLoaded",router);

// Brand marquee
const brands=[
 {name:"Mlýnec",href:"https://www.mlynec.cz",logo:"assets/img/brand-Mlynec.svg"},
 {name:"ESKA",href:"https://eska.ambi.cz",logo:"assets/img/brand-ESKA.svg"},
 {name:"Manifesto",href:"https://www.manifestomarket.com",logo:"assets/img/brand-Manifesto.svg"},
 {name:"La Collezione",href:"https://www.lacollezione.cz/en",logo:"assets/img/brand-LaCollezione.svg"},
 {name:"Café Savoy",href:"https://cafesavoy.ambi.cz",logo:"assets/img/brand-CafeSavoy.svg"},
];
function buildBrand(){
  const el=document.getElementById("brandMarquee"); if(!el) return;
  const all=brands.concat(brands);
  el.innerHTML=all.map(b=>`<a class="chip" href="${b.href}" target="_blank" rel="noreferrer"><span class="chipLogo"><img src="${b.logo}" alt="${b.name}"></span><span class="chipLabel">${b.name}</span></a>`).join("");
}
addEventListener("DOMContentLoaded",buildBrand);

// Pricing
const plans=[
 {name:"1 post",sub:"Free trial",price:"€0"},
 {name:"5 posts/month",sub:"For growing brands",price:"€99"},
 {name:"10 posts/month",sub:"Most Popular",price:"€169",hl:true},
 {name:"25 posts/month",sub:"Scale your exposure",price:"€299"},
];
addEventListener("DOMContentLoaded",()=>{
  const grid=document.getElementById("pricing"); if(!grid) return;
  grid.innerHTML=plans.map(p=>`<div class="plan ${p.hl?'hl':''}">
    <div class="faint">${p.sub}</div>
    <div class="strong">${p.name}</div>
    <div class="price">${p.price}</div>
    <button class="choose" onclick="openApply()">Choose</button>
  </div>`).join("");
});

// FAQs
const faqInf=[
 {q:"Do I need a certain number of followers to join?",a:"CreatorPass is invite-only, but we welcome influencers of all sizes as long as your content quality is high and engagement is genuine."},
 {q:"Can I join if I’m not a professional influencer?",a:"Yes. Many members are creators and enthusiasts who love sharing experiences."},
 {q:"Do I have to post for redeemed offers?",a:"Yes. Each accepted offer includes clear posting requirements to follow."},
 {q:"Is joining free?",a:"Yes. Free for influencers — invite only."},
 {q:"How long does acceptance take?",a:"We review invite applications within 72 hours."},
];
const faqBiz=[
 {q:"What is CreatorPass?",a:"CreatorPass connects your business with verified influencers who create authentic content in exchange for your goods or services."},
 {q:"What content can I expect?",a:"Organic-looking posts, stories, and videos that showcase your business in a natural, engaging way."},
 {q:"How do I get started?",a:"Apply for free, post your first offer, and start receiving content in days."},
 {q:"Is it free to join?",a:"Yes — start with one free post. Paid plans unlock more posts per month."},
 {q:"What if creators don’t deliver?",a:"Creators must meet posting requirements to redeem future offers; we monitor compliance."},
];
function renderFaq(list, mountId){
  const m=document.getElementById(mountId); if(!m) return;
  m.innerHTML=list.map(it=>`<div class="faq-item">
    <button class="faq-h" aria-expanded="false" onclick="toggleFaq(this)">
      <span class="faq-q">${it.q}</span>
      <svg class="chev" width="18" height="18" viewBox="0 0 20 20"><path d="M5 8l5 5 5-5H5z" fill="currentColor"/></svg>
    </button>
    <div class="faq-b" hidden>${it.a}</div>
  </div>`).join("");
}
function toggleFaq(btn){
  const body=btn.parentElement.querySelector(".faq-b"); const chev=btn.querySelector(".chev");
  const open=body.hasAttribute("hidden");
  document.querySelectorAll(".faq-b").forEach(b=>b.setAttribute("hidden",""));
  document.querySelectorAll(".faq-h .chev").forEach(c=>c.style.transform="none");
  if(open){ body.removeAttribute("hidden"); chev.style.transform="rotate(180deg)"; btn.setAttribute("aria-expanded","true"); } else { body.setAttribute("hidden",""); btn.setAttribute("aria-expanded","false"); }
}
addEventListener("DOMContentLoaded",()=>{ renderFaq(faqInf,"faqInf"); renderFaq(faqBiz,"faqBiz"); });

// Apply modal + webhook
const WEBHOOK="https://hook.eu2.make.com/q4j93031gs3xjqgscwbidrljl75yf63d";
function openApply(){ document.getElementById("applyModal")?.showModal(); }
function closeApply(){ document.getElementById("applyModal")?.close(); }
window.openApply=openApply; window.closeApply=closeApply;

addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("applyForm"); if(!form) return;
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const note=document.getElementById("applyNote"); const btn=document.getElementById("applySubmit");
    btn.disabled=true; note.hidden=false; note.textContent="Submitting…";
    const data=Object.fromEntries(new FormData(form));
    let website=(data.website||"").trim();
    if(website && !/^https?:\/\//i.test(website)){ website="https://"+website; }
    try{
      const res=await fetch(WEBHOOK,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        companyName:data.companyName||"", firstName:data.firstName||"", surname:data.surname||"",
        website, instagram:data.instagram||"", businessType:data.businessType||"",
        role:data.role||"", email:data.email||"", phone:data.phone||"", message:data.message||"",
        source:"creatorpass.io", timestamp:new Date().toISOString()
      })});
      if(!res.ok) throw new Error("Webhook status "+res.status);
      note.textContent="Thank you for applying — our team will get back to you soon.";
      setTimeout(()=>{ closeApply(); form.reset(); btn.disabled=false; note.hidden=true; }, 1400);
    }catch(err){
      console.error(err);
      note.textContent="Something went wrong. Please try again.";
      btn.disabled=false;
    }
  });
});
