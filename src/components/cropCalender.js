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
