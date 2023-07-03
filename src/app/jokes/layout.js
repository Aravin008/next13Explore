import Footer from "../components/Footer"
import Navbar from "../components/NavBar"

export default function ReportLayout({children}) {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}