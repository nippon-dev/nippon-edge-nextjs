import Meta from '../components/Meta'
import { Disclosure } from '@headlessui/react'

Meta.defaultProps = {
  siteTitle: 'Nippon Edge',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, sveltekit, cloudflare, cloudinary, github, graphcms',
  description: 'The team at Nippon Edge can help design and deploy a new website for your business. We will develop your new site using Jamstack.',
}

export default function Index() {
  return (
    <Disclosure as="content">
      { (
        <>
{/** Start of Header Section */}
<div className="relative bg-swhite mb-4 sm:mb-12">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/shinkirin/image/upload/v1649670690/kevin-matsunaga/node.webp"
          alt="Watery node photo"
        />
        <div className="absolute inset-0 bg-sred mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-swhite sm:text-5xl lg:text-6xl">Nippon Edge</h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
        We build fast, secure, reliable, and modern content management systems with Jamstack. With Jamstack, we can develop a new site for you in a fraction of the time it would take to build one entirely from scratch. Our solutions are deployed on Edge computing servers.
        </p>
      </div>
    </div>
{/** End of Header Section */}
{/** Start of Main Body Section */}
    <div id="down" className="relative bg-swhite">
      <Meta title="Nippon Edge homepage" />
      <div className="lg:absolute lg:inset-0 lg:ml-6 lg:mb-12">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img
            className="h-56 sm:rounded-md w-full object-cover lg:absolute lg:h-full opacity-90"
            src="https://res.cloudinary.com/shinkirin/image/upload/v1649667555/kevin-matsunaga/japangarden.svg"
            alt="Japanese Garden - Unsplash."
            height={224}
            width={150}
          />
        </div>
      </div>
      <div className="relative pb-16 px-4 sm:px-6 pt-4 sm:pt-8 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-sred mt-4 font-semibold tracking-wide uppercase">Jamstack &amp; Edge Computing Experts</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sblack sm:text-4xl">
              Choose your new website
            </h3>
            <p className="mt-8 text-lg text-sblack">
            With over 20 years of experience, the team at Nippon Edge can help design and deploy a new website for your business. We will develop your new site using Jamstack.<br />
            <br />
            Jamstack builds on many of the tools and workflows which developers love and brings maximum productivity to your project. We combine our favorite tools and frontend frameworks, like Next.js, NuxtJS, and SvelteKit, to better deliver engaging websites and web applications to our customers.<br />
            <br />
            Our customers' websites are deployed serverless on Edge computing servers such as Cloudflare Pages, Netlify, or Vercel. We can also deploy to MERN stacks or other static deployment solutions.
            </p>
            <h3 className="mt-4 text-xl leading-8 font-extrabold tracking-tight text-sblack sm:text-2xl">Let us optimize your website</h3>
            <p className="mt-8 text-lg text-sblack">          
            We are highly proficient in optimizing websites. If your site does poorly with Google DevTools or PageSpeed Insights, we can audit your website and give our recommendations. If you choose our Jamstack solution, we will fully optimize the website before handover. 
            </p>
          </div>
        </div>
      </div>
    </div>
{/** End of Main Body Section */}
        </>
      )}
    </Disclosure>
  )
}