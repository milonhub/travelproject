
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AutoSilder() {


    const testimonials = [
        {
            name: "Alice Johnson",
            occupation: "Marketing Manager",
            comment: "I am incredibly impressed with the results we achieved using this product. The innovative features and user-friendly interface have made a significant impact on our marketing campaigns. Highly recommended!",
            rating: 5
        },
        {
            name: "John Smith",
            occupation: "Small Business Owner",
            comment: "This service has been a game-changer for my small business. The customizable options and seamless integration have saved me time and money. The customer support is top-notch, always ready to assist. 10/10!",
            rating: 4.5
        },
        {
            name: "Emily Turner",
            occupation: "Freelance Photographer",
            comment: "As a freelance photographer, organization and efficiency are crucial. This platform has streamlined my workflow, allowing me to focus more on my passion for photography. I couldn't be happier with the results!",
            rating: 4.8
        },
        {
            name: "Michael Rodriguez",
            occupation: "Tech Enthusiast",
            comment: "I've tried many products in the tech industry, and this one stands out for its cutting-edge features and performance. The team behind it is clearly dedicated to staying ahead of the curve. A must-have for any tech enthusiast!",
            rating: 4.7
        }
    ];

    console.log(testimonials);

    return (
        <>
            <h1 className='text-center text-xl italic text-red-500 pt-8'>Testimonals</h1>
            <p className='text-center text-3xl'>What travelers say</p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {testimonials.map((testimonial) => {
                    const { name, occupation, comment } = testimonial;
                    return (

                        <>
                            <SwiperSlide><div className='h-72 ' key={name}>
                                <h1 className='text-8xl my-2'>,,</h1>
                                <p className='text-xl'>{comment}</p>
                                <p className='my-4 text-2xl'>By {name}, {occupation}</p>
                            </div></SwiperSlide>
                        </>
                    )
                })}


                {/* <SwiperSlide><div className='h-72'>Slide 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quia fuga inventore eaque voluptatibus. Perspiciatis eos facere recusandae, quia minus voluptas inventore harum!</div></SwiperSlide>
        <SwiperSlide><div className='h-72'>Slide 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quia fuga inventore eaque voluptatibus. Perspiciatis eos facere recusandae, quia minus voluptas inventore harum!</div></SwiperSlide>
        <SwiperSlide><div className='h-72'>Slide 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quia fuga inventore eaque voluptatibus. Perspiciatis eos facere recusandae, quia minus voluptas inventore harum!</div></SwiperSlide>
         */}
            </Swiper>
        </>
    );
}
