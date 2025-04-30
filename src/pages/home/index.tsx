import { BeautyServices } from "@/components/intro";
import { Section } from "@/components/section";
import { FaCalendarAlt } from "react-icons/fa";

import './swipper.css';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ServiceCards } from "@/components/services-card/service-card";
import { SwiperSlides } from "@/components/swiper/swiper";

export const Home = () => {


  return (
    <>
      <BeautyServices />

      <ServiceCards />
      <SwiperSlides />
      <Section />


      <a
        href="https://minhaagendavirtual.com.br/agendamentos/incluir/nailsdebora/33347475A"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-dark shadow-lg transition duration-300"
      >
        <FaCalendarAlt className="text-white text-xl" />
      </a>
    </>
  );
};
