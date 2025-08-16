
import Image from 'next/image';
const brands=[
  {n:'Mlýnec',url:'https://www.mlynec.cz',logo:'/brands/mlynec.svg'},
  {n:'ESKA',url:'https://eska.ambi.cz',logo:'/brands/eska.svg'},
  {n:'Manifesto',url:'https://www.manifestomarket.com',logo:'/brands/manifesto.svg'},
  {n:'La Collezione',url:'https://www.lacollezione.cz/en',logo:'/brands/lacollezione.svg'},
  {n:'Café Savoy',url:'https://cafesavoy.ambi.cz',logo:'/brands/cafesavoy.svg'},
];
export default function ThinBrandRow(){
  const row=[...brands,...brands];
  return (<div className="thinRow"><div className="track">{row.map((b,i)=>(
    <a className="chip" key={i} href={b.url} target="_blank" rel="noreferrer">
      <span className="chipLogo"><Image src={b.logo} alt={b.n} width={34} height={34}/></span>
      <span className="chipLabel">{b.n}</span>
    </a>
  ))}</div></div>);
}
