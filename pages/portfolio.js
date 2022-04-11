import Meta from '../components/Meta'
import { Disclosure } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/solid'
import Link from 'next/link'

Meta.defaultProps = {
  siteTitle: 'Nippon Edge\'s Portfolio',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, sveltekit, cloudflare, cloudinary, github, graphcms',
  description: 'Nippon Edge\'s Portfolio includes Next.js, NuxtJS and SvelteKit projects.',
}

const portfolios = [
    {
      id: 1,
      framework: 'Next.js + Tailwind CSS + GloriaFood',
      href: 'https://babaskitchen.vn',
      company: 'Baba\'s Kitchen',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636336719/kevin-matsunaga/babas-kitchen.webp',
      imageAlt: 'Baba\'s Kitchen Next.js + Tailwind CSS website.',
    },
    {
      id: 2,
      framework: 'WordPress + GloriaFood',
      href: 'https://benstylefood.com',
      company: 'Ben Style Food',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636343689/kevin-matsunaga/benstylefood.webp',
      imageAlt: 'Ben Style Food website.',
    },
    {
      id: 3,
      framework: 'WordPress',
      href: 'https://web.archive.org/web/20080222102902/http://www.triviet-consult.com/',
      company: 'Tri Viet Consulting',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636287366/kevin-matsunaga/triviet-consulting.webp',
      imageAlt: 'Tri Viet Consulting WordPress website.',
    },
    {
      id: 4,
      framework: 'WordPress + Moodle + Gibbon',
      href: '#',
      company: 'Eduwise Consulting',
      location: 'Budapest, Hungary',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344153/kevin-matsunaga/eduwise.webp',
      imageAlt: 'Eduwise Consulting website.',
    },
    {
      id: 5,
      framework: 'Next.js + Tailwind CSS + Woocommerce',
      href: 'https://bring.vn',
      company: 'bring.vn',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344151/kevin-matsunaga/bringvn.webp',
      imageAlt: 'bring.vn website.',
    },
    {
      id: 6,
      framework: 'NuxtJS + Tailwind CSS',
      href: 'https://qazed.tech',
      company: 'QAZED.tech',
      location: 'Almaty, Kazakhstan',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344583/kevin-matsunaga/qazedtech.webp',
      imageAlt: 'QAZED.tech website.',
    },
    {
      id: 7,
      framework: 'Next.js + Tailwind CSS + Woocommerce',
      href: 'https://mangad.app',
      company: 'MangaD.app',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344712/kevin-matsunaga/mangadapp.webp',
      imageAlt: 'MangaD.app website.',
    },
    {
      id: 8,
      framework: 'NuxtJS + Tailwind CSS + GloriaFood',
      href: 'https://oishiieats.vn/',
      company: 'OishiiEats.vn',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344991/kevin-matsunaga/oishiieatsvn.webp',
      imageAlt: 'OishiiEats.vn website.',
    },
    // More portfolio...
  ]

export default function Portfolios() {
  return (
    <Disclosure as="content">
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
        <h1 className="text-4xl font-extrabold tracking-tight text-swhite sm:text-5xl lg:text-6xl">Portfolio</h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
        What have developed in Jamstack and WordPress in the past.
        </p>
      </div>
    </div>
{/** End of Header Section */}
{/** Start of Main Body Section */}
<div className="relative py-16 bg-swhite overflow-hidden">
<Meta title="Kevin Matsunaga's WordPress and Jamstack website portfolios" />
 
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-sred font-semibold tracking-wide uppercase">
              See what we have done
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-sblack sm:text-4xl">
              Our Portfolio
            </span>
          </h1>
        </div>
        <div className="mt-6 mb-2 prose prose-blue blue-lg text-gray-900 mx-auto">

          <p>
          Below are some of our selected current and past projects. Most focused and website component to the projects. The web platform chosen were either Next.js, NuxtJS, or WordPress. Several foods and beverage projects integrated Oracle GloriaFood and Woocommerce (WordPress) with their projects. We are currently providing serverless or server hosting for most of these projects.
          </p>
        </div>
      </div>

  <div className="bg-gray-50 ml-2 mr-2 rounded-lg">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-center font-extrabold text-2xl sm:text-3xl pb-4">Current and Past Projects</h3>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {portfolios.map((portfolio) => (
            <a key={portfolio.id} href={portfolio.href} target="_blank" rel="noreferrer"
            className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={portfolio.imageSrc}
                  alt={portfolio.imageAlt}
                  title={portfolio.company}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{portfolio.framework}.</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">{portfolio.company}<span className="font-normal"></span></p>
              <p className="mt-1 text-md font-medium text-shinkirin">Location: {portfolio.location}.</p>
            </a>
          ))}
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