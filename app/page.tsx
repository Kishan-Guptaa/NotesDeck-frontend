// import Image from "next/image";
// import { Navbar } from "./components/marketing/Navbar";
// import { Hero } from "./components/marketing/Hero";
// import { Branch } from "./components/marketing/Branch";
// import { Feature } from "./components/marketing/Feature";
// import { Review } from "./components/marketing/Reviews";
// import { FAQ } from "./components/marketing/FAQ";
// import { Footer } from "./components/marketing/Footer";
// import { CTABanner } from "./components/marketing/CTABanner";


// export default function Home() {
  
  

//   return <div>
//         <Navbar/>
//         <Hero/>
        
//         <Branch/>
//         <Feature/>
//         <Review/>
//         <FAQ/>
//         <CTABanner/>
//         <Footer/>
//   </div>

// }
import Image from "next/image";
import { Navbar } from "./components/marketing/Navbar";
import { Hero } from "./components/marketing/Hero";
import { Branch } from "./components/marketing/Branch";
import { Feature } from "./components/marketing/Feature";
import { Review } from "./components/marketing/Reviews";
import { FAQ } from "./components/marketing/FAQ";
import { Footer } from "./components/marketing/Footer";
import { CTABanner } from "./components/marketing/CTABanner";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";  // ⭐ Import the scroll progress bar

export default function Home() {
  return (
    <div>
      <Navbar />
      <ScrollProgressBar />   {/* ⭐ Scroll bar added here */}
      
      <Hero />
      <Branch />
      <Feature />
      <Review />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
