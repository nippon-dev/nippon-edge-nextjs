import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <div>
            <Nav />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout