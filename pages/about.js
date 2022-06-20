import Meta from '../components/Meta'
import { Disclosure } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/solid'

Meta.defaultProps = {
  siteTitle: 'Kevin Matsunaga - Nippon Edge',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, sveltekit, cloudflare, cloudinary, github, graphcms',
  description: 'About Kevin Matsunaga, Senior Developer for Jamstack Projects.',
}

export default function AboutMe() {
  return (
    <Disclosure as="navigation" className="">
      { (
        <>
{/** Start of Header Section */}
<div className="relative bg-swhite mb-4 sm:mb-12">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/shinkirin/image/upload/v1649675767/kevin-matsunaga/developer-nippon-edge.webp"
          alt="Nippon Edge Developer"
        />
        <div className="absolute inset-0 bg-sred mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-swhite sm:text-5xl lg:text-6xl">About Nippon Edge</h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
        Nippon Edge a side project to help people develop and deploy their web projects.
        </p>
      </div>
    </div>
{/** End of Header Section */}
{/** start of main body area */}
      <div className="relative py-16 bg-white overflow-hidden">
      <Meta title="About Kevin Matsunaga" />
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
                <rect x={0} y={0} width={4} height={4} className="text-sred" fill="currentColor" />
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
                <rect x={0} y={0} width={4} height={4} className="text-sblue" fill="currentColor" />
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
                <rect x={0} y={0} width={4} height={4} className="text-sred" fill="currentColor" />
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
              Two Decades of Experience
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-sblack sm:text-4xl">
              Senior Developer
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-blue blue-lg text-gray-900 mx-auto">
          <h3>Kevin Matsunaga</h3>
          <p>
          Kevin has two decades of experience in web development. He is also a Linux server administrator with both LEMP and MERN stacks. He currently develops in Next.js and SvelteKit with GraphCMS integrations. TailwindCSS is his preferred CSS framework.<br />
          <br />
          Kevin holds a Master of Public Affairs from Indiana University, Bloomington, where he studied Information Systems, International Development, and Nonprofit Management. He earned his Double Degree Bachelor of Arts (American Ethnic Studies and Sociology) from the University of Washington (Seattle, USA).  <br />
          <br />
          Kevin has spent over two decades living overseas (China, Japan, Kazakhstan, Kyrgyzstan, Russia, Turkey, and Vietnam) and can communicate in Japanese, Kazakh, Russian, and basic Vietnamese. He currently resides in Ho Chi Minh City, Vietnam.
          </p>
          <p>
          Kevin is currently an AWS Scout for Amazon Web Services in Vietnam.<br />
          <br />
          <b>Nippon Edge</b> is a side project of Kevin&apos;s to help friends develop and deploy their web projects. The Team that assists with projects are located in Vietnam and Kazakhstan.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <img 
            className="rounded-md"
            src="/aboutme.svg"
            alt="About me - kevinmatsunaga.com"
            width="750"
            height="500"
          />
        </div>
          <figcaption className="mt-3 flex text-sm text-sblack text-center justify-center">
            <CameraIcon className="flex-none w-5 h-5 text-sblack" aria-hidden="true" />
            <span className="ml-2">Over two decades experience in IT and Web development.</span>
          </figcaption>
      </div>
    </div>
      {/** end of main body area */}

        </>
      )}
    </Disclosure>

  )
}