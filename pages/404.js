import Link from 'next/link'
import Meta from '../components/Meta'

Meta.defaultProps = {
  siteTitle: 'Nippon Edge FourOhFour',
  keywords: 'jamstack, next.js, nuxtjs, tailwind css, netlifty, sveltekit, cloudflare, cloudinary, github, graphcms',
  description: 'Whoops wrong page.',
}

export default function FourOhFour() {
    return (
      <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Meta title="404 Error" />
          <div className="flex-shrink-0 flex justify-center">
          <Link href="/"><a className="inline-flex">
              <span className="sr-only">Nippon Edge</span>
              <img
                className="h-40 w-auto"
                src="/page-not-found.svg"
                alt=""
              />
            </a></Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-babas-red uppercase tracking-wide">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-gray-700">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <Link href="/"><a className="text-base font-medium text-sred hover:text-sgreen">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a></Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
          <Link href="contact"><a className="text-sm font-medium text-sred hover:text-sgreen">
              Report
            </a></Link>
          </nav>
        </footer>
      </div>
    )
  }