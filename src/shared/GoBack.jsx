import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 container flex items-start">
      <Link
        onClick={() => navigate(-1)}
        className="group text-[15px] text-black/50 leading-6.25 flex items-center gap-2 transition duration-300 hover:text-[#D87D4A] "
      >
        <FaArrowLeft className="transition duration-300 group-hover:-translate-x-1" />
        <span>Go Back</span>
      </Link>
    </div>
  );
}
