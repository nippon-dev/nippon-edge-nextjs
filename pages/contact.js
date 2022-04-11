import Meta from '../components/Meta'
import { useState } from 'react'
import { Disclosure, Switch } from '@headlessui/react'
import Link from 'next/link'

Meta.defaultProps = {
  siteTitle: 'Contact Nippon Edge',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, wordpress, wordpress optimization, cloudflare, cloudinary, github',
  description: 'Contact Nippon Edge.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  return (
    <Disclosure as="nav" className="">
      { (
        <>

{/** Start of Main Body Section */}
<div className="bg-swhite py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <Meta title="Contact" />
          <h2 className="text-3xl font-extrabold tracking-tight text-sblack sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-700">
              Please fill out the form below and we will get back to you.
          </p>
        </div>
        <div className="mt-12">
          <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-sblack">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-sblue focus:border-sblue border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-sblue focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-sblue focus:border-sblue border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full pl-5 focus:ring-sblue focus:border-sblue border-gray-300 rounded-md"
                  placeholder="+1 999 999 9999"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-sblue focus:border-sblue border-gray-300 rounded-md"
                  defaultValue={''}
                  placeholder="Your message."
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-sblue' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sblue'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-sblack">
                    By selecting this, you agree to the{' '}
                    <Link href="/privacy-policy"><a className="hover:text-sred font-medium text-sblue underline">
                      Cookie and Privacy Policy
                    </a></Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-50 bg-sred hover:bg-sblack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              >
                Send Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> 
{/** End of Main Body Section */}
        </>
      )}
    </Disclosure>

  )
}