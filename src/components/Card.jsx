export default function Card({ imgPath, altText, title, description }) {
  return (
    <div className="w-full p-5 bg-[#121320] cursor-pointer rounded-[15px] flex flex-col gap-5 flex-shrink-0 hover:ring-2 ring-[#59C09D]">
      <img
        className="w-full aspect-auto rounded-lg"
        src={imgPath}
        alt={altText}
      />
      <h4 className="text-white text-xl font-bold">{title}</h4>
      <p className=" text-[#8E8C96] text-sm">{description}</p>
    </div>
  );
}
