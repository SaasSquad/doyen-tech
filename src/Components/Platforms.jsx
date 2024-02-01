
import React, { useState, useEffect } from "react";
import "../App.css"; 

function Platforms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const images = [
        {
          url: "https://doyenetech.com/wp-content/uploads/2023/11/graduation-hat.png",
          backgroundColor: "#FF5733",
          label: "Programmes"
        },
        {
          url: "https://doyenetech.com/wp-content/uploads/2023/11/education-3.png",
          backgroundColor: "#33FF57",
          label: "Events"
        },
        {
          url: "https://doyenetech.com/wp-content/uploads/2023/11/knowledge-2.png",
          backgroundColor: "#5733FF",
          label: "Admissions"
        },
        {
          url: "https://doyenetech.com/wp-content/uploads/2023/11/diploma.png",
          backgroundColor: "#5733FF",
          label: "Notice"
        },
        {
          url: "https://doyenetech.com/wp-content/uploads/2023/11/open-book.png",
          backgroundColor: "#5733FF",
          label: "Courses"
        },
        // Add more images as needed
      ];
    

  const displayedImages = images.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleButtonClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = direction === "next" ? prevIndex + 1 : prevIndex - 1;
      if (nextIndex < 0) {
        nextIndex = images.length - 3;
      } else if (nextIndex > images.length - 3) {
        nextIndex = 0;
      }
      return nextIndex;
    });
  };

  return (
    <div className="bg-[#07294d] rounded-lg text-white font-sans font-bold flex flex-col items-center justify-center py-6 px-6 sm:scroll-mx-0.5">
      <p className="text-3xl mb-4">Best Platform to Learn Everything</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col sm:flex-row items-center platform-container">
          <button
            className="bg-transparent hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full border border-white transition-all duration-300 mb-2 sm:mb-0 sm:mr-2"
            onClick={() => handleButtonClick("prev")}
          >
            &lt;
          </button>
          <div className="flex flex-wrap justify-center mb-4 sm:mb-0">
            {displayedImages.map((image, index) => (
              <div
                key={index}
                className="mx-2 mb-2 sm:mx-4 sm:mb-0 rounded-lg overflow-hidden platform-image"
                style={{ backgroundColor: image.backgroundColor }}
              >
                <img className="w-full h-40 object-cover platform-image-flow" src={image.url} alt="Content" />
                <p className="text-white text-center mt-2 text-lg font-bold text-4xl">{image.label}</p>
              </div>
            ))}
          </div>
          <button
            className="bg-transparent hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full border border-white transition-all duration-300"
            onClick={() => handleButtonClick("next")}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default Platforms;
