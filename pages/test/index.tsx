import Layout from '@/layout';
import { useRouter } from 'next/router';
import { getClient, usePreviewSubscription } from '@/lib/sanity';
import defaultOG from 'public/img/opengraph.jpg';
import { postquery, configQuery } from '@/lib/groq';
import GetImage from '@/utils/getImage';
import { HeroSection, ProductCardSection } from './sections';

export default function Post(props) {
  const { postdata, siteconfig, preview } = props;

  const router = useRouter();
  //console.log(router.query.category);

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });
  //console.log(posts);
  const siteImg = GetImage(siteConfig?.openGraphImage) || { src: null };
  const ogimage = siteImg.src || defaultOG.src;

  return (
    <>
      {posts && siteConfig && (
        <Layout {...siteConfig}>
          <HeroSection  />
          <ProductCardSection />
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postquery);
  const config = await getClient(preview).fetch(configQuery);

  // const categories = (await client.fetch(catquery)) || null;

  return {
    props: {
      postdata: post,
      // categories: categories,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
