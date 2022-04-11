import Meta from '../components/Meta'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

Meta.defaultProps = {
  siteTitle: 'Kevin Matsunaga\'s Portfolio site',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, wordpress, wordpress optimization, cloudflare, cloudinary, github',
  description: 'Kevin Matsunaga\'s Privacy Policy for website.',
}

export default function Policy() {
  return (
    <Disclosure as="navigation" className="">
      {({ open }) => (
        <>
          {/** start of main body area */}
      <div className="relative py-16 bg-white overflow-hidden">
      <Meta title="Skinkirin Tech Cookie &amp; Privacy Policy" />
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
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
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
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
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
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-gray-900 font-semibold tracking-wide uppercase">
             Privacy is a Human Right
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Cookie &amp; Privacy Policy
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-700 leading-8">
          Our website addresses:
          </p>
          <ul className="ml-8 mt-4 list-disc">
            <li>https://nippon.dev</li>
            <li>https://nippon.netlify.app</li>
          </ul>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-900 mx-auto">
          <h2>What personal data we collect and why we collect it</h2>
          <h3>Contact Forms</h3>
          <p>
          Our contact form is processed by <a className="hover:text-sred" href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer" title="Link to Netlify Privacy Policy">Netlify</a> and sent to <a className="hover:text-sred" href="https://slack.com/intl/en-vn/trust/privacy/privacy-policy" target="_blank" rel="noreferrer" title="Link to Slack Privacy Policy">Slack</a> via automation. Click on the aforementioned links to view their Privacy Policies. We collect the information that you enter from our contact form.
          </p>
          <h3>Embedded content from other websites</h3>
          <p>
          Content on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. For this website, we have embedded content for <a className="hover:text-sred" href="https://unsplash.com/privacy" target="_blank" rel="noreferrer" title="Link to Unsplash Privacy Policy">Unsplash</a> and <a className="hover:text-sred" href="https://undraw.co/license" target="_blank" rel="noreferrer" title="Link to Undraw website">Undraw</a>. Click on the aforementioned links to view their Privacy Policies.<br />
          <br />
          These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content. Google Maps and YouTube have embedded cookies with the content added to this website. You have the options to block these cookies with your browser and will still be able to view the content.
          </p>
          <h2>Who we share your data with</h2>
          <h3>Web Analytics</h3>
          <p>
          We use <a className="hover:text-sred" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer" title="Link to Cloudflare Privacy Policy">Cloudflare Web Analytics</a> to gather data on visitors. Please refer to their Privacy Policy at the aforementioned link to learn more how Cloudflare handles its data. The data gathered by cookies from Cloudflare Web Analytics include: Country, Source, Paths, Hosts, Browsers, Operating Systems, and Device Types.
          </p>
          <h3>Static Site Hosting</h3>
          <p>Shinkirin Tech&apos;s website is hosted at <a className="hover:text-sred" href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer" title="Link to Netlify Privacy Policy">Netlify</a>. Please refer to their Privacy Policies in the aforementioned link to learn more how they handle gathered data.</p>
          <h3>Slack Workflow Automation</h3>
          <p>We automate part of this site&apos;s workflows with <a className="hover:text-sred" href="https://slack.com/intl/en-vn/trust/privacy/privacy-policy" target="_blank" rel="noreferrer" title="Link to Slack Privacy Policy">Slack</a>. Please refer to their Privacy Policies in the aforementioned link to learn more how they handle gathered data.</p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions to our cookie and privacy policies, you can <Link href="/contact" title="Contact Kevin Matsunaga"><a className="hover:text-sred">Contact Us</a></Link> at this website.
          </p>
        </div>
      </div>
    </div>
      {/** end of main body area */}

        </>
      )}
    </Disclosure>

  )
}