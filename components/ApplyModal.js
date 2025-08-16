
import { useState } from 'react';
const WEBHOOK = "https://hook.eu2.make.com/q4j93031gs3xjqgscwbidrljl75yf63d";
export default function ApplyModal({open,onClose}){
  const [busy,setBusy]=useState(false); const [note,setNote]=useState("");
  async function onSubmit(e){
    e.preventDefault(); setBusy(true); setNote("Submitting…");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    let website = (data.website||"").trim();
    if(website && !/^https?:\/\//i.test(website)) website = "https://" + website;
    try{
      const res = await fetch(WEBHOOK,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...data,website,source:"creatorpass.io",timestamp:new Date().toISOString()})});
      if(!res.ok) throw new Error("status "+res.status);
      setNote("Thank you for applying, our team will get back to you soon.");
      setTimeout(()=>{ setNote(""); setBusy(false); onClose&&onClose(); },1400);
    }catch(err){ console.error(err); setNote("Something went wrong. Please try again."); setBusy(false); }
  }
  if(!open) return null;
  return (
    <div className="modalBackdrop" onClick={(e)=>{ if(e.target===e.currentTarget) onClose&&onClose(); }}>
      <form className="modal" onSubmit={onSubmit}>
        <div className="modalHead"><h3 style={{margin:0}}>Apply to CreatorPass</h3><button type="button" className="x" onClick={onClose}>×</button></div>
        <div className="formGrid">
          <label className="inp req"><span>Company Name</span><input name="companyName" required/></label>
          <label className="inp req"><span>Website</span><input name="website" placeholder="example.com" required/></label>
          <label className="inp req"><span>First Name</span><input name="firstName" required/></label>
          <label className="inp req"><span>Surname</span><input name="surname" required/></label>
          <label className="inp"><span>Instagram</span><input name="instagram" placeholder="@yourhandle"/></label>
          <label className="inp"><span>Role</span><input name="role"/></label>
          <label className="inp req"><span>Email</span><input name="email" type="email" placeholder="you@company.com" required/></label>
          <label className="inp"><span>Phone Number</span><input name="phone"/></label>
          <label className="inp req"><span>Business Type</span>
            <select name="businessType" required defaultValue="">
              <option value="">Select...</option>
              <option>Food & Drink</option><option>Arts & Entertainment</option>
              <option>Shopping & Retail</option><option>Health & Fitness</option>
              <option>Beauty & Personal Care</option><option>Events & Experiences</option>
              <option>E-commerce</option><option>Other</option>
            </select>
          </label>
          <label className="inp" style={{gridColumn:'span 2'}}><span>Message</span><textarea name="message" rows={3} placeholder="Tell us about your goals"/></label>
        </div>
        <div className="modalFoot"><button className="btn" type="submit" disabled={busy}>Submit</button></div>
        {note && <p className="sub" style={{padding:'0 16px 16px'}}>{note}</p>}
      </form>
    </div>
  );
}
