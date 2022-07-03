import Head from 'next/head'

const Meta = ({ title, keywords, description, siteTitle }) => {
  return (
    <Head>
          <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://nippon.dev"
              },
              "headline": "Jamstack website development and optimization",
              "description": "Nippon Edge is the private portfolio site for Kevin Miller Matsunaga.",
              "image": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/shinkirin/image/upload/v1649682760/kevin-matsunaga/socialog.png",
                "width": "1200px",
                "height": "630px"
              },
              "author": {
                "@type": "Person",
                "url": "https://kevinmatsunaga.com",
                "name": "Kevin Matsunaga"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Nippon Edge",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://res.cloudinary.com/shinkirin/image/upload/v1649666443/kevin-matsunaga/nipponedge-logo.svg",
                  "width": "",
                  "height": "140"
                }
              },
              "datePublished": "2021-11-07",
              "dateModified": "2022-03-7"
            })
          }}
          />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://res.cloudinary.com/shinkirin/image/upload/v1649682760/kevin-matsunaga/socialog.png" />
      <meta property="twitter:domain" content="nippon.dev" />
      <meta property="twitter:url" content="https://nippon.dev" />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:url" content="https://nippon.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://res.cloudinary.com/shinkirin/image/upload/v1649682760/kevin-matsunaga/socialog.png" />
      <meta property="og:image:url" content="https://res.cloudinary.com/shinkirin/image/upload/v1649682760/kevin-matsunaga/socialog.png" />
      <meta property="og:description" content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-chrome-512x512.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{`${title} | ${siteTitle}`}</title>
    </Head>
  )
}

export default Meta