import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AboutLayout({children} : {children: React.ReactNode}):React.ReactNode {
    return (
        <div>
            <NavBar/>
                <div>{children}</div>
            <Footer/>
        </div>
    )
}