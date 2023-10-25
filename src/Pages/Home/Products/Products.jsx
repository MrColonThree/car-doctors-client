import { Link } from "react-router-dom";
import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";
const Products = () => {
  return (
    <div className="my-20">
      <div className="text-center space-y-4 my-10">
        <h4 className="text-lg text-orange-500 font-bold">Popular Products</h4>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p className="text-[#737373] max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Product-1 */}
        <div className="rounded-lg p-5 flex flex-col items-center border shadow-lg">
          <div className="bg-[#F3F3F3] rounded-lg w-full p-5">
            <img className="h-60 mx-auto" src={product1} alt="" />
          </div>
          <div className="rating my-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-2xl font-bold mb-5">Cools Led Light</h2>
          <p className="text-lg text-orange-500 font-semibold">$20.00</p>
        </div>
        {/* Product-2 */}
        <div className="rounded-lg p-5 flex flex-col items-center border shadow-lg">
          <div className="bg-[#F3F3F3] rounded-lg w-full p-5">
            <img className="h-60 mx-auto" src={product2} alt="" />
          </div>
          <div className="rating my-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-2xl font-bold mb-5">Car Engine Plug</h2>
          <p className="text-lg text-orange-500 font-semibold">$20.00</p>
        </div>
        {/* Product-3 */}
        <div className="rounded-lg p-5 flex flex-col items-center border shadow-lg">
          <div className="bg-[#F3F3F3] rounded-lg w-full p-5">
            <img className="h-60 mx-auto" src={product3} alt="" />
          </div>
          <div className="rating my-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-2xl font-bold mb-5">Car Engine Plug</h2>
          <p className="text-lg text-orange-500 font-semibold">$20.00</p>
        </div>
        {/* Product-4 */}
        <div className="rounded-lg p-5 flex flex-col items-center border shadow-lg">
          <div className="bg-[#F3F3F3] rounded-lg w-full p-5">
            <img className="h-60 mx-auto" src={product4} alt="" />
          </div>
          <div className="rating my-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-2xl font-bold mb-5">Car Engine Plug</h2>
          <p className="text-lg text-orange-500 font-semibold">$20.00</p>
        </div>
        {/* Product-5 */}
        <div className="rounded-lg p-5 flex flex-col items-center border shadow-lg">
          <div className="bg-[#F3F3F3] rounded-lg w-full p-5">
            <img className="h-60 mx-auto" src={product5} alt="" />
          </div>
          <div className="rating my-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-2xl font-bold mb-5">Car Engine Plug</h2>
          <p className="text-lg text-orange-500 font-semibold">$20.00</p>
        </div>
        {/* Product-6 */}
        <div className="rounded-lg p-5 flex flex-col items-center border shadow-lg">
          <div className="bg-[#F3F3F3] rounded-lg w-full p-5">
            <img className="h-60 mx-auto" src={product6} alt="" />
          </div>
          <div className="rating my-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-2xl font-bold mb-5">Car Engine Plug</h2>
          <p className="text-lg text-orange-500 font-semibold">$20.00</p>
        </div>
      </div>
      <div className="mt-10 mb-20 text-center">
        <Link to="/">
          <button className="btn btn-outline bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-lg">
            More Products
          </button>
        </Link>
      </div>
      {/* <div className="border-b-[70px] border-b-orange-500 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent h-0  w-[350px] relative mx-auto">
        <h1 className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 font-semibold text-white text-lg">
          Home/Checkout
        </h1>
      </div> */}
    </div>
  );
};

export default Products;
