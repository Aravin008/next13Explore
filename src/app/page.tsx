import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <div>
      <h1>Hello, Next.js!</h1>
      <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
      </blockquote>
      </div>
      <Footer/>
    </div>
  )
}