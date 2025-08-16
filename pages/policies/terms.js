import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <>
      <Head>
        <title>CreatorPass — Terms of Service</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Header />

      <main className="container">
        <h1 className="h1">Terms of Service</h1>
        <p className="sub">Effective {new Date().toISOString().slice(0, 10)}</p>

        <p>
          By using CreatorPass you agree to these Terms. You must be at least 18 years old.
          Businesses agree to provide listed goods/services; creators agree to the posting
          requirements on accepted offers. Misuse, fraud, or unlawful activity is prohibited.
        </p>

        <h2 className="h2">Key points</h2>
        <ul>
          <li>We may update these Terms from time to time</li>
          <li>Some features may be subject to separate rules or guidelines</li>
          <li>Either party may terminate for breach or misuse</li>
        </ul>

        <p>
          Questions? Contact{' '}
          <a href="mailto:hello@creatorpass.io">hello@creatorpass.io</a>.
        </p>
      </main>

      <Footer />
    </>
  );
}
