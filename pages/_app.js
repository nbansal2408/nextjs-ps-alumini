import Head from 'next/head';

import './style.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderSection } from './header-section';
import MainContent from './main-content';
import { sampleAPi } from '../app/apis/sampleApi';

export default function MyApp() {
  console.log('MyApppp');

  useEffect(() => {
    const data = {'hi':'hj'};
    console.log("Use effect called");
    console.log("data", sampleAPi(data));
})
  return (
    <div>
      <Head>
        <title>PS Alumni</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeaderSection />
      <MainContent />
      {/* <MyApiTest /> */}
    </div>
  )
}