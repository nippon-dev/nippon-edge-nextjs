import Meta from '../components/Meta'
import { Disclosure } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/solid'
import Link from 'next/link'

Meta.defaultProps = {
  siteTitle: 'What We Do - Nippon Edge',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, sveltekit, cloudflare, cloudinary, github, graphcms',
  description: 'We develop websites in Jamstack (Next.js / NuxtJS / SvelteKit). Our preferred CSS framework is Tailwind CSS.',
}

export default function WhatIDo() {
  return (
    <Disclosure as="navigation" className="">
      { (
        <>
{/** Start of Header Section */}
<div className="relative bg-swhite mb-4 sm:mb-12">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/shinkirin/image/upload/v1649675163/kevin-matsunaga/tech-nippon-edge.webp"
          alt="Node image"
        />
        <div className="absolute inset-0 bg-sred mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-swhite sm:text-5xl lg:text-6xl">On the Edge with Jamstack</h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
        We develop in Next.js, NuxtJS, and SvelteKit. All projects are developed with the Tailwind CSS framework.
        </p>
      </div>
    </div>
{/** End of Header Section */}
          {/** start of main body area */}
      <div className="relative py-16 bg-white overflow-hidden">
      <Meta title="What I do" />
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-sblue" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-sred" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-sblue" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-sred font-semibold tracking-wide uppercase">
              Our Skillsets
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-sblack sm:text-4xl">
              What We Do
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-blue blue-lg text-gray-900 mx-auto">
          <h3>Jamstack Development</h3>
          <p>
          We develop websites in Jamstack (Next.js / NuxtJS / SvelteKit). Our preferred CSS framework is Tailwind CSS. We also can set up GraphCMS headless options for websites. We place a big emphasis on optimizing all websites so they will score well with Google DevTools and Pagespeed Insights. We also implement Schema.org to help websites improve their structured data for search engines.
          </p>
          <h3>Server Adminstration</h3>
          <p>
          We deploy websites either on our Linux MERN server or serverless with Netlify. Customers can also choose to deploy with Vercel and Cloudflare Pages. There are several options you can choose.<br />
          <br />
          We also help set up accounts with Cloudflare and Cloudinary if customers request this.
          </p>
          <h3>Ecommerce</h3>
          <p>
          In the past three years, we have helped restaurants in Vietnam integrate their websites with the Oracle GloriaFood food delivery system. We are also working on a project to use headless Shopify for future projects.
          </p>
          <h3>WordPress Migration to Jamstack</h3>
          <p>
          Finally, we have worked on several projects in the past year migrating websites from WordPress to Jamstack. It is a costly and time-consuming solution, but we have been successful with two projects already.<br />
          <br />
          <Link href="contact"><a className="hover:text-sred" title="Contact Nippon Edge">Contact us</a></Link> for more information.
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <img 
            className="rounded-md"
            src="/ecommerce.svg"
            alt="Ecommerce development with Kevin Matsunaga"
            width="750"
            height="500"
          />
        </div>
          <figcaption className="mt-3 flex text-sm text-sblack text-center justify-center">
            <CameraIcon className="flex-none w-5 h-5 text-sred" aria-hidden="true" />
            <span className="ml-2">We are currently developing Ecommerce sites in WooCommerce and with headless Shopify.</span>
          </figcaption>
      </div>
    </div>
      {/** end of main body area */}

        </>
      )}
    </Disclosure>

  )
}