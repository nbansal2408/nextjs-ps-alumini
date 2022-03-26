import Head from 'next/head';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderSection } from './header-section';
import MainContent from './main-content';

export default function MyApp() {
  console.log('MyApppp');
  return (
    <div>
      <Head>
        <title>PS Alumni</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeaderSection />
      <MainContent />
    </div>
  )
}