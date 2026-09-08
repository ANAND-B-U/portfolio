import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Exceptional work on the machine learning project. The predictive models exceeded our accuracy expectations.",
    quote: `Delivered a robust ML solution that transformed our data analysis workflow. Professional communication and technical expertise throughout the project lifecycle.`,
    name: "Rajesh Kumar",
    designation: "Tech Lead, Data Solutions Inc.",
  },
  {
    message:
      "Outstanding data analytics dashboard that provided real-time insights for our business decisions.",
    quote: `The Flask-based analytics platform improved our decision-making process significantly. Clean code, excellent documentation, and seamless integration with our existing systems.`,
    name: "Priya Sharma",
    designation: "Product Manager, Analytics Corp",
  },
  {
    message:
      "Impressive NLP implementation that automated our text processing pipeline efficiently.",
    quote: `Built a custom sentiment analysis tool that saved our team hours of manual work. The solution was scalable, well-documented, and delivered ahead of schedule.`,
    name: "Arun Patel",
    designation: "CTO, InnovateTech",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
