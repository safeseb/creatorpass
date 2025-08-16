
import Link from 'next/link'; import Image from 'next/image'; import { useRouter } from 'next/router';
export default function Footer(){
  const { pathname } = useRouter();
  const is = (p)=> pathname===p ? 'active' : '';
  return (<footer className="footer">
    <div className="row">
      <Link className="brand" href="/"><Image src="/logo-wordmark.svg" alt="CreatorPass" width={170} height={24}/></Link>
      <nav style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
        <Link href="/influencer" className={is('/influencer')}>Influencer</Link>
        <Link href="/business" className={is('/business')}>Business</Link>
        <Link href="/guidelines#faq">FAQ</Link>
        <Link href="/guidelines">Guidelines</Link>
        <a className="badge" href="mailto:hello@creatorpass.io?subject=reach%20out%20from%20website"><Image src="/icons/mail.svg" alt="" width={16} height={16}/>Contact</a>
        <a className="badge" target="_blank" rel="noreferrer" href="https://instagram.com/getcreatorpass"><Image src="/icons/ig.svg" alt="" width={16} height={16}/>@getcreatorpass</a>
        <a className="badge" target="_blank" rel="noreferrer" href="https://www.tiktok.com/@getcreatorpass"><Image src="/icons/tt.svg" alt="" width={16} height={16}/>@getcreatorpass</a>
      </nav>
    </div>
    <div className="legal">© {new Date().getFullYear()} CreatorPass OÜ • <Link href="/policies/privacy">Privacy</Link> • <Link href="/policies/terms">Terms</Link></div>
  </footer>);
}
