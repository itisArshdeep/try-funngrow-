"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from '../../public/images/logo.svg';
import profile from '../../public/images/profile.svg';
import company from '../../public/images/connect.svg';
import shelancer from '../../public/images/shelancer.svg';
import bgGraphic from '../../public/images/bgGraphic.svg';
import android from '../../public/images/android.png';
import apple from '../../public/images/apple.png';
import { useState } from "react";

const cardData = [
  {
    img: profile,
    title: "TEENLANCERS",
    subtitle: "Be Independent",
    bg: "#f9d2cd",
  },
  {
    img: company,
    title: "COMPANY",
    subtitle: "Smart talent Solution",
    bg: "#b8edfc",
  },
  {
    img: shelancer,
    title: "SHELANCER",
    subtitle: "Empowering Women",
    bg: "#ffefc1",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="">
        {/* Top Banner - Added aria-label for accessibility */}
        <div 
          className="w-[100%] flex justify-center items-center text-[15px] h-12 md:h-9 bg-green-700 text-white text-center px-4"
          aria-label="Company recognition"
        >
          As seen on Shark Tank India … loved by Teens, loved by parents, loved by companies and now loved by Sharks
        </div>

        {/* Navbar - Added semantic nav and aria attributes */}
        <nav 
          className="w-full text-white shadow-md z-50 relative"
          aria-label="Main navigation"
        >
          <div className="flex justify-between items-center !px-4 md:!px-10 lg:!px-20 !py-4">
            {/* Added priority loading for LCP element */}
            <Image 
              src={logo} 
              alt="Funngro Logo" 
              className="h-auto w-[120px]" 
              priority
            />

            {/* Mobile menu button - improved accessibility */}
            <button 
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={28} className="cursor-pointer" />
              ) : (
                <Menu size={28} className="cursor-pointer" />
              )}
            </button>

            {/* Menu Items - added proper heading structure */}
            <ul 
              className={`md:flex gap-4 lg:gap-6 items-center absolute md:static left-0 w-full md:w-auto top-[70px] md:top-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out z-40
                ${isOpen ? "flex flex-col p-6" : "hidden"}`}
              role="menubar"
            >
              <li role="none"><a href="#" className="block py-2 md:py-0" role="menuitem">Teen</a></li>
              <li role="none"><a href="#" className="block py-2 md:py-0" role="menuitem">Company</a></li>
              <li role="none"><a href="#" className="block py-2 md:py-0" role="menuitem">Shelancer</a></li>
              <li role="none">
                <Image 
                  className="h-[30px] w-[30px]" 
                  src={android} 
                  alt="Download Android App" 
                  role="menuitem"
                />
              </li>
              <li role="none">
                <Image 
                  className="h-[30px] w-[30px]" 
                  src={apple} 
                  alt="Download iOS App" 
                  role="menuitem"
                />
              </li>
              <li role="none">
                <button 
                  className="h-[45px] w-[180px] lg:w-[200px] border-0 rounded-full bg-white text-green-700 !mt-2 md:!mt-0"
                  role="menuitem"
                >
                  Company Login
                </button>
              </li>
              <li role="none">
                <button 
                  className="h-[45px] w-[180px] lg:w-[200px] rounded-full bg-green-700 text-white !mt-2 md:!mt-0"
                  role="menuitem"
                >
                  Earn now
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section - Added main landmark and proper heading hierarchy */}
        <main className="relative px-4 md:px-10 lg:px-0 text-white">
          <Image 
            className="absolute top-1/3 w-full p-0 m-0 -z-10" 
            src={bgGraphic} 
            alt="Decorative background" 
            aria-hidden="true"
          />

          <header className="flex flex-col gap-5 justify-center !mt-16 items-center text-center">
            <h1 className="text-4xl font-bold">Funngro Teenlancer</h1>
            <p className="text-[16px] font-medium">Smart Teenagers meet Smart Companies</p>
          </header>

          {/* Cards Section - Added section landmark */}
          <section 
            className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-[180px] !mt-14 max-w-7xl !mx-auto"
            aria-label="Our services"
          >
            {cardData.map((card, idx) => (
              <article
                key={idx}
                className="h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] md:!p-12 md:h-[190px] md:w-[190px] rounded-full flex justify-center items-center flex-col text-black text-center"
                style={{ backgroundColor: card.bg }}
                aria-labelledby={`card-title-${idx}`}
              >
                <Image 
                  src={card.img} 
                  alt="" 
                  aria-hidden="true"
                />
                <h2 id={`card-title-${idx}`} className="text-xl font-bold !mt-2">{card.title}</h2>
                <p>{card.subtitle}</p>
              </article>
            ))}
          </section>

          <div className="flex justify-center items-center">
            <button 
              className="h-[40px] w-[180px] !mt-10 bg-green-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Start earning now"
            >
              Earn now
            </button>
          </div>
        </main>

        {/* Shark Tank Section - Added section landmark */}
        <section 
          className="h-full w-full bg-[#3c405bd5] !mt-20 text-white px-4 md:px-10 lg:px-0"
          aria-label="Shark Tank feature"
        >
          <div className="flex flex-col justify-center items-center pt-[60px] text-center">
            <h2 className="text-[32px] md:text-[38px] lg:text-[43px] font-semibold">Funngro @ Shark Tank</h2>
            <p className="max-w-[800px] !mt-2 px-2">
              Loved by lakhs of Teenlancers, Shelancers and thousands of Companies & now loved by SHARKS!!
            </p>
          </div>

          <div className="flex justify-center items-center !mt-10">
            <div className="w-full md:w-[85%] lg:w-[70%] aspect-video rounded-xl overflow-hidden">
              {/* Added title attribute for iframe */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/I0XgtabN8rI"
                title="Funngro on Shark Tank India"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Footer - Added footer landmark */}
          <footer className="flex justify-center items-center h-12 bg-[#14182ef6] !mt-10 text-sm text-center">
            © All Copyrights reserved 2025 by FUNNGRO
          </footer>
        </section>
      </div>
    </>
  );
}