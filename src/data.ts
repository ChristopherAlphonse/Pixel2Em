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
  title: 'Pixel2Em',
  description:
    "Pixel2Em is a web design technique that uses pixels as the base measurement unit for defining font sizes and layout elements. By converting pixel values to ems, the design becomes more responsive and works well across different devices and screen sizes. It's a popular technique among web designers for creating flexible and optimized designs.",
  keywords: [
    'Pixel2Em',
    'web design technique',
    'pixels',
    'px2em',
    'pxtoem',
    'pixeltoem',
    'ems',
    'responsive design',
    'flexible design',
    'optimized design',
    'web designers',
    'measurement unit'
  ],
  author: 'Christopher Alphonse',
  ogTitle: 'Pixel2Em',
  ogDescription:
    "Pixel2Em is a web design technique that uses pixels as the base measurement unit for defining font sizes and layout elements. By converting pixel values to ems, the design becomes more responsive and works well across different devices and screen sizes. It's a popular technique among web designers for creating flexible and optimized designs.",
  ogType: 'website',
  ogUrl: 'https://css-converter.vercel.app/',
  ogSiteName: 'Pixel2Em',
  ogImage: '/src/assets/icon.png',
  metaTags: [
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Pixel2Em'
    },
    {
      property: 'og:description',
      content:
        "Pixel2Em is a web design technique that uses pixels as the base measurement unit for defining font sizes and layout elements. By converting pixel values to ems, the design becomes more responsive and works well across different devices and screen sizes. It's a popular technique among web designers for creating flexible and optimized designs."
    },
    {
      property: 'og:image',
      content: '/src/assets/icon.png'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Pixel2Em'
    },
    {
      name: 'twitter:description',
      content:
        "Pixel2Em is a web design technique that uses pixels as the base measurement unit for defining font sizes and layout elements. By converting pixel values to ems, the design becomes more responsive and works well across different devices and screen sizes. It's a popular technique among web designers for creating flexible and optimized designs."
    }
  ]
};

export default data;
