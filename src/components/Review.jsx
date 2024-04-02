import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Interested from "./Interested";
import cheers from "../assets/cheers.png";
import Star from "./Star";
// import { FaStar,FaStarHalfAlt  } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa6";
// import { AiOutlineStar } from "react-icons/ai";

const Review = () => {
  // const designations = [
  //   {
  //     id: 1,

  //     img: student,
  //     description: "Learning specific skills to advance my career",
  //   },
  //   {
  //     id: 2,

  //     img: professional,
  //     description: "Explore new topics i'm intereseted in ",
  //   },
  //   {
  //     id: 3,

  //     img: parent,
  //     description: "Refreshing my math foundation",
  //   },
  //   {
  //     id: 4,
  //     img:lifelong,
  //     description: "Exercising my brain to stay sharp",
  //   },
  //   {
  //     id: 5,
  //     img: teacher,
  //     description: "Something else",
  //   },

  // ];

  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (id) => {
    // if same li clicked again then is will reset it into normalform else border color will change accordingly
    console.log("before", isClicked);
    setIsClicked((prevID) => (prevID === id ? null : id));
    console.log("after", isClicked);
  };

  const stars = 4;

  return (
    <div className=" ml-5 relative w-11/12 flex flex-col items-center justify-center">
      <div className=" relative   w-[300px] left-2  md:w-[500px] sm:mr-36 md:ml-48   lg:w-[900px] lg:left-8    top-0   h-1 bg-gray-300 ">
        <button className="text-black absolute -top-1.5 -left-5   ">
          <NavLink to="/mathlvl">
            {" "}
            <FaLessThan />{" "}
          </NavLink>
        </button>
        <div className="absolute w-[300px] sm:w-[500px] lg:w-[900px] h-1 bg-green-500"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center   ">
        <div className="w-1/2 h-[40vh] md:h-[70vh] md:mt-10 flex items-center justify-center  ">
          <img src={cheers} alt="cheer image" className="w-[250px]" />
        </div>
        <div className="w-1/2  -mt-10  sm:mt-32 ">
          <h1 className="text-3xl  font-bold mb-10 ">You're on your way!</h1>

          <Star stars={stars} />

          <p className="font-semibold">
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            quasi minima, necessitatibus est optio consequatur id nesciunt ab
            earum nam, itaque, suscipit esse illo doloribus magnam sint
            reiciendis iste magni temporibus corrupti amet provident pariatur
            molestiae dolorum. Consequuntur voluptate ullam vel iure minus
            dolores reprehenderit culpa, obcaecati facilis illum veritatis!"
          </p>
          <span className="font-semibold">- Jacob S.</span>
        </div>
      </div>

      <button>
        <NavLink to="/mathlvl">
          <button className="bg-black   text-white font-bold py-2 px-4 border   rounded">
            Continue
          </button>
        </NavLink>
      </button>
      {/* <button>
        <NavLink to="/interested">Next</NavLink>
      </button> */}
    </div>
  );
};

export default Review;
