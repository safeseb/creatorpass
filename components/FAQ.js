
import { useState } from 'react';
export default function FAQ({items=[]}){
  const [open,setOpen]=useState(null);
  return (
    <div className="faq">
      {items.map((it,idx)=>{
        const isOpen = open===idx;
        return (
          <div key={idx} className="faqItem">
            <button className="faqHead" aria-expanded={isOpen} onClick={()=>setOpen(isOpen?null:idx)}>
              <span className="faqQ">{it.q}</span>
              <svg className="chev" width="18" height="18" viewBox="0 0 20 20" style={{transform:isOpen?'rotate(180deg)':'none'}}><path d="M5 8l5 5 5-5H5z" fill="currentColor"/></svg>
            </button>
            {isOpen && <div className="faqBody">{it.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
