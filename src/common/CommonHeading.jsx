import { useLocation } from "react-router-dom"

const CommonHeading = ({ text, className, yellowText }) => {
  const pathname= useLocation().pathname
  return (
    <h2 className={`font-lato font-extrabold lg:text-6xl sm:text-4xl text-3xl lg:leading-[72px] text-white max-w-[786px] text-center ${className}`}>{text}
      <span className={`${pathname === "/" ? "text-black" : pathname === "/about" ? "text-yellow-400" : ""}`}>{yellowText}</span></h2>
    )
}

export default CommonHeading