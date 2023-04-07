import { Helmet, HelmetProvider } from 'react-helmet-async';

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

const PageNotFound = (): JSX.Element => {
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
      <div className="grid h-screen px-4  place-content-center">
        <h1 className="tracking-widest text-gray-100 uppercase text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:lg:text-9xl">
          404 | Not Found
        </h1>
        <div className="mt-6 text-center text-black ">
          <button
            type="button"
            className="px-10 py-2 bg-white hover:bg-zinc-200"
          >
            <a href="/"> Return </a>
          </button>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;
