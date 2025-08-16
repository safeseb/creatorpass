
import Image from 'next/image';
export default function HowItWorks({steps}){
  return (
    <div className="grid2">
      {steps.map((s,i)=>(
        <div className="bento" key={i}>
          <div><h3 style={{margin:'0 0 6px',fontWeight:800}}>{s.title}</h3><p style={{margin:0,color:'#64748b'}}>{s.desc}</p></div>
          <Image src={s.img} alt={s.title} width={360} height={360}/>
        </div>
      ))}
    </div>
  );
}
