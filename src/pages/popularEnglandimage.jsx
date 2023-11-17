
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function PopularEnglandimage() {

    const englandImage = [
        {
            "id": 1,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        },
        {
            "id": 2,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        },
        {
            "id": 3,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        },
        {
            "id": 4,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        },

        {
            "id": 5,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        },
        {
            "id": 6,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        },
        {
            "id": 7,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        },
        {
            "id": 8,
            "city": "Berselona",
            "url": "https://source.unsplash.com/VmX3vmBecFE/250x200",
            "title": "Lorem ipsum dolor sit amet consectetur adipisicing "

        }

    ]
    return (
        <div>


            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mx-16 p-8"
            >

                {englandImage.map((imagedata) => {
                    const { id, url, city, title } = imagedata;

                    return (
                        <>
                            <SwiperSlide>
                                <div key={id} className='p-8 bg-slate-200'>
                                    <img src={url} alt="" className='h-[200px] w-[300px] mx-1' />
                                    <p className='text-2xl my-2'>{city}</p>
                                    <h1 className='text-xl'>{title}</h1>

                                </div>
                            </SwiperSlide>
                        </>
                    )
                })}


            </Swiper>
        </div>
    );
}
