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

const data: MetaTags = {
  title: 'My Website',
  description: 'This is my website',
  keywords: ['website', 'example'],
  author: 'John Doe',
  ogTitle: 'My Website',
  ogDescription: 'This is my website',
  ogType: 'website',
  ogUrl: 'https://www.mywebsite.com',
  ogSiteName: 'My Website',
  ogImage: 'https://www.mywebsite.com/images/my-image.jpg',
  metaTags: [
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'My Website',
    },
    {
      property: 'og:description',
      content: 'This is my website',
    },
    {
      property: 'og:image',
      content: 'https://www.mywebsite.com/images/my-image.jpg',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'My Website',
    },
    {
      name: 'twitter:description',
      content: 'This is my website',
    },
  ],
};

export default data;
