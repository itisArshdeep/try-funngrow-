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
        {/* Top Banner */}
        <div className="w-[100%] flex justify-center items-center text-[15px] h-12 md:h-9 bg-green-700 text-white text-center px-4">
          As seen on Shark Tank India … loved by Teens, loved by parents, loved by companies and now loved by Sharks
        </div>

        {/* Navbar */}
        <nav className="w-full text-white shadow-md z-50 relative">
          <div className="flex justify-between items-center !px-4 md:!px-10 lg:!px-20 !py-4">
            <Image src={logo} alt="Logo" className="h-auto w-[120px]" />

            {/* Hamburger Icon - mobile */}
            <div className="md:hidden">
              {isOpen ? (
                <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
              ) : (
                <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
              )}
            </div>

            {/* Menu Items */}
            <ul className={`md:flex gap-4 lg:gap-6 items-center absolute md:static left-0 w-full md:w-auto top-[70px] md:top-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out z-40
              ${isOpen ? "flex flex-col p-6" : "hidden"}`}>
              <li><a href="#" className="block py-2 md:py-0">Teen</a></li>
              <li><a href="#" className="block py-2 md:py-0">Company</a></li>
              <li><a href="#" className="block py-2 md:py-0">Shelancer</a></li>
              <li><Image className="h-[30px] w-[30px]" src={android} alt="Android" /></li>
              <li><Image className="h-[30px] w-[30px]" src={apple} alt="Apple" /></li>
              <li>
                <button className="h-[45px] w-[180px] lg:w-[200px] border-0 rounded-full bg-white text-green-700 !mt-2 md:!mt-0">
                  Company Login
                </button>
              </li>
              <li>
                <button className="h-[45px] w-[180px] lg:w-[200px] rounded-full bg-green-700 text-white !mt-2 md:!mt-0">
                  Earn now
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative px-4 md:px-10 lg:px-0 text-white">
          <Image className="absolute top-1/3 w-full p-0 m-0 -z-10" src={bgGraphic} alt="" />

          <div className="flex flex-col gap-5 justify-center !mt-16 items-center text-center">
            <h3 className="text-4xl font-bold">Funngro Teenlancer</h3>
            <p className="text-[16px] font-medium">Smart Teenagers meet Smart Companies</p>
          </div>

          {/* Responsive Cards using map */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-[180px] !mt-14 max-w-7xl !mx-auto">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] md:!p-12 md:h-[190px] md:w-[190px] rounded-full flex justify-center items-center flex-col text-black text-center"
                style={{ backgroundColor: card.bg }}
              >
                <Image src={card.img} alt={card.title} />
                <h3 className="text-xl font-bold !mt-2">{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <button className="h-[40px] w-[180px] !mt-10 bg-green-700 text-white rounded-full">
              Earn now
            </button>
          </div>
        </div>

        {/* Shark Tank Section */}
        <div className="h-full w-full bg-[#3c405bd5] !mt-20 text-white px-4 md:px-10 lg:px-0">
          <div className="flex flex-col justify-center items-center pt-[60px] text-center">
            <h3 className="text-[32px] md:text-[38px] lg:text-[43px] font-semibold">Funngro @ Shark Tank</h3>
            <p className="max-w-[800px] !mt-2 px-2">
              Loved by lakhs of Teenlancers, Shelancers and thousands of Companies & now loved by SHARKS!!
            </p>
          </div>

          <div className="flex justify-center items-center !mt-10">
            <div className="w-full md:w-[85%] lg:w-[70%] aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/I0XgtabN8rI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex justify-center items-center h-12 bg-[#14182ef6] !mt-10 text-sm text-center">
            © All Copyrights reserved 2025 by FUNNGRO
          </div>
        </div>
      </div>
    </>
  );
}