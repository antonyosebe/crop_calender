import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import image1 from "../images/Crop.png";
import image2 from "../images/land_preparation.jpg";
import image3 from "../images/planting.jpg";
import image4 from "../images/maize_growing.jpg";
import image5 from "../images/harvesting.jpg";
import image6 from "../images/Carrots.jpg";
import image7 from "../images/maize.jpeg";
import image8 from "../images/farmer.png";

const images = [
  { id: 1, src: image8, text: "Tired of Guessing \n when to Plant?" },
  { id: 2, src: image7, text: "Unlock Your Farming Potential" },
  { id: 3, src: image6, text: "Maximize Your Yields Today" },
];
const CropCalender = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              className="w-full bg-cover bg-center bg-black"
              style={{ backgroundImage: `url(${image.src})`, height: "40rem" }}
            >
              <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
                <h1 className="text-white text-6xl font-bold">
                  {image.text.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-cream min-h-screen flex justify-center items-center py-10 px-5">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black-800 mb-4 leading-tight">
              Unlock the Secrets of Optimal Timing
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-gray-600 text-lg mb-4">
                Take control of your farm's future with our innovative and
                comprehensive crop calendar. It goes beyond basic planting
                schedules, providing precision timing for every stage of your
                crops, livestock, and poultry management. With Shamba Records,
                you can plan and execute each stage with confidence, leading to
                better outcomes and increased productivity.
              </p>
            </div>

            <div className="md:w-2/3 mt-6 md:mt-0 relative">
              <img src={image1} alt="crop" className="rounded-md shadow-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Crop Calendar is here to simplify <br /> your farming journey
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We’ll work with you to create personalized stages for each season:{" "}
            <span className="font-semibold">Land preparation</span>,{" "}
            <span className="font-semibold">Planrting</span>,
            <span className="font-semibold">Manuare Application</span>,{" "}
            <span className="font-semibold">Vegetative growth</span>, and{" "}
            <span className="font-semibold">Harvesting</span>.
          </p>
        </div>
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-16 lg:space-y-0">
          {/* Left Image and Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <img
              src={image2}
              alt="Land preparation"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
          </div>

          {/* Right Image and Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-12">
            <div className="w-full relative mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                LAND PREPARATION
              </h2>
              <p className="text-gray-600 mb-4">
                This initial stage sets the foundation for successful crop
                growth. It involves clearing the land of weeds, debris, and
                previous crop remnants, followed by plowing and leveling. Proper
                land preparation improves soil structure, promotes root growth,
                and enhances water retention, creating an ideal environment for
                planting.
              </p>
            </div>
          </div>
        </div>
        {/* section two */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-16 lg:space-y-0">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="w-full relative mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                PLANTING
              </h2>
              <p className="text-gray-600 mb-4">
                Planting is a critical step where seeds or seedlings are sown
                into the prepared soil. Timing is crucial as planting too early
                or late can affect crop growth and yield. Farmers need to
                consider the season, crop variety, and spacing between plants to
                ensure optimal conditions for germination and development.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-12">
            <img
              src={image3}
              alt="Planting"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
          </div>
        </div>
        {/* section three */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-16 lg:space-y-0">
          {/* Left Image and Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <img
              src={image4}
              alt="Plants growing"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
          </div>

          {/* Right Image and Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-12">
            <div className="w-full relative mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                VEGETATIVE GROWTH
              </h2>
              <p className="text-gray-600 mb-4">
                During the growth phase, plants require careful monitoring and
                maintenance. This includes irrigation, fertilization, and
                protection from pests and diseases. Providing the right
                nutrients and water at this stage ensures healthy plant
                development, while controlling pests safeguards the crop from
                potential damage.
              </p>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-16 lg:space-y-0">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="w-full relative mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                HARVESTING
              </h2>
              <p className="text-gray-600 mb-4">
                The final stage of the crop calendar is harvesting, where the
                matured crops are collected. Harvesting at the right time is
                vital to ensure quality and quantity. It often involves manual
                or mechanical processes, depending on the scale of farming.
                Proper storage and post-harvest handling are also essential to
                minimize losses and maintain the value of the produce.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-12">
            <img
              src={image5}
              alt="Harvesting"
              className="w-full h-full rounded-lg shadow-md mb-6 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropCalender;
