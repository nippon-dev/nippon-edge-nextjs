import Meta from '../components/Meta'
import { Disclosure } from '@headlessui/react'

Meta.defaultProps = {
  siteTitle: 'Nippon Edge\'s Portfolio',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, sveltekit, cloudflare, cloudinary, github, graphcms',
  description: 'Nippon Edge\'s Portfolio includes Next.js, NuxtJS and SvelteKit projects.',
}

const currentPorts = [
  {
    id: 1,
    framework: 'SvelteKit + GraphCMS + Tailwind CSS',
    href: 'https://babaskitchen.vn',
    company: 'Baba\'s Kitchen',
    location: 'HCMC, Vietnam',
    imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649947920/kevin-matsunaga/babas-sveltekit.webp',
    imageAlt: 'Baba\'s Kitchen SvelteKit + GraphCMS + Tailwind CSS website.',
  },
  {
    id: 2,
    framework: 'SvelteKit + GraphCMS + Tailwind CSS',
    href: 'https://benstylefood.com',
    company: 'Ben Style Food',
    location: 'HCMC, Vietnam',
    imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649689657/kevin-matsunaga/benstyle-screenshot.webp',
    imageAlt: 'Ben Style Food SvelteKit + GraphCMS website.',
  },
  {
    id: 3,
    framework: 'SvelteKit + Tailwind CSS',
    href: 'https://gohalalvietnam.com',
    company: 'GoHALALVietnam',
    location: 'HCMC, Vietnam',
    imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1650869013/gohalalvietnam/gohalalvietnam-svelte.webp',
    imageAlt: 'GoHALALVietnam website.',
  },
  {
    id: 4,
    framework: 'SvelteKit + GraphCMS + Tailwind CSS',
    href: 'https://vinifty.tech',
    company: 'Vinifty',
    location: 'HCMC, Vietnam',
    imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649689657/kevin-matsunaga/vinifty-screenshot.webp',
    imageAlt: 'Vinifty startup website.',
  },
  {
    id: 5,
    framework: 'Next.js + Tailwind CSS',
    href: 'https://nippon.dev',
    company: 'Nippon Edge',
    location: 'HCMC, Vietnam',
    imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649689657/kevin-matsunaga/nippon-edge-screenshot.webp',
    imageAlt: 'Nippon Edge website.',
  },
  {
    id: 6,
    framework: 'SvelteKit + DaisyUI + Tailwind CSS',
    href: 'https://sin.nippon.dev',
    company: 'Singapore Node',
    location: 'HCMC, Vietnam',
    imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1650271857/kevin-matsunaga/singapore-node.webp',
    imageAlt: 'Nippon Edge\'s Singapore Node website.',
  }
]

