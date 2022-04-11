import Meta from '../components/Meta'
import { Disclosure } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/solid'
import Link from 'next/link'

Meta.defaultProps = {
  siteTitle: 'What We Offer - Nippon Edge',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, sveltekit, cloudflare, cloudinary, github, graphcms',
  description: 'We develop in Jamstack, a new standard for fast and secure websites',
}

export default function WhatIOffer() {
  return (
    <Disclosure as="navigation" className="">
      { (
        <>
{/** Start of Header Section */}
<div className="relative bg-swhite mb-4 sm:mb-12">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/shinkirin/image/upload/v1649675457/kevin-matsunaga/nippon-edge_servers.webp"
          alt="Edge Computing or MERN stack solutions"
        />
        <div className="absolute inset-0 bg-sred mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-swhite sm:text-5xl lg:text-6xl">Serverless Deployment</h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
        Deploy serverless with Cloudflare Pages, Netlify, or Vercel. We can even deploy to our Linux MERN stack.
        </p>
      </div>
    </div>
{/** End of Header Section */}
          {/** start of main body area */}
      <div className="relative py-16 bg-white overflow-hidden">
      <Meta title="Who we are" />
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
              What can we do for you.
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-sblack sm:text-4xl uppercase">
              What We Offer
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-blue blue-lg text-gray-900 mx-auto">
          <h3 id="jamstack">Jamstack Development (Next.js / NuxtJS / SvelteKit)</h3>
          <p>
          Jamstack is the new standard for fast and secure websites. Nippon Edge&apos;s website was developed in Jamstack (Next.js + Tailwind CSS hosted at Netlify). For us, it is far easier to develop with Jamstack than with WordPress. We have far more control of the design process. You will not regret it if you choose a Jamstack solution. Below is our Jamstack proposal will include the following:
          </p>
          <ul className="ml-2 sm:ml-4">
            <li>Design layout with Tailwind CSS</li>
            <li>Add content, images, and videos</li>
            <li>Setup Cloudinary</li>
            <li>Setup Github and Netlify</li>
            <li>Deploy to Netlify</li>
            <li>Testing and optimization</li>
            <li>Project signoff occurs after scoring in the 90s with Google DevTools</li>
            <li>Automate forms with Slack (including Slack setup)</li>
            <li>Headless CMS integration with GraphCMS</li>
          </ul>
          <p>Some customers may ask for headless WordPress integration with Jamstack. We can do this as well but it will take more time.</p>
          <h3>Ecommerce Development</h3>
          <p>
          Probably the most fun part of web development. If you are looking for a shopping cart, we can set up a headless Shopify site integrated with Next.js.<br />
          <br /> 
          <Link href="contact"><a className="hover:text-sred" title="Contact Nippon Edge">Contact us</a></Link> for more information.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <img 
            className="rounded-md"
            src="/programmer.svg"
            alt="Ecommerce at bring.vn"
            width="750"
            height="500"
           />
        </div>
          <figcaption className="mt-3 flex text-sm text-sblack text-center justify-center">
            <CameraIcon className="flex-none w-5 h-5 text-sred" aria-hidden="true" />
            <span className="ml-2">We can develop a fully server side rendered website with Next.js.</span>
          </figcaption>
      </div>
    </div>
      {/** end of main body area */}

        </>
      )}
    </Disclosure>

  )
}