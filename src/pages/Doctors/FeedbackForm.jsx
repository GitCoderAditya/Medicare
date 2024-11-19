import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const HandleSubmitReview = async(e) =>{
    e.preventDefault();
    console.log(reviewText)
  }

  

  return (
    <form action=" ">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold">
          How Would you the overall Experience?
        </h3>
             
    <div>
      {[...Array(5).keys()].map((_, index) => {
        // Increment index by 1 to match the rating number (1-5)
        index += 1;

        // Determine the button class based on the rating and hover states
        const isSelected = index <= (rating || hover); // If rating or hover is at least the current index, it should be yellow
        const buttonClass = isSelected
          ? "text-yellow-500" // If selected, yellow color
          : "text-gray-400";  // Otherwise, gray color

        return (
          <button
            key={index}
            type="button"
            className={`${buttonClass} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
            onClick={() => setRating(index)}  // Set the rating when clicked
            onMouseEnter={() => setHover(index)}  // Set hover state on mouse enter
            onMouseLeave={() => setHover(rating)}  // Reset hover to rating when mouse leaves
            onDoubleClick={() => { 
              setHover(0);  // Reset hover to 0
              setRating(0); // Reset rating to 0
            }}
          >
            <span>
              <AiFillStar />
            </span>
          </button>
        );
      })}
    </div>

      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
            Share your feedback or suggestions
        </h3>
        <textarea name="" id="" className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3  rounded-md" rows="5" placeholder="Write your message"
         onChange={(e) => setReviewText(e.target.value)}></textarea>
         <button onClick={HandleSubmitReview} type="submit" className="btn">Submit Feedback</button>
        
      </div>
    </form>
  );
}

export default FeedbackForm;