const portfolios = [
  {
      id: 1,
      framework: 'Next.js + Tailwind CSS',
      href: 'https://shinkirin.com',
      company: 'Shinkirin',
      location: 'Fukuoka, Japan',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649733333/kevin-matsunaga/shinkirin-screenshot.webp',
      imageAlt: 'Shinkirin Next.js + Tailwind CSS website.',
    },
    {
      id: 2,
      framework: 'WordPress',
      href: 'https://seaact.org',
      company: 'SEAACT',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649736883/kevin-matsunaga/seaact-screenshot.webp',
      imageAlt: 'Southeast Asia Action for Clean Technology website.',
    },  
    {
      id: 3,
      framework: 'WordPress + Moodle + Gibbon',
      href: 'https://eduwise.com/',
      company: 'Eduwise Consulting',
      location: 'Budapest, Hungary',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344153/kevin-matsunaga/eduwise.webp',
      imageAlt: 'Eduwise Consulting website.',
    },
    {
      id: 4,
      framework: 'Next.js + Tailwind CSS + Woocommerce',
      href: 'https://bring.vn',
      company: 'bring.vn',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344151/kevin-matsunaga/bringvn.webp',
      imageAlt: 'bring.vn website.',
    },
    {
      id: 5,
      framework: 'Next.js + Tailwind CSS + Woocommerce',
      href: 'https://mangad.app',
      company: 'MangaD.app',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344712/kevin-matsunaga/mangadapp.webp',
      imageAlt: 'MangaD.app website.',
    },
    {
      id: 6,
      framework: 'NuxtJS + Tailwind CSS + GloriaFood',
      href: 'https://oishiieats.vn/',
      company: 'OishiiEats.vn',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344991/kevin-matsunaga/oishiieatsvn.webp',
      imageAlt: 'OishiiEats.vn website.',
    },
    {
      id: 7,
      framework: 'NuxtJS + Tailwind CSS',
      href: 'https://qazed.tech',
      company: 'QAZED.tech',
      location: 'Almaty, Kazakhstan',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636344583/kevin-matsunaga/qazedtech.webp',
      imageAlt: 'QAZED.tech website.',
    },
    {
      id: 8,
      framework: 'WordPress',
      href: 'https://web.archive.org/web/20161024040145/http://amerasianfoundation.org/category/amerasianfoundation/',
      company: 'Amerasian Foundation',
      location: 'Seattle, Washington',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649719387/kevin-matsunaga/amerasian-foundation.webp',
      imageAlt: 'Amerasian Foundation website.',
    },
    {
      id: 9,
      framework: 'WordPress + GloriaFood (old site)',
      href: 'https://benstylefood.com',
      company: 'Ben Style Food',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636343689/kevin-matsunaga/benstylefood.webp',
      imageAlt: 'Ben Style Food website.',
    },
    {
      id: 10,
      framework: 'Next.js + GloriaFood (old site)',
      href: 'https://babaskitchen.vn',
      company: 'Baba\'s Kitchen',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636336719/kevin-matsunaga/babas-kitchen.webp',
      imageAlt: 'Baba\'s Kitchen Next.js + Tailwind CSS website.',
    },
    {
      id: 11,
      framework: 'Next.js + Tailwind CSS (old site)',
      href: 'https://gohalalvietnam.com',
      company: 'GoHalalVietnam!',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1649729164/kevin-matsunaga/gohalalvietnam-screenshot.webp',
      imageAlt: 'GoHalalVietnam! Next.js + Tailwind CSS website.',
    },
    {
      id: 12,
      framework: 'WordPress',
      href: 'https://web.archive.org/web/20080222102902/http://www.triviet-consult.com/',
      company: 'Tri Viet Consulting',
      location: 'HCMC, Vietnam',
      imageSrc: 'https://res.cloudinary.com/shinkirin/image/upload/v1636287366/kevin-matsunaga/triviet-consulting.webp',
      imageAlt: 'Tri Viet Consulting WordPress website.',
    }
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
        We have experience with Jamstack and WordPress.
        </p>
      </div>
    </div>
{/** End of Header Section */}
{/** Start of Main Body Section */}
<div className="relative py-16 bg-swhite overflow-hidden">
<Meta title="Nippon Edge WordPress and Jamstack website portfolios" />
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
      <div className="relative px-4 sm:px-6 lg:px-8 border-b-2 border-b-sorange border-dotted">
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
        <div className="mt-6 mb-6 prose prose-sblue-lg text-gray-900 mx-auto">
          <p>
          Below are some of our selected current and past projects. For the past projects, the web platform chosen were Next.js, NuxtJS, or WordPress. Several foods and beverage projects integrated Oracle GloriaFood with their projects.<br />
          <br />
          For current projects, the most common platform chosen was Next.js or SvelteKit. The projects also integrate with GraphCMS, a GraphQL headless content management system.<br />
          <br /> We are currently providing serverless or server hosting for most of these projects.
          </p>
        </div>
      </div>
  <div className="bg-gray-50 ml-2 mr-2 rounded-lg">
    <div className="border-b-2 border-b-sorange border-dotted max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-center font-extrabold text-2xl sm:text-3xl pb-4">Current Projects</h3>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentPorts.map((currentPort) => (
            <a key={currentPort.id} href={currentPort.href} target="_blank" rel="noreferrer"
            className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-sred rounded-lg overflow-hidden">
                <img
                  src={currentPort.imageSrc}
                  alt={currentPort.imageAlt}
                  title={currentPort.company}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{currentPort.framework}.</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">{currentPort.company}<span className="font-normal"></span></p>
              <p className="mt-1 text-md font-medium text-shinkirin">Location: {currentPort.location}.</p>
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-center font-extrabold text-2xl sm:text-3xl pb-4">Past Projects</h3>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {portfolios.map((portfolio) => (
            <a key={portfolio.id} href={portfolio.href} target="_blank" rel="noreferrer"
            className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-sblue rounded-lg overflow-hidden">
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