import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="I'm a Senior Data Scientist at MSD and UTC alumni. Also working on side-projects related to Python, Data Science and Machine Learning.">
      <main>
        <div className="container">
          <div className='row'>
            <p class="text-center">
              <h1><strong>About Me</strong></h1>
            </p>
          </div>
          <div className='row'>
            <p class="text-center">
              Hi! I'm Hugo Le Moine.<br/>
              I'm a Data Scientist and also coding side-projects using Python.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
