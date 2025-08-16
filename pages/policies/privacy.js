import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>CreatorPass — Privacy Policy</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Header />

      <main className="container">
        <h1 className="h1">Privacy Policy</h1>
        <p className="sub">Effective {new Date().toISOString().slice(0, 10)}</p>

        <p>
          This Privacy Policy explains how CreatorPass OÜ (“CreatorPass”, “we”, “us”)
          collects, uses, and shares information when you use our website and services.
        </p>

        <h2 className="h2">Information we collect</h2>
        <ul>
          <li>Account and contact details</li>
          <li>Business details</li>
          <li>Usage information (device, logs, and interactions)</li>
        </ul>

        <h2 className="h2">How we use information</h2>
        <ul>
          <li>Provide and improve the service</li>
          <li>Process applications and support</li>
          <li>Security, prevention of abuse, and compliance</li>
        </ul>

        <h2 className="h2">Your rights</h2>
        <p>
          To exercise your data rights or ask questions, contact us at{' '}
          <a href="mailto:hello@creatorpass.io">hello@creatorpass.io</a>.
        </p>
      </main>

      <Footer />
    </>
  );
}
