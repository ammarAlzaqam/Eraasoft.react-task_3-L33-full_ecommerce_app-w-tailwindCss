import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function GoBack({ category }) {
  return (
    <div className="mt-[80px] container">
      <Link
        to={`/category/${category}`}
        className="text-[15px] text-black/50 leading-6.25 flex items-center gap-2"
      >
        <FaArrowLeft /> Go Back
      </Link>
    </div>
  );
}
