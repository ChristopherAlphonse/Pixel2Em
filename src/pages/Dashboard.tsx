import { Helmet, HelmetProvider } from 'react-helmet-async';

import Footer from '../components/Footer';
import Form from '../components/Form';
import data from '../data';

interface Meta {
  name?: string;
  property?: string;
  content: string;
}
interface MetaTags {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogUrl: string;
  ogSiteName: string;
  ogImage: string;
  metaTags: Meta[];
}

const Dashboard = () => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogType,
    ogUrl,
    ogImage
  } = data;
  const { metaTags } = data as MetaTags;
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(',')} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:description" content={ogDescription} />
        {metaTags.map((tag) => (
          <meta key={tag.name} name={tag.name} content={tag.content} />
        ))}
      </Helmet>
      <div>
        <Form />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Dashboard;
