import Header from "./components/header/page"
import Hero from "./components/hero/page"
import Navbar from "./components/navbar"
import Contact from "./contact/page";
import About from "./about/page";
import Footer from "./components/footer/page"
export default function Home() {
  return (
    <div>
      <Navbar />
<Header />
<Hero/>
<About/>
<Contact/>
<Footer/>
    </div>
  )
}
