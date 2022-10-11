import { initialize as initReviewsApp } from '@comp/reviews';
import Container from '@comp/container';
import Layout from 'src/layout';
import { getClient } from 'src/lib/sanity';
import { useState, useEffect } from 'react';
import { configQuery } from 'src/lib/groq';

initReviewsApp('N55S1');

export default function Contact({ siteconfig }) {
  
  return (
    <Layout {...siteconfig}>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Test Page
        </h1>
        <div className="text-center">
          <p className="text-lg">We are a here to test.</p>
        </div>
      </Container>
      <Container>
        <div id="reviews-app" />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const config = await getClient(preview).fetch(configQuery);

  return {
    props: {
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
