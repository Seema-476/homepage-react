const CommonHeading = ({ text, className, yellowText }) => {
  return (
    <h2 className={`font-lato font-extrabold lg:text-6xl sm:text-4xl text-3xl lg:leading-[72px] text-white max-w-[786px] text-center ${className}`}>{text}
      <span className={`text-yellow-300 ${className}`}>{ yellowText}</span></h2>
    )
}

export default CommonHeading