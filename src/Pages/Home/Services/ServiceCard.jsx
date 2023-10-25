import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-72 md:h-60 lg:h-48 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{title}</h2>
        <div className="card-actions items-center font-semibold text-xl text-orange-500">
          <p className="">
            Price: ${price}
          </p>
          <button className="">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
