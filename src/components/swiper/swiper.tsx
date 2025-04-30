import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import unha01 from "@/assets/unha-01.jpg"
import unha02 from "@/assets/unha-02.jpg"
import unha03 from "@/assets/unha-03.jpg"
import unha04 from "@/assets/unha-04.jpg"
import unha05 from "@/assets/unha-05.jpg"


export function SwiperSlides() {
    const images = [
        unha01, unha02, unha03, unha04, unha05
    ];
    return (

        <div className="w-full overflow-x-hidden">
            <Swiper
                className="w-full max-w-screen overflow-hidden"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-64 w-full overflow-hidden rounded-xl shadow-md">
                            <img src={src} alt={`Imagem ${index + 1}`} className="h-full w-full object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </div>
    )
}