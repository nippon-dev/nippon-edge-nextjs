import Link from 'next/link'

const navigation = [
  { name: 'About', href: 'about', title: 'About Nippon Edge', },
  { name: 'What We Do', href: 'what-we-do', title: 'What We do', },
  { name: 'What We Offer', href: 'what-we-offer', title: 'What We offer', },
  { name: 'Portfolio', href: 'portfolio', title: 'Portfolio', },
]

export default function TopNavBar() {
  return (
    <header className="sticky top-0 z-50 bg-swhite">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-sred lg:border-none">
          <div className="flex items-center">
            <Link href="/">
            <a title="Homepage">
              <span className="sr-only">Nippon Edge</span>
              <img
              className="h-8 md:h-12 w-auto"
                src="https://res.cloudinary.com/shinkirin/image/upload/v1649676801/kevin-matsunaga/nippon-edgeLogo.webp"
                alt="Nippon Edge logo"
              />
            </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block uppercase">
              {navigation.map((link) => (
                <Link key={link.name} href={link.href} title={link.title}>
                <a className="text-base font-medium text-sblack hover:text-sred">
                  {link.name}
                </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="contact" title="Contact Kevin Matsunaga">
            <a
              className="inline-block bg-sblack py-2 px-4 border border-transparent rounded-md text-base font-medium text-swhite hover:bg-sblue hover:text-swhite"
            >
              Contact
            </a>
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden uppercase">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href} title={link.title}>
            <a className="text-base font-medium text-sblack hover:text-sred">
              {link.name}
            </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
