import React from "react";
import image from "../images/Crop.png";

const cropCalender = () => {
  return (
    // <div style={styles.rightCurvedDiv}>
    //   This div is curved on the right side!
    // </div>
    <div>
      <div
        className="w-full bg-cover bg-center bg-black"
        style={{ backgroundImage: `url(${image})`, height: "40rem" }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">
            Tired of Guessing <br /> when to Plant?
          </h1>
        </div>
      </div>
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
              <img src={image} alt="crop" className="rounded-md shadow-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-6 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600">Our Services</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Five Pathways is here to simplify <br /> your retirement planning.
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We’ll work with you to create a personalized strategy that
            incorporates all of the paths of retirement planning:{" "}
            <span className="font-semibold">Income</span>,{" "}
            <span className="font-semibold">Taxes</span>,
            <span className="font-semibold"> Investments</span>,{" "}
            <span className="font-semibold">Healthcare</span>, and{" "}
            <span className="font-semibold">Estate Planning</span>.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-16 lg:space-y-0">
          {/* Left Image and Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Mountain landscape"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tax Planning
            </h2>
            <p className="text-gray-600 mb-4">
              Your retirement plans may not include the IRS. But rest assured,
              the IRS has plans for your retirement! Let’s work together to make
              sure you get to keep the money you’ve earned. We’ll show you how
              to diversify your tax strategy and maximize your retirement
              benefits. We’ll make sure that paying taxes isn’t a roadblock on
              your way to retirement.
            </p>
            <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition">
              Learn more
            </button>
          </div>

          {/* Right Image and Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-12">
            <div className="w-full relative mb-6">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Desert landscape"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Retirement Income Planning
            </h2>
            <p className="text-gray-600 mb-4">
              You’ve got goals. But goals cost money. Make sure you have an
              income that works for you in retirement. And while we’re at it,
              why not make that income guaranteed? We’ll show you how to get the
              most out of your current assets, pension, and/or Social Security
              (whatever you might have). We’ll also be along for the full ride,
              helping to smooth things out when the road ahead gets a little
              bumpy. There are no shortcuts on the path to retirement, but we do
              know all kinds of clever side streets.
            </p>
            <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const styles = {
//   rightCurvedDiv: {
//     width: "100vw",
//     height: "500px",
//     backgroundColor: "#1CC458",
//     borderBottomRightRadius: "80px",
//     display: "flex",
//     color: "white",
//     fontSize: "16px",
//   },
// };

export default cropCalender;
