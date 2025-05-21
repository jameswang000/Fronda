import homePageJSON from "../planning/text/Home_Page_Text.json";
import SingleReview from "./SingleReview";
import SingleReviewProps from "./SingleReviews";
import { v4 as uuidv4 } from "uuid";

const Reviews = () => {
  const reviewsList = homePageJSON.reviews.reviewsList;
  return (
    <div className="flex flex-col items-center bg-frondaBiege py-20 max-w-[2000px]">
      <h2 className="text-5xl font-semibold text-center">
        {homePageJSON.reviews.header}
      </h2>
      <p className="text-3xl font-normal text-center mt-8 w-2/3 ">
        {homePageJSON.reviews.paragraph}
      </p>
      <div className="flex flex-row flex-wrap justify-around w-7/8 gap-6 pt-14">
        {reviewsList.map((reviewProps: SingleReviewProps) => {
          const id = uuidv4();
          return <SingleReview {...reviewProps} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
