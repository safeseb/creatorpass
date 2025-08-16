
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useI18n } from '../lib/i18n';

export default function Header(){
  const { pathname } = useRouter();
  const { lang, setLang } = useI18n();
  const is = (p)=> pathname===p ? 'active' : '';
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16}}>
        <Link className="brand" href="/">
          <Image src="/logo-wordmark.svg" alt="CreatorPass" width={170} height={26}/>
        </Link>
        <nav className="nav">
          <Link href="/influencer" className={is('/influencer')}>Influencer</Link>
          <Link href="/business" className={is('/business')}>Business</Link>
        </nav>
        <div className="lang">
          <button className="lng" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button>
          <button className="lng" aria-pressed={lang==='cs'} onClick={()=>setLang('cs')}>CS</button>
        </div>
      </div>
    </header>
  );
}
