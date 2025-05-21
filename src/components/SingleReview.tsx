import ReviewStar from "../svgs/ReviewStar";
import SingleReviewProps from "./SingleReviews";

const SingleReview = ({
  name,
  quote,
  content,
  numStars,
}: SingleReviewProps) => {
  return (
    <div className="flex flex-col flex-1 items-start border-frondaSageGreen border-2 rounded-md gap-2.5 pt-12 px-5 pb-24">
      <h4 className="text-3xl font-semibold">{name}</h4>
      <div className="flex flex-row justify-evenly gap-0.5">
        {Array.from({ length: numStars }, (_, i) => (
          <ReviewStar key={i} />
        ))}
      </div>
      <p className="text-2xl font-semibold">{quote}</p>
      <p className="text-xl font-normal">{content}</p>
    </div>
  );
};

export default SingleReview;
