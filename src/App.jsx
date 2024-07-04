import "./App.css";
import { Features } from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";

function App() {
    return (
        <div className="bg-[#F5F5F5] pt-5 px-4 md:pt-10 relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center">
                <div className="bg-hero-pattern bg-center bg-no-repeat w-[865px] h-[525px] absolute top-10 left-1/2 -translate-x-1/2  pointer-events-none z-10"></div>
                <div className="bg-hero-pattern-v bg-center bg-no-repeat w-[984px] h-[217px] absolute top-[96px] left-1/2 -translate-x-1/2  pointer-events-none z-10 "></div>
                <div className="bg-[#92C4FE] w-[436px] h-[436px] rounded-full absolute blur-[300px] -top-[254px] translate-x-1/2 pointer-events-none"></div>
                <div className="bg-[#FEA49280] w-[558px] h-[558px] rounded-full absolute blur-[300px] -top-[124px] -translate-x-1/2  pointer-events-none"></div>
                <div className="bg-[#AE92FE] w-[273px] h-[273px] rounded-full absolute blur-[200px] top-[600px]"></div>
            </div>
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Services />
                <Features />
                <Newsletter />
                <Footer />
                <p className="text-[8px] text-gray-300 text-center">
                    &copy; Henri Bresteau
                </p>
            </div>
        </div>
    );
}

export default App;
