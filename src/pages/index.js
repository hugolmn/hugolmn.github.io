import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ContactButtons from '../components/ContactButtons';

import AboutMe from './_about-me.md'
import Experiences from './_experiences.md'
import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero', styles.heroBanner)}>
//       <div className="container">
//         <img
//           class="avatar__photo avatar__photo--xxl margin-bottom--lg"
//           style={{margin: "0 auto" }}
//           src="https://github.com/hugolmn.png" />
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div clasName="col col--6">{<AboutMe />}</div>
//         <ContactButtons />
//       </div>
//     </header>
//   );
// }


function Avatar() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx(styles.homeSection)}>
      <div class="avatar">
        <img
          class="avatar__photo avatar__photo--xl"
          src="https://github.com/hugolmn.png" />
        <div class="avatar__intro">
          <div class="avatar__name">{siteConfig.title}</div>
          <small class="avatar__subtitle">Data Scientist at MSD France</small>
        </div>
      </div>
      </div>
  )
}

function About() {
  return (
    <div className={clsx(styles.homeSection)}>
      <AboutMe />
    </div>
  )
}

function Experience() {
  return (
    <div className={clsx(styles.homeSection)}>
      <Experiences />
    </div>
  )
}

function Contact() {
  return (
    <div className={clsx(styles.homeSection)}>
      <h2>Connect with me</h2>
      <ContactButtons />
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description={siteConfig.description}>
      <main className={clsx(styles.homeMain)}>
        <div>
          <Avatar />
          <About />
          <Experience />
          <Contact />
        </div>
      </main>
    </Layout>
  );
}
